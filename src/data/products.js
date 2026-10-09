// Placeholder phones: client ke real models/prices yahan daalo.
// image: "/img/galaxy-s24.png" (file public/img/ mein rakho). Khali chor do to placeholder dikhega.
export const PLACEHOLDER = "/img/phone-placeholder.svg";

export const products = [
  { id: 1, brand: "Samsung", name: "Galaxy S24 Ultra", price: 1290, old: 1385, ram: "12GB", rom: "256GB", tag: "Flagship", image: "./img/Gear-Samsung-Galaxy-S24-Ultra-SOURCE-Julian-Chokkattu-removebg-preview.png" },
  { id: 2, brand: "Apple", name: "iPhone 15 Pro", price: 1420, old: 1485, ram: "8GB", rom: "256GB", tag: "Best seller", image: "./img/bluesatinmetallic_1d4b3cb3-8c58-479f-9cd8-eda765cf7f75.webp" },
  { id: 3, brand: "Google", name: "Pixel 8 Pro", price: 935, ram: "12GB", rom: "128GB", image: "./img/22bluesatinmetallic_5f649295-68c2-405d-8d56-778456d11686.webp" },
  {
  id: 4,
  brand: "Apple",
  name: "iPhone 18 Pro",
  price: 1200,
  old: 1300,
  ram: "12GB",
  rom: "256GB",
  tag: "New",
  image: "./img/Blue_iPhone_18_Rear_Product_Render-removebg-preview.png"
},
  { id: 5, brand: "Infinix", name: "Note 40 Pro", price: 210, ram: "8GB", rom: "256GB", tag: "Value", image: "./img/images-removebg-preview.png" },
  { id: 6, brand: "Tecno", name: "Camon 30 Premier", price: 325, old: 355, ram: "12GB", rom: "512GB", image: "./img/tecno_camon_30_premier_5g_gray-2_-_copy-removebg-preview.png" },
 {
  id: 7,
  brand: "Apple",
  name: "iPhone 18 Pro Max",
  price: 1400,
  old: 1500,
  ram: "12GB",
  rom: "256GB",
  tag: "New",
  image: "./img/Blue_iPhone_Studio_Product_Render-removebg-preview.png"
},
  { id: 8, brand: "Vivo", name: "V30 5G", price: 435, old: 465, ram: "8GB", rom: "256GB", image: "./img/v30_blue-removebg-preview-removebg-preview.png" },
  { id: 9, brand: "Realme", name: "12 Pro+", price: 385, ram: "8GB", rom: "256GB", image: "./img/realme-12-pro-plus-glass-back_matte-transparent-guard_6e1f8cd6-5443-4bc1-8c47-46b8a956722f-removebg-preview.png" },
];
export const brands = ["All", ...new Set(products.map((p) => p.brand))];
export const money = (n) => "Rs " + n.toLocaleString("en-PK");
