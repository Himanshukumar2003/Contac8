import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Serives from "@/home-page/cardsSection";
import CategoryExplorer from "@/home-page/categorySection";
import Herosection from "@/home-page/hero";
import OurServices from "@/home-page/services";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Herosection></Herosection>
      <Serives></Serives>
      <CategoryExplorer></CategoryExplorer>
      <OurServices></OurServices>
    </>
  );
}
