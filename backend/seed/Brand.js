const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "Apple" },
  { _id: "65a7e20102e12c44f59943db", name: "Samsung" },
  { _id: "65a7e20102e12c44f59943dc", name: "CD Projekt" },
  { _id: "65a7e20102e12c44f59943dd", name: "Huawei" },
  { _id: "65a7e20102e12c44f59943de", name: "Microsoft" },
  { _id: "65a7e20102e12c44f59943df", name: "SteelSeries" },
  { _id: "65a7e20102e12c44f59943e0", name: "HP Pavilion" },
  { _id: "65a7e20102e12c44f59943ea", name: "Nintendo" },
  { _id: "65a7e20102e12c44f59943eb", name: "Asus" },
  { _id: "65a7e20102e12c44f59943f0", name: "Corsair" },
  { _id: "65a7e20102e12c44f59943f7", name: "Razer" },
  { _id: "65a7e20102e12c44f59943fb", name: "Sony" },
  { _id: "65a7e20102e12c44f5994416", name: "Activision" },
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
