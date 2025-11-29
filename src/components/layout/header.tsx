"use client";

import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
      <header className="w-full bg-white">
        <div className="mx-auto max-w-[75%] px-4 py-4">

          <div className="hidden lg:flex items-center justify-between">
            <Link href="/" className="inline-flex">
              <Image
                  src="https://www.bidolubaski.com/_next/static/media/logo.1cee344a.svg"
                  alt="logo"
                  width={264}
                  height={42}
              />
            </Link>

            <div className="flex-1 flex justify-center px-8">
              <InputGroup className="h-10 w-full max-w-2xl">
                <InputGroupInput placeholder="Ne bastırmak istiyorsunuz?" />
                <InputGroupAddon align="inline-end">
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="lg">
                <UserIcon />
                Üye Ol ya da Giriş Yap
              </Button>

              <Button variant="ghost" size="lg">
                <ShoppingCartIcon />
                Sepetim
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex">
                <Image
                    src="https://www.bidolubaski.com/_next/static/media/logo.1cee344a.svg"
                    alt="logo"
                    width={200}
                    height={28}
                    className="h-[28px] w-auto"
                />
              </Link>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <UserIcon size={20} />
                </Button>

                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <ShoppingCartIcon size={20} />
                </Button>
              </div>
            </div>

            <div className="w-full">
              <InputGroup className="h-10 w-full">
                <InputGroupInput placeholder="Ne bastırmak istiyorsunuz?" />
                <InputGroupAddon align="inline-end">
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </header>
  );
}
