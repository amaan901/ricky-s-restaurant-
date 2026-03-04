import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Yacht Party Catering in Dubai",
  description:
    "Premium yacht party catering in Dubai by Ricky's Restaurant. Exquisite menus, fresh seafood & professional service on the water.",
};

export default function YachtCateringPage() {
  return (
    <CateringDetailPage
      title="Yacht Party Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Yacht Party Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      eyebrow="Catering"
      heading="Yacht Party Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png"
      paragraphs={[
        "Elevate your yacht experience with Ricky's Restaurant premium yacht party catering services in Dubai. Whether cruising along the iconic Dubai Marina or the calm waters of the Arabian Gulf, we bring world-class dining to you on the water.",
        "Our yacht catering menus are specially curated to complement the unique setting of a yacht party. From fresh seafood platters and elegant canapés to grilled delicacies and refreshing beverages, every dish is prepared with the finest ingredients.",
        "Our team is experienced in catering on boats and yachts of all sizes, ensuring seamless service in even the most unique environments. We coordinate with your captain and crew to deliver a flawless dining experience at sea.",
        "Ricky's Restaurant will ensure your yacht party is talked about long after you've docked. Trust us to deliver the finest food, stunning presentation, and professional service — all with the beautiful Dubai skyline as your backdrop.",
      ]}
      benefits={[
        "Specially designed menus for on-water events",
        "Fresh seafood and premium ingredients",
        "Experienced staff comfortable on board",
        "Flexible package sizes for any yacht",
        "Full cleanup service post-event",
      ]}
      benefitsTitle="What Makes Our Yacht Catering Special"
      showGallery={true}
      showForm={true}
    />
  );
}
