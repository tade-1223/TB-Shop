import headphone from "../assets/products/headphone.jpg";
import watch from "../assets/products/smartwatch.jpg";
import mouse from "../assets/products/mouse.jpg";
import speaker from "../assets/products/speaker.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    rating: 5,
    image: headphone,

    category: "Electronics",

    description:
        "Premium wireless headphones with crystal-clear sound, active noise cancellation, Bluetooth 5.3 connectivity, and a long-lasting rechargeable battery."
},
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    rating: 5,
    image: watch,

    category: "Wearables",

    description:
        "Stay connected and track your health with this premium smartwatch. Features include heart rate monitoring, sleep tracking, fitness modes, Bluetooth calling, message notifications, GPS, and up to 10 days of battery life."
},
  {
    id: 3,
    name: "Gaming Mouse",
    price: 39.99,
    rating: 5,
    image: mouse,

    category: "Gaming",

    description:
        "Designed for competitive gamers, this high-precision gaming mouse features an adjustable DPI sensor, customizable RGB lighting, programmable buttons, ergonomic comfort, and ultra-fast response for superior gaming performance."
},
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 69.99,
    rating: 3,
    image: speaker,

    category: "Audio",

    description:
        "Enjoy rich, immersive sound wherever you go. This portable Bluetooth speaker offers deep bass, crystal-clear audio, IPX7 water resistance, wireless connectivity, and up to 15 hours of continuous playtime."
},
];

export default products;