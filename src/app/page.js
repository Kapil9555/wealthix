"use client";
import Image from "next/image";
import { Mail } from "lucide-react";
import dashboard from "../../public/img/dashboard.png"
import expertTeam from "../../public/img/expertTeam.png"
import f1 from "../../public//img/f1.png"
import f2 from "../../public//img/f2.png"
import f3 from "../../public//img/f3.png"
import f6 from "../../public/img/f6.png"
import SiteFooter from "@/components/Footer";



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF7EA] via-white to-[#EFFFF5]">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-visible">
        <HeroDoodles />

        {/* Hero Content */}
        <div className="container mx-auto max-w-7xl px-4 pt-16 sm:pt-24 pb-50">
          <h1 className="mx-auto max-w-7xl text-center text-[34px] font-extrabold leading-[1.15] text-gray-900 sm:text-[52px]">
            Advanced software that belongs
            <br />
            to your investment funds
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-gray-600 sm:mt-5 sm:text-[15px]">
            Wealthix – Smarter Software for Smarter Investments
            <br className="hidden sm:block" />
            Empowering Businesses & Investors in Mutual Funds, SIPs, and beyond
          </p>

          {/* Email capture pill */}
          {/* <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 w-full max-w-[630px] relative"
          >
            <div className="relative h-[60px] rounded-full border border-[#D7DEE8] bg-[#F4F6FA] shadow-[inset_0_1px_0_#fff]">
              <input
                type="email"
                required
                placeholder="Enter email address"
                aria-label="Enter email address"
                className="absolute inset-y-0 left-0 w-[calc(100%-170px)] rounded-full bg-transparent pl-6 pr-4 text-[15px] text-gray-600 placeholder:text-[#747F95] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-[calc(100%-8px)] min-w-[160px] rounded-full bg-[#75CDB7] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#68c6ae] focus:outline-none"
              >
                Book a demo
              </button>
            </div>
          </form> */}

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 w-full max-w-[900px]"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Email field */}
              <div className="relative flex-1 h-[55px] rounded-full border border-[#D7DEE8] bg-[#F4F6FA] shadow-[inset_0_1px_0_#fff]">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  aria-label="Enter email address"
                  className="absolute inset-y-0 left-0 w-full rounded-full bg-transparent px-6 text-[15px] text-gray-600 placeholder:text-[#747F95] focus:outline-none"
                />
              </div>

              {/* Mobile field */}
              <div className="relative flex-1 h-[55px] rounded-full border border-[#D7DEE8] bg-[#F4F6FA] shadow-[inset_0_1px_0_#fff]">
                <input
                  type="tel"
                  required
                  placeholder="Enter mobile number"
                  aria-label="Enter mobile number"
                  className="absolute inset-y-0 left-0 w-full rounded-full bg-transparent px-6 text-[15px] text-gray-600 placeholder:text-[#747F95] focus:outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="h-[55px] min-w-[160px] rounded-full bg-[#75CDB7] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#68c6ae] focus:outline-none"
              >
                Book a demo
              </button>
            </div>
          </form>

        </div>

        {/* Dashboard mock card */}
        <div className="absolute left-1/2 top-30 z-20 w-full max-w-7xl -translate-x-1/2 translate-y-1/2">

          <div className="relative aspect-[16/9] w-full">
            <Image
              src={dashboard}
              alt="Wealthix dashboard preview"
              fill
              className="h-auto w-full shadow-xxl"
              priority
            />
          </div>

        </div>
      </section>


      {/* PRODUCT OVERVIEW */}
      <section className="relative mt-28  bg-[#3E57A7] py-16 text-white sm:py-20 pt-20">
        <div className="container mx-auto max-w-7xl px-4 mt-120">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-6">
              <span className="inline-flex items-center rounded-full bg-[#B7F5C9] px-4 py-2 text-xs font-bold tracking-wide text-[#2C7A53]">
                PRODUCT OVERVIEW
              </span>
              <h2 className="mt-6 text-5xl font-extrabold leading-[1.1] sm:text-6xl">
                Build
                <br />
                Exclusively
              </h2>
            </div>
            <div className="sm:col-span-6">
              <p className="mt-2 text-lg leading-8 text-white/90">
                At Wealthix, we build powerful, secure, and customizable software solutions designed for businesses and individuals managing Mutual Funds, SIPs, and other financial instruments. Whether you’re running a wealth management firm or an independent investor, our platform helps you make informed decisions, automate processes, and grow faster.
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-10 w-[90%] rounded-t-[2.2rem] bg-gradient-to-b from-emerald-100/40 to-transparent" />
      </section>


      {/* EXPERT TEAM SECTION */}
      <section className="relative bg-white py-15 sm:py-28">
        <div className="container mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left image with overlay card */}
            <div className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/img/expert.png"
                  alt="Laptop with Wealthix dashboard"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>


              {/* Overlay expert team card */}
              <div className="absolute -bottom-15 -right-50">
                <Image
                  src={expertTeam}
                  alt="Expert 1"
                  className="h-60 w-full"
                />
                <div>

                </div>
              </div>
            </div>


            {/* Right content */}
            <div className="lg:col-span-6 lg:pl-18">
              <span className="inline-flex items-center rounded-full bg-[#B7F5C9] px-4 py-2 text-xs font-bold tracking-wide text-[#2C7A53]">
                WE ARE EXPERT TEAM
              </span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                Your Gateway to Smarter
                <br /> Financial Management.
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                After more than 10 years, Wealthix take pride in their reputation as a trusted name in financial software development
              </p>


              <ul className="mt-8 space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Simplify Complexity</span> – Manage multiple portfolios, SIPs, and funds effortlessly.
                </li>
                <li>
                  <span className="font-semibold">Build Trust with Clients</span> – Deliver accurate insights and secure data handling.
                </li>
                <li>
                  <span className="font-semibold">Scale with Confidence</span> – Our software grows as your business grows.
                </li>
                <li>
                  <span className="font-semibold">Save Time, Boost Returns</span> – Automate reports, tracking, and compliance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="relative bg-white py-28">
        {/* subtle edge glows like the comp */}
        {/* <div className="pointer-events-none absolute -left-40 top-24 h-64 w-64 rounded-full bg-amber-100 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" /> */}


        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-[#CFF7D7] px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-[#2C7A53] ring-1 ring-[#B6EEC5]">
                  AMAZING UI
                </span>
                <h3 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Features That Drive Success</h3>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-gray-600">
                  Wealthix equips you with powerful, intuitive tools designed to simplify investment management and maximize efficiency. From automation to real-time insights, every feature is built to fuel growth and client trust.
                </p>


                {/* Mosaic */}
                <div className="relative mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
                    <Image src={f1} alt="Mobile app" className="h-auto w-auto object-cover" />
                    <Image src={f2} alt="Growth chart" className="h-auto w-auto object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
                    <Image src={f3} alt="Team meeting" className="h-full w-auto object-cover" />
                  </div>


                  {/* Floating stat card exactly between lower tiles */}

                  <div className="absolute bottom-8 right-0  rounded-2xl shadow-2xl">
                    <Image src={f6} alt="Team meeting" className="h-80 w-auto object-cover" />
                  </div>

                </div>
              </div>


              {/* Left caption + CTA */}
              <div className="mt-12">
                <h4 className="text-[22px] font-extrabold text-gray-900">The App of what<br />makes we valuable</h4>
                <a href="#" className="mt-4 inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Contact us
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 4l6 6-6 6" /></svg>
                </a>
              </div>
            </div>


            {/* RIGHT COLUMN */}
            <div>
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_25px_80px_-20px_rgba(2,6,23,0.25)]">
                <Image src="/img/f5.png" alt="Hands with phone" width={900} height={1100} className="h-full w-full object-cover" />


                {/* Floating inflow card */}
                <div className="absolute bottom-8 right-0  rounded-2xl shadow-2xl">
                  <Image src={f6} alt="Team meeting" className="h-full w-auto object-cover" />
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-[22px] font-extrabold text-gray-900">Modern, compliant technology<br />for investment & gain</h4>
                <a href="#" className="mt-4 inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Contact us
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 4l6 6-6 6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-white overflow-visible">
        {/* copy-friendly max width like the shot */}
        <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 pt-16 md:pt-24">
          {/* top row: left title, right paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="text-[40px] leading-[1.1] md:text-[48px] font-black text-gray-900">
              Reach your goals by
              <br /> using Wealthix
            </h2>

            <p className="text-[15px] md:text-[16px] leading-7 text-gray-600 md:pt-2">
              Do you enjoy managing your own finances? Well, we're sure you'll love
              TC Tax Software! Our software makes filing taxes easy. Just enter your
              numbers and we'll do the rest. TurboTax also has an app for phones and
              tablets. Save money on your taxes with our discount!
            </p>
          </div>

          {/* spacer to match the white gap above the cards */}
          <div className="h-10 md:h-14" />
        </div>

        {/* bottom montage = ONE IMAGE, half in this section / half outside */}
        <div className="relative mx-auto w-full max-w-[1240px] px-0 md:px-6">
          <div className="relative">
            <Image
              src="/img/c4.png"
              alt="Wealthix overview and investment report cards"
              width={1240}
              height={640}
              priority
              className="w-full h-auto select-none pointer-events-none
                       drop-shadow-[0_30px_60px_rgba(16,24,40,0.12)]"
            />
            {/* soft outer glow like the screenshot */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-b from-gray-200/50 to-transparent rounded-3xl pointer-events-none" />
          </div>
        </div>

        {/* pull the image slightly “out” of the section like the shot */}
        <div className="h-8 md:h-10" />
      </section>


      <section className="relative bg-[#232B3A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 py-16 md:py-24">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
            <h2 className="text-white font-black leading-[1.1] text-[40px] md:text-[48px]">
              Read our update
              <br /> about Wealthix
            </h2>
            <p className="text-slate-200/80 text-[15px] md:text-[16px] leading-7">
              Read our latest articles and updates on our products
              and in house commitments and market.
            </p>
          </div>

          {/* Cards row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              img="/img/cn2.png"
              title="Are Coworking Spaces Right for You?"
            />
            <ArticleCard
              img="/img/cn3.png"
              title="The Benefits of Fintech Spaces for Small Businesses"
            />
            <ArticleCard
              img="/img/c3.png"
              title="How to Find the Best Mutual Fund Investment for You"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}



function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/img/logo.png" alt="Wealthix Logo" width={160} height={40} priority />
          </div>
          <nav className="hidden items-center gap-8 text-base font-semibold text-gray-600 sm:flex">
            <a className="text-green-900" href="#">Home</a>
            <a className="hover:text-gray-900" href="#">Services & Products</a>
            <a className="hover:text-gray-900" href="#">About</a>
            <a className="hover:text-gray-900" href="#">Blogs</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-[#3E57A7] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#334a91]">Contact Us!</a>
        </div>
      </div>
    </header>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-content-center rounded-md bg-gray-900 text-white">W</div>
      <span className="text-lg font-extrabold tracking-tight text-gray-900">WEALTHIX</span>
    </div>
  );
}

function ArticleCard({ img, title }) {
  return (
    <div className="relative group">
      {/* Image card */}
      <div className="relative h-[320px] md:h-[360px] rounded-[22px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.30)]">
        <Image
          src={img}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"

        />
      </div>
      <div className="absolute left-5 right-5 -bottom-[-10px]">
        <div className="rounded-2xl bg-white px-6 py-5 shadow-[0_12px_30px_rgba(16,24,40,.18)]">
          <h3 className="font-semibold text-gray-900 leading-snug text-[18px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

function HeroDoodles() {
  // two symmetric yellow swooshes below the headline + tiny tick top-right
  return (
    <svg aria-hidden className="pointer-events-none absolute left-1/2 top-[88px] -z-10 h-[120px] -translate-x-1/2 sm:top-[110px]" viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 120c120 60 200 60 320 0m340 0c-120 60-200 60-320 0" stroke="#F7C948" strokeWidth="8" strokeLinecap="round" />
      <path d="M620 60l16-10m10-6l10-6" stroke="#F7C948" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
