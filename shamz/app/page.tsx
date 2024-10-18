"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import TypingEffect from "@/components/typingEffect";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Home() {
  const defaultTypingItems = [
    "In-Demand Skills",
    "Marketable skillset",
    "Transferable Skills",
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="flex flex-col justify-center pt-28 gap-10">
      <BackgroundLines className="flex items-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Build an Organization of High Repute, <br />
          <div className="md:flex">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-500 to-blue-300">
              Immerse yourself in&nbsp;
            </span>
            <span>
              <TypingEffect
                dataPeriod={2000}
                dataType={defaultTypingItems}
                className="w-full"
              />
            </span>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900">
            for Self Substenance
          </span>
        </h2>
      </BackgroundLines>

      <div className="w-full h-full mt-10">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Get to know us, <br />{" "}
          <span className="text-sm self-end pl-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900">
            ... your trusted ally.
          </span>
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
