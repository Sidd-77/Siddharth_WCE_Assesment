import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="  shadow-lg py-2 "
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-3xl  lg:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Hand Crafters
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className=" font-semibold hover:text-blue-700 text-2xl"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/products"
            color="foreground"
            className=" font-semibold hover:text-blue-700 text-2xl"
            aria-current="page"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className=" font-semibold hover:text-blue-700 text-2xl"
            href="/contact"
          >
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            href="/"
            className="w-full mb-3 mt-3"
            color="foreground"
            size="lg"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/products"
            className="w-full mb-3"
            color="foreground"
            size="lg"
          >
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/contact"
            className="w-full mb-3"
            color="foreground"
            size="lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-600"></span>
    </Navbar>
  );
}
