const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "smartphones" },
  { _id: "65a7e24602e12c44f599442d", name: "laptops" },
  { _id: "65a7e24602e12c44f5994431", name: "PCs" },
  { _id: "65a7e24602e12c44f5994432", name: "Accessories" },
  { _id: "65a7e24602e12c44f5994433", name: "Games" },
  { _id: "65a7e24602e12c44f599443f", name: "Consoles" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
