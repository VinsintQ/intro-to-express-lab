const express = require("express");
const app = express();
app.get("/greetings/:Name", (req, res) => {
  // Accessing the parameter
  console.log(req.params.itemNumber);
  // Sending a response with the parameter
  res.send(`<h1>Hello there, ${req.params.Name} </h1>`);
});

app.get("/roll/:num", (req, res) => {
  // Accessing the parameter
  const num = req.params.num;

  const random = Math.ceil(Math.random() * num);
  // Sending a response with the parameter
  res.send(`<h1>Hello there, ${random} </h1>`);
});

app.get("/collectibles/:index", (req, res) => {
  // Accessing the parameter
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];

  const index = req.params.index;
  if (index >= collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    let coll = collectibles[index];
    // Sending a response with the parameter
    res.send(
      `<h2>so you want ${coll.name} For ${coll.price} it can be yours </h2>`
    );
  }
});

app.get("/shoes", (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
  ];
  const minPrice = req.query.minprice;
  const maxPrice = req.query.maxprice;
  const type = req.query.type;

  let array = [];
  // && elem.price <= maxPrice && elem.type == type
  shoes.forEach((elem) => {
    if (elem.price >= minPrice) {
      array += `name : ${elem.name}    price : ${elem.price}    type : ${elem.type} <br>`;
    } else if (elem.price <= maxPrice) {
      array += `name : ${elem.name}    price : ${elem.price}    type : ${elem.type} <br>`;
    } else if (elem.type == type) {
      array += `name : ${elem.name}    price : ${elem.price}    type : ${elem.type} <br>`;
    } else if (
      minPrice == undefined &&
      maxPrice == undefined &&
      type == undefined
    ) {
      array += `name : ${elem.name}    price : ${elem.price}    type : ${elem.type} <br>`;
    }
    //  price: elem.price, type: elem.type
  });
  res.send(`${array}`);

  // Using the query parameters to customize the response
});

app.listen(3000, () => {
  console.log("server on port 3000 ");
});
