import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Kids Party Catering in Dubai",
  description:
    "Fun and delicious kids party catering in Dubai by Ricky's Restaurant. Healthy, child-friendly menus with themed setups.",
};

export default function KidsPartyCateringPage() {
  return (
    <CateringDetailPage
      title="Kids Party Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Kids Party Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif"
      eyebrow="Catering"
      heading="Kids Party Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif"
      paragraphs={[
        "Make your little one's party the most memorable event of the year with Ricky's Restaurant kids party catering services in Dubai. We specialize in creating fun, delicious, and age-appropriate menus that children love.",
        "Our kids catering menus are designed with both nutrition and fun in mind. From colorful finger foods and mini sliders to fruit skewers and fun dessert stations, every item is crafted to delight young taste buds while keeping parents happy.",
        "We understand the importance of food safety and allergies when it comes to children. Our kitchen maintains the highest hygiene standards and our team is experienced in accommodating dietary restrictions and allergies.",
        "With Ricky's Restaurant handling the food, you can focus on creating magical memories for your child. We set up, serve, and clean up — making your kids party completely stress-free.",
      ]}
      benefits={[
        "Child-friendly menus with healthy options",
        "Allergen-aware preparations",
        "Themed food setups and presentations",
        "Full event setup and teardown service",
        "Supervised food stations for safety",
      ]}
      benefitsTitle="Why Parents Trust Us"
      showGallery={true}
      showForm={true}
    />
  );
}
