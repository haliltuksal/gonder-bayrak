"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Tişört Baskı",
    href: "/tisort",
    description: "Özel tasarım tişört baskı hizmetleri",
    image: "/t-shirt-printing.jpg",
  },
  {
    title: "Sweatshirt",
    href: "/sweatshirt",
    description: "Kaliteli sweatshirt baskı çözümleri",
    image: "/sweatshirt-printing.jpg",
  },
  {
    title: "Hoodie",
    href: "/hoodie",
    description: "Kapşonlu sweatshirt baskı",
    image: "/hoodie-printing.jpg",
  },
  {
    title: "Çanta",
    href: "/canta",
    description: "Bez çanta ve tote bag baskı",
    image: "/tote-bag-printing.jpg",
  },
  {
    title: "Şapka",
    href: "/sapka",
    description: "Kep ve şapka baskı seçenekleri",
    image: "/cap-printing.jpg",
  },
  {
    title: "Kupa",
    href: "/kupa",
    description: "Özel tasarım kupa bardak baskı",
    image: "/mug-printing.jpg",
  },
];

const services = [
  {
    title: "Dijital Baskı",
    href: "/dijital-baski",
    description:
      "Yüksek kaliteli dijital baskı teknolojisi ile detaylı ve renkli baskılar",
  },
  {
    title: "Serigrafi",
    href: "/serigrafi",
    description:
      "Geleneksel serigrafi baskı hizmetleri, dayanıklı ve profesyonel sonuçlar",
  },
  {
    title: "Sublimation",
    href: "/sublimation",
    description: "Parlak ve canlı renklerde sublimation baskı çözümleri",
  },
  {
    title: "Transfer Baskı",
    href: "/transfer-baski",
    description: "Hızlı ve ekonomik transfer baskı seçenekleri",
  },
  {
    title: "Nakış",
    href: "/nakis",
    description: "Profesyonel nakış işlemleri ile zarif ve kalıcı sonuçlar",
  },
  {
    title: "Lazer Kesim",
    href: "/lazer-kesim",
    description: "Hassas lazer kesim ve gravür hizmetleri",
  },
];

const categories = [
  {
    title: "Erkek Giyim",
    href: "/erkek",
    items: [
      { name: "Tişört", href: "/erkek/tisort" },
      { name: "Sweatshirt", href: "/erkek/sweatshirt" },
      { name: "Hoodie", href: "/erkek/hoodie" },
      { name: "Polo", href: "/erkek/polo" },
    ],
  },
  {
    title: "Kadın Giyim",
    href: "/kadin",
    items: [
      { name: "Tişört", href: "/kadin/tisort" },
      { name: "Sweatshirt", href: "/kadin/sweatshirt" },
      { name: "Crop Top", href: "/kadin/crop" },
      { name: "Elbise", href: "/kadin/elbise" },
    ],
  },
  {
    title: "Çocuk Giyim",
    href: "/cocuk",
    items: [
      { name: "Çocuk Tişört", href: "/cocuk/tisort" },
      { name: "Body", href: "/cocuk/body" },
      { name: "Sweatshirt", href: "/cocuk/sweatshirt" },
    ],
  },
  {
    title: "Aksesuarlar",
    href: "/aksesuarlar",
    items: [
      { name: "Çanta", href: "/aksesuarlar/canta" },
      { name: "Şapka", href: "/aksesuarlar/sapka" },
      { name: "Kupa", href: "/aksesuarlar/kupa" },
      { name: "Anahtarlık", href: "/aksesuarlar/anahtarlik" },
    ],
  },
  {
    title: "Toplu Sipariş",
    href: "/toplu",
    items: [
      { name: "Kurumsal", href: "/toplu/kurumsal" },
      { name: "Etkinlik", href: "/toplu/etkinlik" },
      { name: "Promosyon", href: "/toplu/promosyon" },
    ],
  },
  {
    title: "Özel Tasarım",
    href: "/ozel",
    items: [
      { name: "Tasarım Yükle", href: "/ozel/yukle" },
      { name: "Tasarım Oluştur", href: "/ozel/olustur" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="border-t">
      <div className="container mx-auto">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="flex-wrap justify-start gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ürünler</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="container w-full p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {products.map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="group block space-y-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                      >
                        <div className="aspect-video overflow-hidden rounded-md bg-muted">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            width={300}
                            height={200}
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Hizmetler</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="container-fluid p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group block space-y-2 rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                      >
                        <h3 className="font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Kategoriler</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="container-fluid p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {categories.map((category) => (
                      <div
                        key={category.title}
                        className="space-y-3 rounded-lg border bg-card p-6"
                      >
                        <h3 className="font-semibold text-foreground">
                          <Link
                            href={category.href}
                            className="hover:text-primary transition-colors"
                          >
                            {category.title}
                          </Link>
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/kampanyalar" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kampanyalar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/iletisim" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  İletişim
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
