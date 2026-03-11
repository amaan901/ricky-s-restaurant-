import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ricky's Restaurant for reservations, catering enquiries and more. Visit us at Dubai Marina.",
};

export default function ContactPage() {
  return <ContactClient />;
}
