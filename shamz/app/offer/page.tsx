"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const Offer = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-28">
      <h1 className="text-3xl">Our Services</h1>

      <p className="pt-4 px-4 text-center text-neutral-600">
        Explore our diverse offerings and experience unparalleled excellence
        from tailored solutions to personalized consultations.
      </p>

      <div className="grid lg:grid-cols-2 gap-20 mt-10 items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900"
            >
              Your trusted ally in
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Programs/Projects Mangement
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729260362/shamz/Screenshot_2024-10-18_145633_yefgx4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Partner with us for seamless project execution.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-500 to-[#FF6347]"
            >
              Shamzbridge consult&apos;s in
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Capacity Building
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729260349/shamz/Screenshot_2024-10-18_145229_g2tpoq.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Nurture talent and skills with our capacity building services.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900"
            >
              Your trusted ally in
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Consultancy Services
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729266401/shamz/Screenshot_2024-10-18_164404_jhh3fx.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Elevate your strategy with our consultancy services.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900"
            >
              Consult us for
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Event Host/Management
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729265971/shamz/Screenshot_2024-10-18_163754_x8no97.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Partner with us for seamless project execution.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900"
            >
              We indulge in
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Community development
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729266089/shamz/Screenshot_2024-10-18_164055_vg648b.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Championing development where it matters most.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FF6347] via-blue-500 to-blue-900"
            >
              We champion in
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Content development
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1729260362/shamz/Screenshot_2024-10-18_145633_yefgx4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="mt-5">
              Unleash your creativity and transform ideas into impactful
              stories.
            </CardItem>

            <div className="flex justify-end mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.shamzbridgeconsult.org/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Offer;
