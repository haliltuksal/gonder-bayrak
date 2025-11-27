"use client";

import Link from "next/link";

export default function Topbar() {
    return (
        <div className="w-full bg-white">
            <div className="mx-auto max-w-[75%] flex justify-between items-center py-[6px]">

                {/* LEFT */}
                <div className="flex items-center gap-5">
                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Nasıl Sipariş Verebilirim
                    </Link>

                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Bidolubaski ParaPuan
                    </Link>

                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Tasarım Yükleme ve Onay Süreci
                    </Link>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">
                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Siparişlerim
                    </Link>

                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Teklif İste
                    </Link>

                    <Link
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-gray-800 transition"
                    >
                        Yardım Merkezi
                    </Link>

                    <Link
                        href="#"
                        className="text-[12px] text-pink-600 hover:text-pink-700 transition"
                    >
                        Blog
                    </Link>
                </div>

            </div>
        </div>
    );
}
