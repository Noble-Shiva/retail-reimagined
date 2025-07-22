// Product images
import lipstickImage from "@/assets/products/lipstick.jpg";
import cleanserImage from "@/assets/products/cleanser.jpg";
import perfumeImage from "@/assets/products/perfume.jpg";
import candleImage from "@/assets/products/candle.jpg";
import journalImage from "@/assets/products/journal.jpg";
import tshirtImage from "@/assets/products/tshirt.jpg";
import jeansImage from "@/assets/products/jeans.jpg";
import handbagImage from "@/assets/products/handbag.jpg";
import sunglassesImage from "@/assets/products/sunglasses.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  onSale?: boolean;
}

export const products: Product[] = [
  // Beauty Products
  {
    id: "lipstick-1",
    name: "Lipstick",
    image: lipstickImage,
    price: 9.99,
    originalPrice: 12.99,
    category: "beauty",
    onSale: true,
  },
  {
    id: "cleanser-1",
    name: "Facial Cleanser",
    image: cleanserImage,
    price: 12.99,
    originalPrice: 14.99,
    category: "beauty",
    onSale: true,
  },
  {
    id: "perfume-1",
    name: "Perfume",
    image: perfumeImage,
    price: 69.99,
    originalPrice: 79.99,
    category: "beauty",
    onSale: true,
  },
  
  // Lifestyle Products
  {
    id: "candle-1",
    name: "Candle",
    image: candleImage,
    price: 15.99,
    category: "lifestyle",
  },
  {
    id: "journal-1",
    name: "Journal",
    image: journalImage,
    price: 7.99,
    originalPrice: 9.99,
    category: "lifestyle",
    onSale: true,
  },
  
  // Fashion Products
  {
    id: "tshirt-1",
    name: "T-shirt",
    image: tshirtImage,
    price: 14.99,
    originalPrice: 19.99,
    category: "fashion",
    onSale: true,
  },
  {
    id: "jeans-1",
    name: "Jeans",
    image: jeansImage,
    price: 29.99,
    originalPrice: 39.99,
    category: "fashion",
    onSale: true,
  },
  {
    id: "handbag-1",
    name: "Handbag",
    image: handbagImage,
    price: 39.99,
    originalPrice: 49.99,
    category: "fashion",
    onSale: true,
  },
  {
    id: "sunglasses-1",
    name: "Sunglasses",
    image: sunglassesImage,
    price: 19.99,
    originalPrice: 24.99,
    category: "fashion",
    onSale: true,
  },
];

export const getProductsByCategory = (category: string) => {
  if (category === "home") return products;
  return products.filter(product => product.category === category);
};