import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";

import Navbar from "./navbar";

type CategoryNode = {
  title: string;
  href: string;
  badge?: string;
  children?: CategoryNode[];
};

export default function Header() {
  return (
    <header className="container mx-auto p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <Link href="/" className="inline-flex w-fit">
            <Image
              src="https://www.bidolubaski.com/_next/static/media/logo.1cee344a.svg"
              alt="logo"
              loading="lazy"
              className=""
              width={264}
              height={42}
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <InputGroup className="h-10 w-full max-w-2xl">
            <InputGroupInput placeholder="Ne Bastırmak İstiyorsunuz?" />
            <InputGroupAddon align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex-1 flex justify-end gap-2">
          <Button variant="ghost" size="lg">
            <UserIcon />
            <span>Üye Ol ya da Giriş Yap</span>
          </Button>
          <Button variant="ghost" size="lg">
            <ShoppingCartIcon />
            <span>Sepetim</span>
          </Button>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
