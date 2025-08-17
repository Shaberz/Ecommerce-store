import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderMenu from "./left-bar/header-menu";
import Logo from "./central-bar/logo";
import Container from "../container";
import MobileMenu from "./left-bar/mobile-menu";
import SearchBar from "@/components/layouts/header/right-bar/search-bar";
import CardIcon from "@/components/layouts/header/right-bar/card-icon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { ListOrdered } from "lucide-react";

const Header = async() => {
  const user = await currentUser()
  return (
    <header className="border-b border-b-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo />
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CardIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={'/orders'} className="group relative">
                <ListOrdered className="w-5 h-5 group hover:text-darkColor hoverEffect"/>
                <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex justify-center items-center">0</span>
              </Link>
              <UserButton />
            </SignedIn>
          {!user
          &&
          <SignInButton mode="modal">
            <div>
              <Button className="bg-lightBg text-darkColor hover:text-white">
                Login
              </Button>
            </div>
          </SignInButton>
          }
          </ClerkLoaded>

        </div>
      </Container>
    </header>
  );
};

export default Header;
