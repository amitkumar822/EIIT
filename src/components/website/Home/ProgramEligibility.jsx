import React from "react";

export default function ProgramEligibility() {
  return (
    <section className="bg-white px-6 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative SVG BG behind the image */}
      <div className="absolute right-0 top-10 lg:top-0 lg:right-20 opacity-10 pointer-events-none z-0">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <span className="text-red-600 font-bold">Program</span>{" "}
            <span className="text-gray-900">Eligibility</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            A candidate shall have passed the qualifying examination of BCA/ B.Sc.
            (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) /
            B.Tech. (IT) or passed any graduation degree (e.g.: B.E/ B.Tech / B.Sc. /
            B.Com. / B.A/ B.Voc) with Mathematics, Business Mathematics,
            Programming or Statistics at 10+2 level or Graduation level.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-md shadow hover:opacity-90 transition">
            Apply Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-[260px] h-[340px] p-2 border-2 border-dashed border-red-500 rounded-b-[80%] rounded-t-[10px] bg-gradient-to-br from-red-600 to-orange-500 z-10">
          <img
            src={
              "https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/mca-lp/program_eligibility.png"
            }
            alt="Student"
            className="w-full h-full object-cover rounded-b-[80%] rounded-t-[10px]"
          />
        </div>
      </div>
    </section>
  );
}
