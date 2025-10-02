

const NAV_LINKS = [
  { name: "Home |", href: "/" },
  { name: "6th-12th Classes |", href: "/classes/6-12" },
  { name: "B.A. |", href: "/classes/ba" },
  { name: "M.A. |", href: "/classes/ma" },
  { name: "UGC NET |", href: "/classes/ugc-net" },
  { name: "UPSC |", href: "/classes/upsc" },
  { name: "Blogs |", href: "/blogs" },
  { name: "Notes |", href: "/notes" },
  { name: "About |", href: "/about" },
  { name: "Contact Us |", href: "/contact" },
  { name: "Login |", href: "/login" },
  { name: "Signup ", href: "/signup" },
];

const SOCIALS = [
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637A4.118 4.118 0 0021.448 4.1a8.224 8.224 0 01-2.605.977A4.107 4.107 0 0016.616 3c-2.266 0-4.104 1.825-4.104 4.075 0 .32.036.634.106.934C8.728 7.87 5.8 6.1 3.671 3.149a4.025 4.025 0 00-.555 2.051c0 1.417.724 2.669 1.825 3.404A4.093 4.093 0 012.8 8.1v.051c0 1.98 1.417 3.633 3.292 4.011a4.1 4.1 0 01-1.085.144c-.265 0-.522-.025-.772-.073.523 1.623 2.037 2.805 3.833 2.836A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
      </svg>
    ),
  },
];

const APPS = [
  {
    name: "Gmail",
    href: "https://mail.google.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.272-.198-.57-.347z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.94 0 12 0 12s0 4.06.502 5.814a2.994 2.994 0 002.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.06 24 12 24 12s0-4.06-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];
function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-bold text-lg tracking-wide text-[#f7c873]">Gur Academy</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm hover:text-[#f7c873] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-3 mb-2">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-[#f7c873] transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={app.name}
                className="hover:text-[#f7c873] transition-colors duration-200"
              >
                {app.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Gur Academy. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
