"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin, Facebook, Twitter, Linkedin, Instagram, ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 py-12">
                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* COLUMN 1 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm">MÜŞTERİ İLİŞKİLERİ</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="#">Üyelik Sözleşmesi</Link></li>
                            <li><Link href="#">İade / Değişim</Link></li>
                            <li><Link href="#">KVKK Aydınlatma Metni</Link></li>
                            <li><Link href="#">Güvenli Alışveriş</Link></li>
                            <li><Link href="#">Kargo</Link></li>
                            <li><Link href="#">Kullanım Koşulları</Link></li>
                            <li><Link href="#">Mesafeli Satış Sözleşmesi</Link></li>
                            <li><Link href="#">Yardım Merkezi</Link></li>
                            <li><Link href="#">Hakkımızda</Link></li>
                            <li><Link href="#">Bize Ulaşın</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Çerez Politikası</Link></li>
                            <li><Link href="#">İşlem Rehberi</Link></li>
                            <li><Link href="#">Teklif İste</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm">HAKKIMIZDA</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="#">Hakkımızda</Link></li>
                            <li><Link href="#" className="text-primary-600 font-semibold">BLOG</Link></li>
                            <li><Link href="#">Sıkça Sorulan Sorular</Link></li>
                            <li><Link href="#">İletişim</Link></li>
                            <li><Link href="#">Teklif İste</Link></li>
                            <li><Link href="#">Numune Kutusu Talep Et</Link></li>
                            <li><Link href="#">Kariyer</Link></li>
                            <li><Link href="#">Tedarikçi Başvuru Formu</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm">TÜM ÜRÜNLER</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="#">Tüm Matbaa Baskı Ürünleri</Link></li>
                            <li><Link href="#">Hazır Şablonlar</Link></li>
                            <li><Link href="#">Fuar Ürünleri</Link></li>
                            <li><Link href="#">Sağlık Sektörü Baskı Ürünleri</Link></li>
                            <li><Link href="#">Yeni Ürünlerimizi Gördünüz mü?</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4 — CONTACT INFO */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm">İLETİŞİM BİLGİLERİ</h3>

                        <div className="space-y-4 text-gray-600 text-sm">
                            <p className="flex items-center gap-2">
                                <Clock size={18} /> Hafta içi 09:00 - 18:00
                            </p>

                            <p className="flex items-center gap-2">
                                <Phone size={18} /> 0850 241 0 232
                            </p>

                            <p className="flex items-center gap-2">
                                <MapPin size={18} />
                                Caferağa Mh. Şair Nefi Sk. No:46 D:5
                                <br />
                                Kadıköy / İstanbul
                            </p>

                            {/* QR CODE */}
                            <div className="pt-2">
                                <Image
                                    src="/qr-placeholder.png"
                                    alt="QR Code"
                                    width={120}
                                    height={120}
                                    className="rounded-md border"
                                />
                                <p className="text-xs text-red-600 mt-1">ETBİS’e Kayıtlıdır.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <hr className="my-10 border-gray-200" />

                {/* BOTTOM AREA */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-3 text-gray-700">
                        <ShieldCheck size={22} className="text-green-600" />
                        <span className="text-sm">İnternette Güvenli Alışveriş</span>
                    </div>

                    <div className="text-sm text-gray-500 text-center">
                        Bidolubaski.com © 2025 — Tüm Hakları Saklıdır.
                    </div>

                    <div className="flex items-center gap-4 text-gray-500">
                        <Facebook size={18} className="cursor-pointer hover:text-gray-700" />
                        <Twitter size={18} className="cursor-pointer hover:text-gray-700" />
                        <Linkedin size={18} className="cursor-pointer hover:text-gray-700" />
                        <Instagram size={18} className="cursor-pointer hover:text-gray-700" />
                    </div>

                    <div className="flex items-center gap-3 opacity-80">
                        <Image src="/visa.svg" width={40} height={20} alt="visa" />
                        <Image src="/mastercard.svg" width={40} height={20} alt="mc" />
                        <Image src="/troy.svg" width={40} height={20} alt="troy" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
