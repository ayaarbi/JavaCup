import React from "react";
import '../styles/Menu.css';
const Menu = () => {
  const drinks = [
    {
      name: "Espresso",
      price: "2.00€",
      img: "/images/espresso.jpg",
      desc: "Rich, bold and aromatic."
    },
    {
      name: "Americano",
      price: "2.50€",
      img: "/images/americano.jpg",
      desc: "Rich espresso with hot water."
    },
    {
      name: "Cappuccino",
      price: "3.00€",
      img: "/images/cappuccino.jpg",
      desc: "Perfect balance of espresso, milk and foam."
    },
    {
      name: "Latte",
      price: "3.20€",
      img: "/images/latte.jpg",
      desc: "Smooth and creamy coffee delight."
    },
    {
      name: "Mocha",
      price: "3.50€",
      img: "/images/mocha.jpg",
      desc: "Rich espresso with steamed milk and chocolate."
    },
    {
      name: "Iced Coffee",
      price: "2.80€",
      img: "/images/icedCoffee.jpg",
      desc: "Chilled coffee over ice"
    },
    {
      name: "Hot Chocolate  ",
      price: "3.00€",
      img: "/images/hotChocolate.jpg",
      desc: "Rich and creamy chocolate drink."
    },
    {
      name: "Green Tea",
      price: "2.20€",
      img: "/images/tea.jpg",
      desc: "Refreshing and calming herbal drink."
    },
    {
      name: "Chai Latte",
      price: "3.00€",
      img: "/images/chaiLatte.jpg",
      desc: "Spiced tea with steamed milk."
    },
    {
      name: "Fresh Orange Juice",
      price: "3.50€",
      img: "/images/orangeJuice.jpg",
      desc: "Freshly squeezed, vitamin-packed goodness."
    }
  ];

  const desserts = [
    {
      name: "Chocolate Cake",
      price: "4.00€",
      img: "/images/chocolateCake.jpg",
      desc: "Moist and rich with a cocoa punch."
    },
    {
      name: "Cheesecake",
      price: "4.20€",
      img: "/images/cheeseCake.jpg",
      desc: "Creamy, smooth and decadently sweet."
    },
    {
      name: "Croissant",
      price: "2.00€",
      img: "/images/croissant.jpg",
      desc: "Flaky, buttery and freshly baked."
    },
    {
      name: "Brownie",
      price: "2.00€",
      img: "/images/brownie.jpg",
      desc: "Soft, moist and bursting with flavor."
    },
    {
      name: "Tiramisu",
      price: "4.50€",
      img: "/images/tiramisu.jpg",
      desc: "Coffee-flavored Italian dessert."
    },
    {
      name: "Cinnamon Roll",
      price: "3.00€",
      img: "/images/cinnamonRoll.jpg",
      desc: "Warm roll with cinnamon sugar glaze."
    },
    {
      name: "Macarons",
      price: "3.50€",
      img: "/images/macarons.jpg",
      desc: "Delicate and colorful French cookies."
    },
    {
      name: "Lemon Tart",
      price: "3.80€",
      img: "/images/lemonTart.jpg",
      desc: "Tangy and sweet lemon custard in a buttery crust, topped with fresh zest."
    },
    {
      name: "Panna Cotta",
      price: "4.00€",
      img: "/images/pannaCotta.jpg",
      desc: "Creamy Italian dessert with a hint of vanilla and strawberry."
    },
    {
      name: "Ice Cream",
      price: "3.50€",
      img: "/images/iceCream.jpg",
      desc: "Creamy and delicious ice cream in various flavors."
    }
  ];

  const renderCards = (items) =>
    items.map((item, i) => (
      <div key={i} className="card">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p className="desc">{item.desc}</p>
        <p className="price">{item.price}</p>
      </div>
    ));

  return (
    <section id="menu">
      <h2>Our Menu</h2>

      <h3 className="category-title">Drinks</h3>
      <div className="grid">{renderCards(drinks)}</div>

      <h3 className="category-title">Desserts</h3>
      <div className="grid">{renderCards(desserts)}</div>
    </section>
  );
};

export default Menu;
