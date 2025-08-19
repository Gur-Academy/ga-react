import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Class",
    dropdown: [
      {
        name: "School",
        dropdown: [
          { name: "Class 6", href: "/classes/6" },
          { name: "Class 7", href: "/classes/7" },
          { name: "Class 8", href: "/classes/8" },
          { name: "Class 9", href: "/classes/9" },
          { name: "Class 10", href: "/classes/10" },
          { name: "Class 11", href: "/classes/11" },
          { name: "Class 12", href: "/classes/12" },
        ],
      },
      { name: "B.A.", href: "/classes/ba" },
      { name: "M.A.", href: "/classes/ma" },
      { name: "UGC NET", href: "/classes/ugc-net" },
      { name: "UPSC", href: "/classes/upsc" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "Notes", href: "/notes" },
  { name: "About", href: "/About" },
  { name: "Contact Us", href: "/Contact" },
];

const AuthButtons = [
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);

  return (
    <nav
      className="bg-[#0a2342] text-white shadow-lg sticky top-0 z-50"
      aria-label="Main Navigation"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Gur Academy Logo" className="h-8 w-8" />
            <span className="font-bold text-xl tracking-wide text-[#f7c873]">Gur Academy</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  className="relative"
                  key={item.name}
                  onMouseEnter={() => setClassDropdownOpen(true)}
                  onMouseLeave={() => setClassDropdownOpen(false)}
                >
                  <button
                    className="px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-[#19376d] hover:text-[#f7c873] focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={classDropdownOpen}
                  >
                    {item.name}
                  </button>
                  {classDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-[#0a2342] rounded-md shadow-lg z-10">
                      {item.dropdown.map((sub) =>
                        sub.dropdown ? (
                          <div
                            className="relative"
                            key={sub.name}
                            onMouseEnter={() => setSchoolDropdownOpen(true)}
                            onMouseLeave={() => setSchoolDropdownOpen(false)}
                          >
                            <button className="block w-full text-left px-4 py-2 hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200">
                              {sub.name}
                            </button>
                            {schoolDropdownOpen && (
                              <div className="absolute left-full top-0 mt-0 ml-2 w-40 bg-white text-[#0a2342] rounded-md shadow-lg z-20">
                                {sub.dropdown.map((cls) => (
                                  <Link
                                    key={cls.name}
                                    to={cls.href}
                                    className="block px-4 py-2 hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200"
                                  >
                                    {cls.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2 hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-[#19376d] hover:text-[#f7c873]"
                >
                  {item.name}
                </Link>
              )
            )}

            {AuthButtons.map((btn) => (
              <Link
                key={btn.name}
                to={btn.href}
                className="px-3 py-2 rounded-md font-medium border border-[#f7c873] text-[#f7c873] bg-[#0a2342] hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200"
              >
                {btn.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#f7c873] focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a2342] px-4 pb-4 pt-2 shadow-lg">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="mb-2">
                <button
                  onClick={() => setClassOpen(!classOpen)}
                  className="w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-[#19376d] hover:text-[#f7c873] focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={classOpen}
                >
                  {item.name}
                </button>
                {classOpen && (
                  <div className="ml-4 mt-1 bg-white text-[#0a2342] rounded-md shadow-lg">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-[#19376d] hover:text-[#f7c873] mb-2"
              >
                {item.name}
              </Link>
            )
          )}

          {AuthButtons.map((btn) => (
            <Link
              key={btn.name}
              to={btn.href}
              className="block px-3 py-2 rounded-md font-medium border border-[#f7c873] text-[#f7c873] bg-[#0a2342] hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200 mb-2"
            >
              {btn.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
