"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "DTG ve DTF Baskı Teknolojileri: Nasıl Yapılır ve Farkları Nelerdir?",
        excerpt:
            "Tekstil dünyasında kişiye özel baskılar giderek daha fazla talep görüyor. DTG ve DTF, son yılların en popüler dijital baskı yöntemleri arasında yer alıyor. Peki bu iki teknoloji nasıl uygulanır, hangi aşamalardan geçer ve birbirinden hangi yönleriyle ayrılır?",
        image: "https://placehold.co/900x600/png?text=DTG+%2F+DTF",
        link: "#",
    },
    {
        id: 2,
        title: "Mağaza Tasarımında Renk ve Işık Uyumu",
        excerpt:
            "Perakende alanlarında ışık ve renk uyumu, kullanıcı deneyimini doğrudan etkiler. Doğru ışıklandırma ve renk seçimi, müşterilerin mağazada daha uzun süre kalmasını sağlar.",
        image: "https://picsum.photos/900/600",
        link: "#",
    },
];

const AUTO_SLIDE_INTERVAL = 8000;

export default function BlogCarouselPremium() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % blogPosts.length);
    const prev = () => setCurrent((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

    useEffect(() => {
        const timer = setInterval(next, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    const post = blogPosts[current];

    return (
        <section className="w-full bg-[#f7f9fc] py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Başlık */}
                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                    İLHAM VERİCİ BLOG İÇERİKLERİ
                </h2>

                <div className="relative flex items-center">

                    {/* Sol ok */}
                    <button
                        onClick={prev}
                        className="absolute -left-4 md:-left-8 z-20 h-10 w-10 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100"
                    >
                        ‹
                    </button>

                    {/* İçerik */}
                    <div className="w-full grid md:grid-cols-2 gap-6 items-center">

                        {/* Görsel */}
                        <div className="relative rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={900}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlap İçerik Kartı */}
                        <Card className="relative -ml-10 md:-ml-20 bg-white p-6 md:p-8 rounded-3xl shadow-xl border">
                            <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>

                            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-5">
                                {post.excerpt}
                            </p>

                            <Button asChild>
                                <Link href={post.link} className="flex items-center gap-2">
                                    Yazıyı Oku →
                                </Link>
                            </Button>
                        </Card>
                    </div>

                    {/* Sağ ok */}
                    <button
                        onClick={next}
                        className="absolute -right-4 md:-right-8 z-20 h-10 w-10 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100"
                    >
                        ›
                    </button>

                </div>

                {/* Slider Bullet'ları */}
                <div className="mt-8 flex justify-center gap-2">
                    {blogPosts.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all ${
                                current === i ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
