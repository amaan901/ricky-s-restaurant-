import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";

export const metadata: Metadata = {
  title: "Wedding Catering in Dubai",
  description:
    "Unforgettable wedding catering services in Dubai by Ricky's Restaurant. Live cooking stations, BBQ, beverage bars, and impeccable presentation.",
};

export default function WeddingCateringPage() {
  return (
    <CateringDetailPage
      title="Wedding Catering Services"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Wedding Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg"
      eyebrow="Catering"
      heading="Wedding Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-3.png"
      paragraphs={[
        "Wedding catering services in Dubai by Ricky's Restaurant ensure your big day is unforgettable. We understand that your dream celebration demands unsurpassed service with the highest quality and meticulous attention to detail. That's why our wedding catering services leave no stone unturned.",
        "Our offerings include a wide range of elements, from interactive live cooking stations to barbecue stations, beverage bars, salad stations, cold and hot appetizers, and more. Additionally, we provide a variety of setup options tailored to the type of event you are planning.",
        "With Ricky's Restaurant, you'll experience the best wedding catering Dubai has to offer. Simply give us a call, and rest assured that we'll handle everything. From planning and managing to executing an unforgettable event, we provide delicious food, classy décor, and a hassle-free experience.",
        "Our wedding catering services are versatile, capable of accommodating both intimate gatherings and grand celebrations. Flexibility and the highest standard of service are among our greatest strengths.",
        "When we say we make your wedding special, we mean that your wedding day will be remembered as the best day of your life. A wedding involves many details, and Ricky's Restaurant ensures you can focus on other aspects while we handle the biggest elements: food arrangements, theme, décor, and more.",
      ]}
      benefits={[
        "High-Quality Food: Prepared by experienced chefs",
        "Variety: A wide selection of dishes and cuisines",
        "Serving Options: Various meal styles and service options",
        "Impressive Presentation: Beautifully presented dishes",
        "Well-Trained Staff: Professional and courteous waitstaff",
        "Meal Planning Assistance: Expert help in planning and selecting meals",
      ]}
      benefitsTitle="Benefits of Our Wedding Catering"
      showGallery={false}
      showForm={true}
    />
  );
}
