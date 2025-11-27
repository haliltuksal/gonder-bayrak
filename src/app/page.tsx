import Image from "next/image";
import ProductCarousel from "@/components/ui/product-carousel";
import FeatureBar from "@/components/ui/feature-bar";
import CategoryMiniCards from "@/components/ui/category-mini-cards";
import ReferenceCarousel from "@/components/ui/reference-carousel";
import BlogCarousel from "@/components/ui/blog-carousel";
import MainCarousel from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Apple iPad Pro 11\"",
    price: 799,
    rating: 4,
    reviews: 543,
    quantity: 5,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585789575858-a4a34e4eb74f?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 2,
    name: "PlayStation 5 Console",
    price: 599,
    rating: 4,
    reviews: 2756,
    quantity: 3,
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Xbox Series X",
    price: 499,
    rating: 4,
    reviews: 1889,
    quantity: 7,
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 699,
    rating: 4,
    reviews: 289,
    quantity: 12,
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    price: 1999,
    rating: 4,
    reviews: 4889,
    quantity: 8,
    images: [
      "https://images.unsplash.com/photo-1592286927505-c6c99c1dc7be?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 6,
    name: "MacBook Pro 16\"",
    price: 2999,
    rating: 1,
    reviews: 3342,
    quantity: 4,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 7,
    name: "AirPods Pro",
    price: 249,
    rating: 4,
    reviews: 1523,
    quantity: 15,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Samsung Galaxy S24",
    price: 899,
    rating: 3,
    reviews: 2134,
    quantity: 6,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop"
    ]
  }
];

export default function Home() {
  return (
      <main>
        <MainCarousel/>
        <FeatureBar/>
        <ProductCarousel products={products} title={'Öne Çıkan Ürünler'} />
        <ProductCarousel products={products} title={'Tekstil Ürünleri'} />
        <CategoryMiniCards/>
        <ReferenceCarousel/>
        <BlogCarousel/>
      </main>
  );
}