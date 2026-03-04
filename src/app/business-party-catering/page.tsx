import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Business Party Catering in Dubai",
  description:
    "Impress clients and partners with Ricky's Restaurant business party catering in Dubai. Conferences, seminars, product launches & corporate dinners.",
};

export default function BusinessPartyCateringPage() {
  return (
    <CateringDetailPage
      title="Business Party Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Corporate Catering", href: "/corporate-catering-in-dubai" },
        { label: "Business Party Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      eyebrow="Corporate Catering"
      heading="Business Party Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      paragraphs={[
        "Impress your clients, partners, and colleagues with Ricky's Restaurant business party catering in Dubai. Whether it's a product launch, corporate dinner, conference reception, or annual gala, we deliver dining experiences that reflect your company's prestige.",
        "Our business catering menus are crafted to impress at every level. From sophisticated canapés and cocktail-style receptions to elegant plated dinners and interactive food stations, we create dining experiences that align with your corporate brand and event objectives.",
        "We understand the importance of professionalism and timing in corporate settings. Our experienced team works seamlessly in the background, ensuring your event runs without a hitch while your guests enjoy an exceptional dining experience.",
        "With Ricky's Restaurant as your catering partner, you can focus on building relationships and making the right impression, confident that the food and service will exceed expectations.",
      ]}
      benefits={[
        "Elegant menus tailored to corporate events",
        "Professional, uniformed service staff",
        "Scalable from boardroom lunches to gala dinners",
        "Audio-visual and décor coordination available",
        "Halal-certified food options available",
      ]}
      benefitsTitle="Why Businesses Choose Us"
      showGallery={true}
      showForm={true}
    />
  );
}
