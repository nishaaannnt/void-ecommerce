const Product = require("../models/Product");

const products = [
  {
    "_id": "65a7e45902e12c44f5994501",
    "title": "PlayStation 5 Console",
    "description": "Sony PlayStation 5 gaming console with stunning graphics and performance.",
    "price": 499,
    "discountPercentage": 10,
    "stockQuantity": 20,
    "brand": "65a7e20102e12c44f59943fb",
    "category": "65a7e24602e12c44f599443f",
    "thumbnail": "https://m.media-amazon.com/images/I/51ljnEaW0pL._SX679_.jpg",
    "images": [
      "https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/7/1/71-8b0qwyal.jpg.webp",
      "https://images-cdn.ubuy.co.in/6629217170e75e40c359fd0c-sony-playstation-5-slim-disc-console.jpg",
      "https://soyouz2.my-store.ch/api/img?p=products/2023/2/00DA7AA1-DDFE-444A-A1E7-D691247C4EC2/16091211_1&st=11&v=1701783982",
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994502",
    "title": "Xbox Series X Console",
    "description": "Microsoft Xbox Series X console with ultra HD 4K gaming.",
    "price": 499,
    "discountPercentage": 8,
    "stockQuantity": 35,
    "brand": "65a7e20102e12c44f59943de",
    "category": "65a7e24602e12c44f599443f",
    "thumbnail": "https://m.media-amazon.com/images/I/61-jjE67uqL._SL1500_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/714IbXR4HuL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61t5fwwB0zL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61-jjE67uqL._SL1500_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994503",
    "title": "The Legend of Zelda: Breath of the Wild",
    "description": "Action-adventure game set in an open world environment.",
    "price": 59,
    "discountPercentage": 5,
    "stockQuantity": 120,
    "brand": "65a7e20102e12c44f59943ea",
    "category": "65a7e24602e12c44f5994433",
    "thumbnail": "https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/51riMG7Wa9L._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/71vfmUeEBEL._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/61tweJWS5WL._SL1280_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994504",
    "title": "Call of Duty: Modern Warfare II",
    "description": "First-person shooter game offering intense combat experience.",
    "price": 69,
    "discountPercentage": 12,
    "stockQuantity": 95,
    "brand": "65a7e20102e12c44f5994416",
    "category": "65a7e24602e12c44f5994433",
    "thumbnail": "https://rukminim1.flixcart.com/image/300/300/xif0q/physical-game/i/r/f/no-standard-call-of-duty-modern-warfare-ii-18-pegi-ps5-original-imagqvh8pqmzbqgd.jpeg",
    "images": [
      "https://rukminim1.flixcart.com/image/300/300/xif0q/physical-game/i/r/f/no-standard-call-of-duty-modern-warfare-ii-18-pegi-ps5-original-imagqvh8pqmzbqgd.jpeg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994505",
    "title": "Razer DeathAdder V2 Pro Wireless Gaming Mouse",
    "description": "High-performance wireless gaming mouse with precise tracking.",
    "price": 129,
    "discountPercentage": 15,
    "stockQuantity": 47,
    "brand": "65a7e20102e12c44f59943f7",
    "category": "65a7e24602e12c44f5994432",
    "thumbnail": "https://m.media-amazon.com/images/I/71fzjoZqLeL._SL1500_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61C3xYVKtZL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715M+VM3kCL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71DrKCQnC8L._SL1500_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994506",
    "title": "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
    "description": "RGB mechanical keyboard with customizable keys and dedicated media controls.",
    "price": 199,
    "discountPercentage": 18,
    "stockQuantity": 55,
    "brand": "65a7e20102e12c44f59943f0",
    "category": "65a7e24602e12c44f5994432",
    "thumbnail": "https://m.media-amazon.com/images/I/71PzW7vZNUL._SL1500_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71PzW7vZNUL._SL1500_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994507",
    "title": "Asus ROG Strix G15 Gaming Laptop",
    "description": "15.6-inch gaming laptop with Intel Core i7, NVIDIA RTX 3070, and 16GB RAM.",
    "price": 1699,
    "discountPercentage": 10,
    "stockQuantity": 25,
    "brand": "65a7e20102e12c44f59943eb",
    "category": "65a7e24602e12c44f5994431",
    "thumbnail": "https://m.media-amazon.com/images/I/71+d4hy0unL._SL1500_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+d4hy0unL._SL1500_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994508",
    "title": "SteelSeries Arctis 7 Wireless Gaming Headset",
    "description": "Wireless gaming headset with 7.1 surround sound and noise-cancelling mic.",
    "price": 149,
    "discountPercentage": 12,
    "stockQuantity": 100,
    "brand": "65a7e20102e12c44f59943df",
    "category": "65a7e24602e12c44f5994432",
    "thumbnail": "https://m.media-amazon.com/images/I/51Z0eZUKWIL.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51Z0eZUKWIL.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    "_id": "65a7e45902e12c44f5994509",
    "title": "Cyberpunk 2077",
    "description": "Open-world action-adventure game set in the futuristic city of Night City.",
    "price": 49,
    "discountPercentage": 20,
    "stockQuantity": 200,
    "brand": "65a7e20102e12c44f59943dc",
    "category": "65a7e24602e12c44f5994433",
    "thumbnail": "https://m.media-amazon.com/images/I/81QZwjGwqRL._SL1500_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81QZwjGwqRL._SL1500_.jpg"
    ],
    "isDeleted": false,
    "updatedAt": "2024-02-07T09:22:57.840Z"
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
