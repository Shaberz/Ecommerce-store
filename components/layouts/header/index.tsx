import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderMenu from "./left-bar/header-menu";
import Logo from "./central-bar/logo";
import Container from "../container";
import MobileMenu from "./left-bar/mobile-menu";
import SearchBar from "@/components/layouts/header/right-bar/search-bar";
import CardIcon from "@/components/layouts/header/right-bar/card-icon";

const Header = () => {
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
          <Link href={"/login"}>
            <Button className="bg-lightBg text-darkColor hover:text-white">
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
