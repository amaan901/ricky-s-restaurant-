import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Staff Catering in Dubai",
  description:
    "Professional staff catering services in Dubai by Ricky's Restaurant. Reliable daily meals and staff events for businesses of all sizes.",
};

export default function StaffCateringPage() {
  return (
    <CateringDetailPage
      title="Staff Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Corporate Catering", href: "/corporate-catering-in-dubai" },
        { label: "Staff Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif"
      eyebrow="Corporate Catering"
      heading="Staff Catering Services in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif"
      paragraphs={[
        "Keep your team fueled and motivated with Ricky's Restaurant professional staff catering services in Dubai. We provide reliable, high-quality daily meals and special event catering for businesses across all industries.",
        "Our staff catering solutions are designed to be flexible and cost-effective. Whether you need daily lunch deliveries for your office, catering for a company celebration, or meals for a large workforce, we tailor our services to your specific requirements.",
        "We understand that consistency and reliability are paramount when it comes to staff catering. Our team ensures on-time delivery, consistent food quality, and seamless service every single day.",
        "From balanced nutritional meals to festive celebration spreads, Ricky's Restaurant provides staff catering that boosts morale, promotes wellness, and keeps your team performing at their best.",
      ]}
      benefits={[
        "Daily meal delivery for offices and camps",
        "Customized menus for dietary preferences",
        "Consistent quality and reliable service",
        "Scalable from small offices to large compounds",
        "Competitive pricing with volume discounts",
      ]}
      benefitsTitle="Staff Catering Benefits"
      showGallery={true}
      showForm={true}
    />
  );
}
