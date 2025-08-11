from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import random

app = Flask(__name__)
CORS(app)

DRINKS = [
    {"name": "Espresso", "price": "2.00€", "desc": "Rich, bold and aromatic."},
    {"name": "Americano", "price": "2.50€", "desc": "Rich espresso with hot water."},
    {"name": "Cappuccino", "price": "3.00€", "desc": "Perfect balance of espresso, milk and foam."},
    {"name": "Latte", "price": "3.20€", "desc": "Smooth and creamy coffee delight."},
    {"name": "Mocha", "price": "3.50€", "desc": "Rich espresso with steamed milk and chocolate."},
    {"name": "Iced Coffee", "price": "2.80€", "desc": "Chilled coffee over ice."},
    {"name": "Hot Chocolate", "price": "3.00€", "desc": "Rich and creamy chocolate drink."},
    {"name": "Green Tea", "price": "2.20€", "desc": "Refreshing and calming herbal drink."},
    {"name": "Chai Latte", "price": "3.00€", "desc": "Spiced tea with steamed milk."},
    {"name": "Fresh Orange Juice", "price": "3.50€", "desc": "Freshly squeezed, vitamin-packed goodness."}
]

DESSERTS = [
    {"name": "Chocolate Cake", "price": "4.00€", "desc": "Moist and rich with a cocoa punch."},
    {"name": "Cheesecake", "price": "4.20€", "desc": "Creamy, smooth and decadently sweet."},
    {"name": "Croissant", "price": "2.00€", "desc": "Flaky, buttery and freshly baked."},
    {"name": "Brownie", "price": "2.00€", "desc": "Soft, moist and bursting with flavor."},
    {"name": "Tiramisu", "price": "4.50€", "desc": "Coffee-flavored Italian dessert."},
    {"name": "Cinnamon Roll", "price": "3.00€", "desc": "Warm roll with cinnamon sugar glaze."},
    {"name": "Macarons", "price": "3.50€", "desc": "Delicate and colorful French cookies."},
    {"name": "Lemon Tart", "price": "3.80€", "desc": "Tangy and sweet lemon custard in a buttery crust."},
    {"name": "Panna Cotta", "price": "4.00€", "desc": "Creamy Italian dessert with vanilla and strawberry."},
    {"name": "Ice Cream", "price": "3.50€", "desc": "Creamy and delicious ice cream in various flavors."}
]

HOURS = "We are open Monday–Friday 8:00–18:00, Saturday–Sunday 9:00–17:00."
LOCATION = "123 Coffee Street, Bean Town."
WELCOME_HINTS = [
    "Hi! I can tell you about our menu, prices, or recommend something tasty.",
    "Ask me for the menu, the price of an item, or say 'recommend me a drink'."
]

def normalize(text: str) -> str:
    return text.lower().strip()

def find_item(text: str):
    """Return an item dict and category 'drink'|'dessert' if found, else None."""
    t = normalize(text)
    for d in DRINKS:
        if d["name"].lower() in t:
            return d, "drink"
    for s in DESSERTS:
        if s["name"].lower() in t:
            return s, "dessert"
    words = re.findall(r"[a-zA-Z0-9]+", t)
    for w in words:
        for d in DRINKS:
            if w == d["name"].split()[0].lower():
                return d, "drink"
        for s in DESSERTS:
            if w == s["name"].split()[0].lower():
                return s, "dessert"
    return None, None

def list_menu(category=None):
    if category == "drinks":
        return "Drinks:\n" + "\n".join([f"- {d['name']} — {d['price']}: {d['desc']}" for d in DRINKS])
    if category == "desserts":
        return "Desserts:\n" + "\n".join([f"- {d['name']} — {d['price']}: {d['desc']}" for d in DESSERTS])
    s = "Drinks:\n" + "\n".join([f"- {d['name']} — {d['price']}" for d in DRINKS])
    s += "\n\nDesserts:\n" + "\n".join([f"- {d['name']} — {d['price']}" for d in DESSERTS])
    return s

def recommend_pairing():
    drink = random.choice(DRINKS)
    dessert = random.choice(DESSERTS)
    return f"I recommend the {drink['name']} ({drink['price']}) paired with a {dessert['name']} ({dessert['price']}) — {dessert['desc']}"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(force=True, silent=True) or {}
    text = data.get("message", "")
    t = normalize(text)

    if not t:
        return jsonify({"reply": random.choice(WELCOME_HINTS)})
    if any(g in t for g in ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"]):
        return jsonify({"reply": f"Hello! {random.choice(WELCOME_HINTS)}"})

    if "menu" in t and ("drink" in t or "drinks" in t):
        return jsonify({"reply": list_menu("drinks")})
    if "menu" in t and ("dessert" in t or "desserts" in t):
        return jsonify({"reply": list_menu("desserts")})
    if "menu" in t or t in ["what do you have", "what's available", "show me the menu", "show menu"]:
        return jsonify({"reply": list_menu()})

    price_match = re.search(r"(price of|price|how much is|how much for|cost of)\s+([a-zA-Z ]+)", t)
    if price_match:
        item_part = price_match.group(2)
        item, cat = find_item(item_part)
        if item:
            return jsonify({"reply": f"{item['name']} costs {item['price']}. {item['desc']}"})
        else:
            return jsonify({"reply": "Sorry — I couldn't find that item. Try names like 'Latte' or 'Croissant'."})

    item, cat = find_item(t)
    if item:
        return jsonify({"reply": f"{item['name']} — {item['price']}. {item['desc']}"})

    if any(k in t for k in ["open", "hours", "when are", "time"]):
        return jsonify({"reply": HOURS})
    if any(k in t for k in ["where", "location", "address"]):
        return jsonify({"reply": LOCATION})

    if any(k in t for k in ["recommend", "suggest", "what should i try", "i want"]):
        if "cold" in t or "iced" in t:
            cold_drinks = [d for d in DRINKS if "iced" in d["name"].lower() or "ice" in d["desc"].lower()]
            pick = random.choice(cold_drinks) if cold_drinks else random.choice(DRINKS)
            return jsonify({"reply": f"Try our {pick['name']} — {pick['desc']} ({pick['price']})."})
        if "sweet" in t or "dessert" in t:
            return jsonify({"reply": recommend_pairing()})
        return jsonify({"reply": recommend_pairing()})

    if "pair" in t or "with" in t and any(w in t for w in ["coffee", "cake", "dessert"]):
        return jsonify({"reply": recommend_pairing()})

    if any(k in t for k in ["job", "work", "are you", "who are you"]):
        return jsonify({"reply": "I'm CoffeeBot — here to answer questions about our menu, prices, and give recommendations!"})

    if any(k in t for k in ["how are you", "how do you do"]):
        return jsonify({"reply": "I'm great — ready to help you find the perfect cup! Would you like a recommendation?"})

    return jsonify({"reply": "Sorry, I didn't understand that. Ask about our menu, prices, hours, or say 'recommend me a drink'."})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
