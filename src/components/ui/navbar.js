"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Product",
      href: "#",
      submenu: [
        "Products Defaults",
        "Products Sale",
        "Products Countdown Timer",
        "Products Grouped",
        "Frequently Bought Together",
        "Products Out Of Stock",
        "Products Variable",
      ],
    },
    {
      label: "Service",
      href: "#",
      submenu: [
        "Service External",
        "Service On Sale",
        "Service With Discount",
        "Service With Sidebar",
        "Service Fixed Price",
      ],
    },
    {
      label: "Appointment",
      href: "#",
      submenu: [
        "Thumbnails Left",
        "Thumbnails Bottom",
        "Grid 1 Scrolling",
        "Grid 2 Scrolling",
        "Combined 1",
        "Combined 2",
      ],
    },
    {
      label: "Contact",
      href: "#",
    },
  ];

  return (
    <nav
      className={`fixed z-99 top-0 left-0 right-0  transition-all duration-300 ${
        isScrolled ? "bg-yellow-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
            Contac8
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`text-lg   font-medium transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled
                      ? "text-gray-900 hover:text-yellow-600"
                      : "text-gray-900 hover:text-yellow-600"
                  }`}
                >
                  {item.label}
                  {item.submenu && <span className="text-xs">+</span>}
                </button>

                {/* Dropdown */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-95 invisible"
                    }`}
                  >
                    <div className="py-2">
                      {item.submenu.map((subitem, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 hover:text-yellow-900 transition-colors duration-150"
                        >
                          {subitem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-yellow-200/50"
              }`}
            >
              <Search
                className={`w-5 h-5 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              />
            </button>
            <button
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-yellow-200/50"
              }`}
            >
              <User
                className={`w-5 h-5 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              />
            </button>
            <button
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-yellow-200/50"
              }`}
            >
              <ShoppingCart
                className={`w-5 h-5 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-yellow-200/50"
              }`}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5 text-gray-900" />
              ) : (
                <Menu className="w-5 h-5 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 ${
              isScrolled ? "bg-white" : "bg-yellow-300/50"
            }`}
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-100 transition-colors duration-150 flex items-center justify-between"
                >
                  {item.label}
                  {item.submenu && <span className="text-xs">+</span>}
                </button>

                {item.submenu && activeDropdown === item.label && (
                  <div className="bg-yellow-50 pl-4">
                    {item.submenu.map((subitem, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-yellow-900"
                      >
                        {subitem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
