"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ChevronsDown, Zap } from "lucide-react";

type MenuKey = "tum" | "ekspres" | "kartvizit" | "reklam" | null;

const menuData = {
    tum: {
        title: "Tüm Ürünler",
        categories: [
            "Kartvizitler",
            "El İlanları",
            "Kurumsal Ürünler",
            "Reklam Ürünleri",
            "Promosyon Ürünleri",
            "Restoran / Kafe Ürünleri",
            "İç-Dış Mekan Reklam",
            "Ambalaj & Paketleme",
        ],
        items: [
            "Standart Kartvizit",
            "Kare Kartvizit",
            "Gofreli Kartvizit",
            "Oval Kartvizit",
            "Laminasyonlu Kartvizit",
            "Şeffaf Kartvizit",
            "Kabartma Laklı Kartvizit",
            "Ahşap Kartvizit",
            "PVC Kartvizit",
        ],
        images: [
            {
                title: "Kartvizit Kampanyası",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstandard-card.123.png&w=256&q=75",
            },
            {
                title: "Premium Kartvizit",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoft-card.123.png&w=256&q=75",
            },
        ],
    },

    ekspres: {
        title: "Ekspres Baskı",
        icon: <Zap className="text-orange-500" size={16} />,
        categories: ["Ekspres Kartvizit", "Ekspres Afiş", "Ekspres Poster"],
        items: [
            "Ekspres Kartvizit",
            "Ekspres Antetli Kağıt",
            "Ekspres Kitap Ayracı",
            "Ekspres Amerikan Servis",
            "Ekspres Davetiye",
            "Ekspres Cepli Dosya",
            "Ekspres Sunum Dosyası",
            "Ekspres Poşet / Çanta",
            "Ekspres Insert",
        ],
        images: [
            {
                title: "Ekspres Kartvizit",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexp-card.553.png&w=256&q=75",
            },
            {
                title: "Ekspres Insert",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexp-insert.553.png&w=256&q=75",
            },
        ],
    },

    kartvizit: {
        title: "Kartvizitler",
        categories: [
            "Standart Kartvizit",
            "Kare Kartvizit",
            "Oval Kartvizit",
            "Varak Kartvizit",
            "Kabartma Laklı Kartvizit",
            "Ahşap Kartvizit",
        ],
        items: [
            "PVC Kartvizit",
            "Şeffaf Kartvizit",
            "Tuale Fantazi",
            "Gofreli Kartvizit",
            "Laklı Kartvizit",
            "Soft Touch Kartvizit",
        ],
        images: [
            {
                title: "Standart Kartvizit",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstd-card.432.png&w=256&q=75",
            },
            {
                title: "Soft Touch Kartvizit",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoft-card.432.png&w=256&q=75",
            },
        ],
    },

    reklam: {
        title: "İç-Dış Mekan Reklam",
        categories: ["Vinil", "Branda", "Mesh", "Folyo", "Afiş"],
        items: [
            "Vinil Baskı",
            "Mesh Baskı",
            "One Way Vision",
            "Folyo Baskı",
            "Poster Baskı",
            "Billboard Baskı",
        ],
        images: [
            {
                title: "Vinil Baskı",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvinyl.332.png&w=256&q=75",
            },
            {
                title: "Folyo Baskı",
                src: "https://www.bidolubaski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffolyo.332.png&w=256&q=75",
            },
        ],
    },
};

export default function Navbar() {
    const [open, setOpen] = useState<MenuKey>(null);

    const handleHover = (key: MenuKey) => setOpen(key);
    const closeMenu = () => setOpen(null);

    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto max-w-[75%] px-4 py-3 flex items-center">

                {/* SOL */}
                <div className="flex items-center gap-8">

                    <button
                        onMouseEnter={() => handleHover("tum")}
                        className="flex items-center gap-2 text-[15px] font-medium text-gray-700"
                    >
                        <Menu size={18} />
                        Tüm Ürünler
                        <ChevronsDown size={14} />
                    </button>

                    <button
                        onMouseEnter={() => handleHover("ekspres")}
                        className="flex items-center gap-1 text-[15px] font-medium text-gray-700"
                    >
                        <Zap className="text-orange-500" size={16} />
                        Ekspres Baskı
                        <ChevronsDown size={14} />
                    </button>

                    <button
                        onMouseEnter={() => handleHover("kartvizit")}
                        className="flex items-center gap-1 text-[15px] font-medium text-gray-700"
                    >
                        Kartvizitler
                        <ChevronsDown size={14} />
                    </button>

                    <button
                        onMouseEnter={() => handleHover("reklam")}
                        className="flex items-center gap-1 text-[15px] font-medium text-gray-700"
                    >
                        İç-Dış Mekan Reklam
                        <ChevronsDown size={14} />
                    </button>
                </div>

                {/* SAĞ */}
                <div className="ml-auto flex items-center gap-6 text-[15px] font-medium">
                    <Link href="/yeni-urunler" className="flex items-center gap-1">
                        Yeni Ürünler <span className="text-pink-500">💠</span>
                    </Link>
                    <Link href="/kampanyalar">Kampanyalar</Link>
                </div>
            </div>

            {/* DROPDOWN */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key={open}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={closeMenu}
                        className="absolute left-0 right-0 bg-white shadow-xl border-b z-50"
                    >
                        <div className="mx-auto max-w-[75%] py-6 grid grid-cols-12 gap-8">

                            {/* SOL LİSTE */}
                            <div className="col-span-3 space-y-2 border-r pr-4">
                                <h3 className="font-medium text-gray-700 mb-2">
                                    {menuData[open].title}
                                </h3>

                                {menuData[open].categories.map((c) => (
                                    <div
                                        key={c}
                                        className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-[14px]"
                                    >
                                        {c}
                                    </div>
                                ))}

                                <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 text-[14px]">
                                    Tüm {menuData[open].title} Ürünleri →
                                </button>
                            </div>

                            {/* ORTA */}
                            <div className="col-span-6 grid grid-cols-3 gap-4">
                                {menuData[open].items.map((item) => (
                                    <div
                                        key={item}
                                        className="text-[14px] text-gray-700 hover:text-blue-600 cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* SAĞ */}
                            <div className="col-span-3 space-y-4">
                                {menuData[open].images.map((img) => (
                                    <div
                                        key={img.title}
                                        className="rounded-xl border p-3 hover:shadow-md transition cursor-pointer"
                                    >
                                        <Image
                                            alt={img.title}
                                            src={img.src}
                                            width={300}
                                            height={200}
                                            className="rounded-md object-cover w-full h-28"
                                        />
                                        <p className="mt-2 text-[14px] text-gray-700 text-center">
                                            {img.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
