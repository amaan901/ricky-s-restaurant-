export const SITE_CONFIG = {
  name: "Ricky's Restaurant",
  tagline: "Eat What Makes You Happy",
  address: "Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina",
  phones: ["+971 54 339 2616", "+971 4 514 7066"],
  email: "director@rickyrestaurants.com",
  socials: {
    facebook: "https://www.facebook.com/rickysrestaurant/",
    linkedin: "https://www.linkedin.com/in/ricky-restaurant-5015661a5/",
    instagram: "https://www.instagram.com/rickysrestaurantdxb/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Menu",
    href: "/menu",
    children: [{ label: "Catering", href: "/menu" }],
  },
  {
    label: "Catering",
    href: "#",
    children: [
      {
        label: "Private Catering",
        href: "/private-catering",
        children: [
          { label: "Wedding Catering", href: "/wedding-catering-in-dubai" },
          { label: "Birthday Party Catering", href: "/birthday-party-catering-in-dubai" },
          { label: "Yacht Party Catering", href: "/yacht-party-catering" },
          { label: "Special Occasion Catering", href: "/special-occasion-catering-in-dubai" },
          { label: "Kids Party Catering", href: "/kids-party-catering-in-dubai" },
          { label: "Get Together", href: "/get-together" },
        ],
      },
      {
        label: "Corporate Catering",
        href: "/corporate-catering-in-dubai",
        children: [
          { label: "Staff Catering", href: "/staff-catering" },
          { label: "Business Party Catering", href: "/business-party-catering" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const STATS = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Trained Chefs", value: 40, suffix: "+" },
  { label: "Stunning Dishes", value: 120, suffix: "+" },
] as const;

export const CATERING_SERVICES = [
  {
    title: "Wedding Catering",
    href: "/wedding-catering-in-dubai",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg",
  },
  {
    title: "Special Occasion",
    href: "/special-occasion-catering-in-dubai",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png",
  },
  {
    title: "Birthday Party Catering",
    href: "/birthday-party-catering-in-dubai",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg",
  },
  {
    title: "Kids Party Catering",
    href: "/kids-party-catering-in-dubai",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif",
  },
  {
    title: "Staff Party",
    href: "/staff-catering",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg",
  },
  {
    title: "Yacht Party Catering",
    href: "/yacht-party-catering",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png",
  },
] as const;

export const MENU_ITEMS = [
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg",
  },
  {
    name: "Hummus",
    description: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg",
  },
  {
    name: "Tahina",
    description: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg",
  },
  {
    name: "Mutton Kofta (Seekh Kabab)",
    description: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg",
  },
  {
    name: "Chicken Skewers",
    description: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg",
  },
  {
    name: "Grilled Chicken Bone",
    description: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg",
  },
  {
    name: "Pasta (White or Pink)",
    description: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg",
  },
  {
    name: "Seasoned Rice",
    description: "Fluffy seasoned rice, infused with aromatic herbs and spices",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg",
  },
  {
    name: "Potato Wedges",
    description: "Crispy potato wedges, seasoned to perfection and served with your choice of dipping sauce",
    image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/potatow-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg",
  },
  {
    name: "French Fries",
    description: "Golden French fries, perfectly crispy on the outside and fluffy on the inside",
    image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/frenchfries-300x200.jpeg",
  },
] as const;

export const GALLERY_IMAGES = [
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-1-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-2-qpe6omzzqd57iunxp4gqa23r32j8oic5qhp6mynv2s.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-3-qpe6onxpbv7b8db65xrfva411dltez9y7o8wh21xqe.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-4-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-5-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-6-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-7-qpe6omzzqd57iunxp4gqa23r32j8oic5qhp6mynv2s.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-8-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-1-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",

] as const;

export const FOOTER_IMAGES = [
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-1.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-3.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-2.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-4.jpg",
] as const;

export const SERVICE_LINKS = [
  { label: "Yacht Party Catering In Dubai", href: "/yacht-party-catering" },
  { label: "Birthday Party Catering", href: "/birthday-party-catering-in-dubai" },
  { label: "Wedding Catering in Dubai", href: "/wedding-catering-in-dubai" },
  { label: "Business Party Catering", href: "/business-party-catering" },
  { label: "Private Catering", href: "/private-catering" },
] as const;
