/*eslint-disable*/
import gpadImg from "./assets/gpad-colored.png";
import keyboardImg from "./assets/keyboard.png";
import tvImg from "./assets/smart-tv.png";
import chairImg from "./assets/chair.png";

import coatImg from "./assets/coat.png";
import bagImg from "./assets/bag.png";
import cpuImg from "./assets/cpu.png";
import bookselfImg from "./assets/bookself.png";

import carImg from "./assets/car.png";
import shoesImg from "./assets/shoes.png";
import gpadblackImg from "./assets/gpad-black.png";
import jacketImg from "./assets/jacket.png";
import dogfoodImg from "./assets/dogfood.png";
import cameraImg from "./assets/camera.png";
import labtop2Img from "./assets/labtop2.png";
import creamImg from "./assets/cream.png";


const productsData = [
  {
    salePerc: "-40%",
    image: gpadImg,
    prodName: "HAVIT HV-G92 Gamepad",
    priceBefore: 160,
    priceAfter: 120,
  },
  {
    salePerc: "-35%",
    image: keyboardImg,
    prodName: "AK-900 Wired Keyboard",
    priceBefore: 1160,
    priceAfter: 960,
  },
  {
    salePerc: "-30%",
    image: tvImg,
    prodName: "IPS LCD Gaming Monitor",
    priceBefore: 400,
    priceAfter: 370,
  },
  {
    salePerc: "-25%",
    image: chairImg,
    prodName: "S-Series Comfort Chair",
    priceBefore: 400,
    priceAfter: 375,
  },
  {
    salePerc: "-35%",
    image: keyboardImg,
    prodName: "AK-900 Wired Keyboard",
    priceBefore: 1160,
    priceAfter: 960,
  },
  {
    salePerc: "-25%",
    image: chairImg,
    prodName: "S-Series Comfort Chair",
    priceBefore: 400,
    priceAfter: 375,
  },
  {
    salePerc: "-40%",
    image: gpadImg,
    prodName: "HAVIT HV-G92 Gamepad",
    priceBefore: 160,
    priceAfter: 120,
  },
  {
    salePerc: "-30%",
    image: tvImg,
    prodName: "IPS LCD Gaming Monitor",
    priceBefore: 400,
    priceAfter: 370,
  },
];

const bestProductsData = [
  {
    image: coatImg,
    prodName: "The north coat",
    priceBefore: 360,
    priceAfter: 226,
  },
  {
    image: bagImg,
    prodName: "Gucci duffle bag",
    priceBefore: 1160,
    priceAfter: 960,
  },
  {
    image: cpuImg,
    prodName: "RGB liquid CPU Cooler",
    priceBefore: 170,
    priceAfter: 160,
  },
  {
    image: bookselfImg,
    prodName: "Small BookSelf",
    priceBefore: "",
    priceAfter: 360,
  },
];

const ourProductsData = [
  {
    image: dogfoodImg,
    prodName: "Breed Dry Dog Food",
    priceAfter: 100,
  },
  {
    image: cameraImg,
    prodName: "CANON EOS DSLR Camera",
    priceAfter: 360,
  },
  {
    image: labtop2Img,
    prodName: "ASUS FHD Gaming Laptop",
    priceAfter: 700,
  },
  {
    image: creamImg,
    prodName: "Curology Product Set ",
    priceAfter: 500,
  },
  {
    image: cameraImg,
    prodName: "CANON EOS DSLR Camera",
    priceAfter: 360,
  },
  {
    image: labtop2Img,
    prodName: "ASUS FHD Gaming Laptop",
    priceAfter: 700,
  },
];

const newProductsData = [
  {
    salePerc: "NEW",
    image: carImg,
    prodName: "Kids Electric Car",
    priceAfter: 950,
  },
  {
    image: shoesImg,
    prodName: "Jr. Zoom Soccer Cleats",
    priceAfter: 1160,
  },
  {
    salePerc: "NEW",
    image: gpadblackImg,
    prodName: "GP11 Shooter USB Gamepad",
    priceAfter: 660,
  },
  {
    image: jacketImg,
    prodName: "Quilted Satin Jacket",
    priceAfter: 650,
  },
];

const totalProductsData = productsData.concat(bestProductsData, ourProductsData, newProductsData);

export {
  productsData,
  bestProductsData,
  ourProductsData,
  newProductsData,
  totalProductsData,
}