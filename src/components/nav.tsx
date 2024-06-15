import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link,} from "@nextui-org/react";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar className=" bg-blue-300 shadow-lg " onMenuOpenChange={setIsMenuOpen} maxWidth="full"   >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-3xl text-inherit">Hand Crafters</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden text-large sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground"  href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/products" color="foreground" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>

        <NavbarMenuItem>
          <Link href="/products" className="w-full mb-3 mt-2" color="foreground" size="lg">
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/#contact" className="w-full mb-3" color="foreground" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
