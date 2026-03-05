import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Ricky's Restaurant – Dubai Marina",
    template: "%s | Ricky's Restaurant",
  },
  description:
    "Ricky's Restaurant – one of Dubai's finest restaurants offering dine-in, catering, and food delivery.",
  keywords: ["restaurant", "Dubai", "catering", "wedding catering", "Dubai Marina"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="overflow-hidden">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
