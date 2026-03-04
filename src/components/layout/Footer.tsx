import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_IMAGES, SERVICE_LINKS, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
              alt="Ricky's Restaurant"
              width={180}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert mb-6"
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              {SITE_CONFIG.phones.map((phone) => (
                <li key={phone} className="flex gap-3">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-amber-400 transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <SocialLink href={SITE_CONFIG.socials.facebook} label="Facebook">
                <Facebook className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={SITE_CONFIG.socials.linkedin} label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={SITE_CONFIG.socials.instagram} label="Instagram">
                <Instagram className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-0.5">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Reservation", href: "/contact-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Menu", href: "/menu" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-0.5">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Grid */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide">
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {FOOTER_IMAGES.map((src, i) => (
                <div key={i} className="aspect-square rounded overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Ricky&apos;s Restaurant. All rights reserved.</p>
          <p>Dubai Marina, UAE</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-stone-700 hover:bg-amber-600 flex items-center justify-center text-white transition-colors"
    >
      {children}
    </a>
  );
}
