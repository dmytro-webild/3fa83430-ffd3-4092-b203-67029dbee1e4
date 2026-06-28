import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, MapPin } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Reviews",
    "href": "#reviews"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Lisa’s Nails"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Lisa’s Nails"
      copyright="© 2024 Lisa’s Nails. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
        },
        {
          icon: Facebook,
          href: "#",
        },
        {
          icon: MapPin,
          href: "https://maps.google.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
