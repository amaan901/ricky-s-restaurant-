import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "Catering Menu",
  description:
    "Explore Ricky's Restaurant full catering menu – Grill Feast, Grill Paradise, Extravaganza & International packages tailored for every occasion in Dubai.",
};

export default function MenuPage() {
  return <MenuClient />;
}
