"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { dropdownVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

type NavLink = (typeof NAV_LINKS)[number];
type ChildLink = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

function useIsActive(href: string, children?: readonly ChildLink[]) {
  const pathname = usePathname();

  if (pathname === href) return true;

  if (children) {
    for (const child of children) {
      if (pathname === child.href) return true;
      if (child.children) {
        for (const sub of child.children) {
          if (pathname === sub.href) return true;
        }
      }
    }
  }

  return false;
}

function DesktopDropdown({ items }: { items: readonly ChildLink[] }) {
  const pathname = usePathname();

  return (
    <motion.ul
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 mt-1 min-w-55 bg-white border border-stone-100 rounded-md shadow-xl z-50 py-2"
    >
      {items.map((child) => {
        const isChildActive =
          pathname === child.href ||
          child.children?.some((sub) => pathname === sub.href);

        return (
          <li key={child.href} className="relative group/sub">
            <Link
              href={child.href}
              className={cn(
                "flex items-center justify-between px-4 py-2.5 text-sm transition-colors",
                isChildActive
                  ? "text-amber-700 bg-amber-50 font-semibold"
                  : "text-stone-700 hover:bg-amber-50 hover:text-amber-700"
              )}
            >
              {child.label}
              {child.children && child.children.length > 0 && (
                <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
              )}
            </Link>
            {child.children && child.children.length > 0 && (
              <ul className="absolute left-full top-0 hidden group-hover/sub:block min-w-50 bg-white border border-stone-100 rounded-md shadow-xl py-2 z-50">
                {child.children.map((sub) => {
                  const isSubActive = pathname === sub.href;
                  return (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors",
                          isSubActive
                            ? "text-amber-700 bg-amber-50 font-semibold"
                            : "text-stone-700 hover:bg-amber-50 hover:text-amber-700"
                        )}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </motion.ul>
  );
}

function NavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const children = "children" in link && link.children?.length ? link.children : undefined;
  const isActive = useIsActive(link.href, children as readonly ChildLink[] | undefined);
  const hasChildren = !!children;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      <Link
        href={link.href}
        className={cn(
          "flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors py-2 uppercase relative",
          isActive
            ? "text-amber-600"
            : "text-stone-700 hover:text-amber-600"
        )}
      >
        {link.label}
        {hasChildren && (
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        )}
        {/* Active underline indicator */}
        {isActive && (
          <motion.span
            layoutId="nav-active-underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>

      <AnimatePresence>
        {open && hasChildren && (
          <DesktopDropdown items={children as readonly ChildLink[]} />
        )}
      </AnimatePresence>
    </li>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
                alt="Ricky's Restaurant"
                width={200}
                height={45}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex">
              <ul className="flex items-center gap-7">
                {NAV_LINKS.map((link) => (
                  <NavItem key={link.label} link={link} />
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact-us"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
              >
                Reservation
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-stone-700"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-75 bg-white z-50 overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b">
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
                  alt="Ricky's Restaurant"
                  width={160}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
                <button onClick={() => setMobileOpen(false)} className="p-1 text-stone-500">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-5">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <MobileNavItem
                      key={link.label}
                      link={link}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
                  >
                    Make a Reservation
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const children = "children" in link && link.children?.length ? link.children as readonly ChildLink[] : undefined;
  const hasChildren = !!children;

  // Auto-expand if a child route is currently active
  const isChildActive = children?.some(
    (child) =>
      pathname === child.href ||
      child.children?.some((sub) => pathname === sub.href)
  );

  const isActive =
    pathname === link.href || isChildActive;

  // Auto-open the section if a nested route is active
  useEffect(() => {
    if (isChildActive) setOpen(true);
  }, [isChildActive]);

  return (
    <li>
      <div
        className={cn(
          "flex items-center justify-between rounded-md px-2",
          isActive && "bg-amber-50"
        )}
      >
        <Link
          href={link.href}
          onClick={!hasChildren ? onClose : undefined}
          className={cn(
            "flex-1 py-2.5 text-sm font-semibold uppercase tracking-wide",
            isActive ? "text-amber-600" : "text-stone-700"
          )}
        >
          {link.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-stone-500"
          >
            <ChevronDown
              className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
            />
          </button>
        )}
      </div>
      <AnimatePresence>
        {open && hasChildren && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-4 border-l-2 border-amber-100"
          >
            {children.map((child) => {
              const isChildRouteActive =
                pathname === child.href ||
                child.children?.some((sub) => pathname === sub.href);

              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onClose}
                    className={cn(
                      "block py-2 text-sm",
                      isChildRouteActive
                        ? "text-amber-600 font-semibold"
                        : "text-stone-600 hover:text-amber-600"
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}