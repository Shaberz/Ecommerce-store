import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/Logo.png"} width={100} height={100} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
