import headphone from "../assets/products/electronics/headphone.jpg";
import watch from "../assets/products/electronics/smartwatch.jpg";
import mouse from "../assets/products/electronics/mouse.jpg";
import speaker from "../assets/products/electronics/speaker.jpg";
import coffee from "../assets/products/local/coffee.jpg";
import habeshaDress from "../assets/products/local/habesha-dress.jpg";
import moseb from "../assets/products/local/moseb.jpg";
import honey from "../assets/products/local/honey.jpg";

const products = [
  {
    
  id: 1,
  name: "Wireless Headphones",
  price: 4500,
  rating: 5,
  image: headphone,
  category: "Electronics",
  seller: "Tech Addis",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: false,
  location: "Addis Ababa",
  description:
    "Premium wireless headphones with active noise cancellation."
},
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    rating: 5,
    image: watch,

    category: "Wearables",
    seller: "Addis Electronics",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: false,
  location: "Addis Ababa",
    description:
        "Stay connected and track your health with this premium smartwatch. Features include heart rate monitoring, sleep tracking, fitness modes, Bluetooth calling, message notifications, GPS, and up to 10 days of battery life."
},
  {
    id: 3,
    name: "Gaming Mouse",
    price: 899,
    rating: 5,
    image: mouse,

    category: "Gaming",
seller: "Addis Electronics",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: false,
  location: "Addis Ababa",
    description:
        "Designed for competitive gamers, this high-precision gaming mouse features an adjustable DPI sensor, customizable RGB lighting, programmable buttons, ergonomic comfort, and ultra-fast response for superior gaming performance."
},
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1495,
    rating: 3,
    image: speaker,

    category: "Audio",
seller: "Tech Addis",
  stock: 18,
  featured: true,
  newArrival: true,
  bestDeal: false,
  location: "Addis Ababa",
    description:
        "Enjoy rich, immersive sound wherever you go. This portable Bluetooth speaker offers deep bass, crystal-clear audio, IPX7 water resistance, wireless connectivity, and up to 15 hours of continuous playtime."
},
{
  id: 5,
  name: "Ethiopian Coffee Beans",
  price: 2999,
  rating: 5,
  image: coffee,
  category: "Local Products",
  seller: "Coffee House",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: false,
  location: "Addis Ababa",
  description:
    "Premium Ethiopian Arabica coffee beans sourced from Sidama."
},
{
  id: 6,
  name: "Traditional Habesha Dress",
  price: 7999,
  rating: 5,
  image: habeshaDress,
  category: "Local Products",
  seller: "Habesha Crafts",
  stock: 18,
  featured: true,
  newArrival: true,
  bestDeal: false,
  location: "Addis Ababa",
  description:
    "Handwoven traditional Ethiopian dress suitable for cultural events."
},
{
  id: 7,
  name: "Woven moseb Basket",
  price: 3995,
  rating: 4,
  image: moseb,
  category: "Local Products",
  seller: "Habesha Crafts",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: false,
  location: "Addis Ababa",
  description:
    "Colorful handmade moseb basket crafted by Ethiopian artisans."
},
{
  id: 8,
  name: "Ethiopian Honey",
  price: 999,
  rating: 5,
  image: honey,
  category: "Local Products",
  seller: "Ethio Market",
  stock: 18,
  featured: true,
  newArrival: false,
  bestDeal: true,
  location: "Addis Ababa",
  description:
    "Natural organic honey collected from Ethiopian highland forests."
},
];

export default products;