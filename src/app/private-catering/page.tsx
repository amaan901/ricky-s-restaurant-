import type { Metadata } from "next";
import { PrivateCateringClient } from "./PrivateCateringClient";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Private Catering in Dubai",
  description: "Ricky's Restaurant – reliable private events catering in Dubai. Weddings, birthdays, yacht parties, kids parties & more.",
};

export default function PrivateCateringPage() {
  return <PrivateCateringClient />;
}
