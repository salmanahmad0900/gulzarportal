"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-gray-700">
          <p className="text-lg md:text-xl font-bold leading-relaxed text-center">
            Sheikh Gulzar Ahmad is a respected political and business figure from Hafizabad,
            known for his leadership, public service, and contributions to the city’s development.
            He is an MPA ticket holder of Pakistan Muslim League (Nawaz) and has previously served
            as the Chairman of Hafizabad. In addition, he holds the position of President of the
            Hafizabad Chamber of Commerce, where he plays an active role in promoting local trade,
            supporting the business community, and encouraging economic growth. His commitment to
            social welfare and community betterment has earned him wide recognition and respect
            in the region.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/sheikh-gulzar-ahmad.jpg" // Replace with your image path
            alt="Sheikh Gulzar Ahmad"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
