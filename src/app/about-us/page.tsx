import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ricky's Restaurant – Dubai's finest dining destination with a passion for quality, diverse flavors, and exceptional catering services.",
};

export default function AboutPage() {
  return <AboutClient />;
}
