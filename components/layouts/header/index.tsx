import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderMenu from "./header-menu";
import Logo from "./logo";
import Container from "../container";

const Header = () => {
  return (
    <header className="border-b border-b-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center">
          <Logo />
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-between gap-5">
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
