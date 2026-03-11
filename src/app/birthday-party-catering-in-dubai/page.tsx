import type { Metadata } from "next";
import { CateringDetailPage } from "@/components/shared/CateringDetailPage";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Birthday Party Catering in Dubai",
  description:
    "Make every birthday unforgettable with Ricky's Restaurant catering services in Dubai. Custom menus, professional staff, full setup.",
};

export default function BirthdayCateringPage() {
  return (
    <CateringDetailPage
      title="Birthday Party Catering"
      breadcrumbs={[
        { label: "Catering", href: "#" },
        { label: "Private Catering", href: "/private-catering" },
        { label: "Birthday Party Catering" },
      ]}
      bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg"
      eyebrow="Catering"
      heading="Birthday Party Catering in Dubai"
      image="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg"
      paragraphs={[
        "Celebrate every milestone with Ricky's Restaurant birthday party catering services in Dubai. Whether it's a small gathering of close friends or a grand birthday bash, we bring the celebration to life with exceptional food and flawless service.",
        "Our birthday catering packages are fully customizable, allowing you to choose from a wide variety of cuisines and themes. From live grilling stations to elegant buffet setups, we create experiences that match your vision and exceed your expectations.",
        "Our experienced team handles every detail — from setup to cleanup — so you can focus on enjoying the celebration. With Ricky's Restaurant, your birthday will be remembered for all the right reasons.",
        "We cater to all ages and preferences, with menus crafted to suit children's birthday parties as well as adult celebrations. Let us bring the joy of great food to your special day.",
      ]}
      benefits={[
        "Custom themed menus tailored to your birthday",
        "Professional setup and full event management",
        "Wide variety of cuisines for all tastes",
        "Flexible packages for any guest count",
        "On-time delivery and professional service staff",
      ]}
      benefitsTitle="Why Choose Our Birthday Catering"
      showGallery={true}
      showForm={true}
    />
  );
}
