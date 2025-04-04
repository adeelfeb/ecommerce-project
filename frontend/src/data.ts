import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
    {
      name: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      image: "https://images.pexels.com/photos/27362197/pexels-photo-27362197/free-photo-of-a-lone-tree-in-a-field-with-pink-clouds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // updated image path
      category: "Electronics",
      brand: "TechBrand",
      price: 129.99,
      countInStock: 50,
      description: "High-quality wireless Bluetooth headphones with noise-cancellation and 20-hour battery life.",
      rating: 4.5,
      numReview: 120
    },
    {
      name: "Smartphone 12 Pro",
      slug: "smartphone-12-pro",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600", // updated image path
      category: "Electronics",
      brand: "PhoneCo",
      price: 899.99,
      countInStock: 30,
      description: "The latest 5G smartphone with an ultra-high-definition camera and 128GB storage.",
      rating: 4.8,
      numReview: 350
    },
    {
      name: "Ergonomic Office Chair",
      slug: "ergonomic-office-chair",
      image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600", // updated image path
      category: "Furniture",
      brand: "ComfortSeat",
      price: 199.99,
      countInStock: 100,
      description: "Ergonomic office chair with lumbar support and adjustable height for maximum comfort.",
      rating: 4.2,
      numReview: 55
    },
    {
      name: "4K Smart TV 50-inch",
      slug: "4k-smart-tv-50-inch",
      image: "https://images.pexels.com/photos/1470167/pexels-photo-1470167.jpeg?auto=compress&cs=tinysrgb&w=600", // updated image path
      category: "Electronics",
      brand: "Visionary",
      price: 599.99,
      countInStock: 15,
      description: "50-inch 4K UHD smart TV with HDR support, built-in apps, and voice control.",
      rating: 4.6,
      numReview: 200
    },
    {
      name: "Gaming Laptop RTX 3060",
      slug: "gaming-laptop-rtx-3060",
      image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600", // updated image path
      category: "Computers",
      brand: "GameTech",
      price: 1499.99,
      countInStock: 25,
      description: "High-performance gaming laptop powered by NVIDIA RTX 3060, 16GB RAM, and 512GB SSD.",
      rating: 4.9,
      numReview: 180
    }
  ];
  