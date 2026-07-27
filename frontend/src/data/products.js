import headphone from "../assets/products/headphone.jpg";
import watch from "../assets/products/smartwatch.jpg";
import mouse from "../assets/products/mouse.jpg";
import speaker from "../assets/products/speaker.jpg";
import coffee from "../assets/products/coffee.jpg";
import habeshaDress from "../assets/products/habesha-dress.jpg";
import mesob from "../assets/products/mesob.jpg";
import honey from "../assets/products/honey.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 3999,
    rating: 5,
    image: headphone,

    category: "Electronics",

    description:
        "Premium wireless headphones with crystal-clear sound, active noise cancellation, Bluetooth 5.3 connectivity, and a long-lasting rechargeable battery."
},
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    rating: 5,
    image: watch,

    category: "Wearables",

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
  description:
    "Handwoven traditional Ethiopian dress suitable for cultural events."
},
{
  id: 7,
  name: "Woven Mesob Basket",
  price: 3995,
  rating: 4,
  image: mesob,
  category: "Local Products",
  description:
    "Colorful handmade Mesob basket crafted by Ethiopian artisans."
},
{
  id: 8,
  name: "Ethiopian Honey",
  price: 999,
  rating: 5,
  image: honey,
  category: "Local Products",
  description:
    "Natural organic honey collected from Ethiopian highland forests."
},
];

export default products;