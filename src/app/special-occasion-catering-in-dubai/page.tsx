import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Special Occasion Catering in Dubai",
  description:
    "Ricky's Restaurant special occasion catering in Dubai. Anniversaries, graduations, engagements & more — delivered with elegance.",
};

export default function SpecialOccasionPage() {
  return (
    <CateringDetailPage
      title="Special Occasion Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Special Occasion Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      eyebrow="Catering"
      heading="Special Occasion Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      paragraphs={[
        "Life's most precious moments deserve extraordinary food. Ricky's Restaurant provides special occasion catering in Dubai for all milestone celebrations — anniversaries, engagements, graduations, religious celebrations, and more.",
        "We understand that every special occasion is unique, which is why our catering packages are fully tailored to your event. From the menu and presentation style to the service and décor, everything is personalized to reflect the significance of your celebration.",
        "Our culinary team brings creativity and passion to every special occasion, crafting dishes that not only taste extraordinary but also look stunning. We believe food is a central part of any celebration and take pride in making every bite memorable.",
        "Let Ricky's Restaurant take care of all the culinary aspects of your special occasion, so you can be fully present and enjoy every moment with your loved ones.",
      ]}
      benefits={[
        "Fully customizable menus for every occasion",
        "Elegant food presentation and styling",
        "Experienced event coordination",
        "Dietary requirements and preferences accommodated",
        "Seamless service from start to finish",
      ]}
      benefitsTitle="Our Special Occasion Promise"
      showGallery={true}
      showForm={true}
    />
  );
}
