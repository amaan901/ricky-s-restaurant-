import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Get Together Catering in Dubai",
  description:
    "Casual and fun get-together catering in Dubai by Ricky's Restaurant. Great food for family reunions, friends gatherings and more.",
};

export default function GetTogetherPage() {
  return (
    <CateringDetailPage
      title="Get Together Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Get Together" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg"
      eyebrow="Catering"
      heading="Get Together Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg"
      paragraphs={[
        "Bring people together with the magic of great food. Ricky's Restaurant get-together catering services in Dubai make every reunion, family gathering, or casual celebration a memorable culinary experience.",
        "Whether you're hosting a rooftop gathering, a garden party, or a cozy indoor get-together, our team delivers fresh, flavorful food that gets everyone talking. Our informal catering packages are perfect for groups of all sizes.",
        "We offer flexible setup options, from casual buffet-style spreads to interactive food stations. Our menu options range from hearty grilled meats and mezze platters to light refreshments and desserts.",
        "Let us handle the food while you enjoy reconnecting with the people who matter most. Ricky's Restaurant ensures your get-together is filled with warmth, laughter, and outstanding food.",
      ]}
      benefits={[
        "Flexible menu options for casual gatherings",
        "Buffet and station-style setup available",
        "Suitable for indoor and outdoor venues",
        "Scalable portions for any group size",
        "Prompt delivery and friendly service",
      ]}
      benefitsTitle="Perfect for Every Gathering"
      showGallery={true}
      showForm={true}
    />
  );
}
