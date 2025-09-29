"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../public/img/logo.png"

export default function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-tr from-[#FFF7E8] via-white to-[#E9F8EF]">
      <div className="mx-auto max-w-[90rem] px-6 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Logo + address */}
          <div className="md:col-span-5">
            <div className="">
              <Image
                src={logo} 
                alt="Wealthix"
             
                className="h-auto w-50 object-contain"
                priority
              />
            </div>

            <div className="mt-6 space-y-4 text-gray-700">
              <p className="text-[15px]">
                info@wealthix.in | 9920599105
              </p>

              <address className="not-italic text-[15px] leading-7">
                209, A1, RUPA SOLITAIRE,<br />
                Millenium Business Park,<br />
                Sector 2, Mahape, Navi<br />
                Mumbai, Maharashtra 400710
              </address>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-6 text-gray-800">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Middle: Others */}
          <div className="md:col-span-3">
            <h3 className="text-gray-900 font-semibold">Others</h3>
            <ul className="mt-5 space-y-4 text-gray-700">
              <li><Link href="#" className="hover:text-gray-900">Our Story</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Benefits</Link></li>
              <li><Link href="#" className="hover:text-gray-900">FAQs</Link></li>
            </ul>
          </div>

          {/* Right: Contact form */}
          <div className="md:col-span-4">
            <h4 className="text-gray-900 font-semibold">Contact Us</h4>

            <form
              className="mt-6 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <InputUnderline placeholder="Name" />
              <InputUnderline placeholder="Phone no" />
              <InputUnderline placeholder="Email Address" type="email" />
              <InputUnderline placeholder="Your Query" asTextArea />

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#74C2A3] px-12 text-white font-semibold hover:opacity-95 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-[14px] text-gray-700 gap-4">
          <p>© 2025 Wealthix. All rights reserved.</p>
          <div className="flex items-center gap-10">
            <Link href="#" className="hover:text-gray-900">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */
function InputUnderline({
  placeholder,
  type = "text",
  asTextArea = false,
}) {
  const base =
    "w-full bg-transparent outline-none text-[15px] text-gray-800 placeholder:text-gray-400";
  return asTextArea ? (
    <div className="border-b border-gray-200 pb-2">
      <textarea className={base + " h-16 resize-none"} placeholder={placeholder} />
    </div>
  ) : (
    <div className="border-b border-gray-200 pb-2">
      <input className={base} placeholder={placeholder} type={type} />
    </div>
  );
}
