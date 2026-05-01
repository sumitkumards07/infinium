// Footer component implementing the described layout
import React from "react";

type LinkGroup = {
  title: string;
  items: { label: string; href: string }[];
};

const pages: LinkGroup = {
  title: "Pages",
  items: [
    { label: "Products", href: "#" },
    { label: "Studio", href: "#" },
    { label: "Clients", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const social: LinkGroup = {
  title: "Social",
  items: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

const legal: LinkGroup = {
  title: "Legal",
  items: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const account: LinkGroup = {
  title: "Account",
  items: [
    { label: "Sign Up", href: "#" },
    { label: "Login", href: "#" },
  ],
};

const linkGroups: LinkGroup[] = [pages, social, legal, account];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Logo & tagline */}
          <div className="md:col-span-2 flex flex-col items-start">
            {/* Replace with your logo */}
            <img
              src="/logo.svg"
              alt="Company Logo"
              className="h-10 w-auto mb-2"
            />
            <p className="text-gray-600">Your company tagline goes here.</p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
