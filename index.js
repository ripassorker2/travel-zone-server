const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const hotels = require("./data/hotels.json");
const places = require("./data/places.json");

app.get("/", (req, res) => {
  res.send("travel guru server is running");
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:id", (req, res) => {
  const id = req.params.id;
  const hotel = hotels.filter((ht) => ht.category_id == id);
  res.send(hotel);
});

app.get("/places", (req, res) => {
  res.send(places);
});

app.get("/places/:id", (req, res) => {
  const id = req.params.id;
  const place = places.find((n) => n.id == id);
  console.log(place);
  res.send(place);
});

app.listen(port, () => {
  console.log(`Travel guru running on port, ${port}`);
});
