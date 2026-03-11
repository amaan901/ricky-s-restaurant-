import type { Metadata } from "next";
import { CorporateCateringClient } from "./CorporateCateringClient";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Corporate Catering in Dubai",
  description: "Premier corporate catering services in Dubai by Ricky's Restaurant.",
};

export default function CorporateCateringPage() {
  return <CorporateCateringClient />;
}
