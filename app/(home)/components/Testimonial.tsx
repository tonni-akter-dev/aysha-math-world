"use client";
import { MessageCircleMore } from "lucide-react";
import profile from "../../../public/profile.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Testimonial = () => {
  const customerCards = [
    {
      name: "James Harden",
      position: "CEO at Bright Solutions",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
    {
      name: "Sarah Johnson",
      position: "Founder at CreativeHub",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
    {
      name: "Sarah Harden",
      position: "CEO at Bright Solutions",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
    {
      name: "Michael Chen",
      position: "Property Manager",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
    {
      name: "Emily Rodriguez",
      position: "Landlord",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
    {
      name: "David Thompson",
      position: "Tenant",
      testimonial:
        "Our remote team stays connected and productive with real-time updates and task tracking. It's the best project management tool we've used.",
    },
  ];

  const duplicatedCards = [...customerCards, ...customerCards];

  return (
    <div className="mt-23.5 px-4 lg:px-0 overflow-hidden">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}>
        <h2 className="text-[48px] font-bold text-[#292929] dark:text-white mb-6">
          Join Thousands of <br /> Happy Students
        </h2>
       <p className="text-neutral-500 dark:text-neutral-50 font-medium text-lg">
  Trusted by learners and educators worldwide <br /> to deliver better learning experiences.
</p>

      </motion.div>
      <div className="relative">
        <Marquee
          gradient={false}
          speed={50}
          className="customer-slider pb-7 pt-15"
        >
          {duplicatedCards.map((customer, index) => (
            <div
              key={index}
              className="dark:bg-linear-to-b! dark:from-[#0B1820]! dark:via-[#000000]! dark:to-[#374147] dark:via-50% 
                            overflow-hidden mr-2.75 lg:mr-5.5 rounded-[6px] lg:rounded-2xl p-2.5 lg:p-4.5 mx-2.75 w-51.5 lg:w-103 shrink-0"
              style={{
                background:
                  "linear-gradient(180.12deg, #EFEBFF -15.01%, #FFFFFF 99.89%)",
                boxShadow: "0px 8px 28px 0px #14142B1A",
              }}
            >
              <button
                className="text-[#292929] text-[8px] lg:text-base dark:text-white font-medium mb-9.25 p-1.25 lg:p-3
                             dark:bg-black bg-white  rounded-lg lg:rounded-xl flex gap-1  lg:gap-2 items-center"
                style={{ boxShadow: "0px 1.86px 11.17px 0px #14142B14" }}
              >
                <MessageCircleMore className="lg:size-5 size-2.5" /> Their words
              </button>
              <p className="text-[8px] lg:text-base text-[#545454] font-medium mb-9.5 dark:text-[#FAFAFA]">
                {customer.testimonial}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  className="lg:size-12 size-4.5"
                  src={profile}
                  alt={customer.name}
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-[8px] lg:text-base dark:text-white text-black  font-medium">
                    {customer.name}
                  </h3>
                  <p className="text-[#545454] text-[6px] lg:text-sm font-medium dark:text-[#FAFAFA]">
                    {customer.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="relative">
        <Marquee
          gradient={false}
          speed={50}
          direction="right"
          className="customer-slider  pb-23"
        >
          {duplicatedCards.map((customer, index) => (
            <div
              key={index}
              className="dark:bg-linear-to-b! dark:from-[#0B1820]! dark:via-[#000000]! dark:to-[#374147] dark:via-50% 
                            overflow-hidden mr-2.75 lg:mr-5.5 rounded-[6px] lg:rounded-2xl p-2.5 lg:p-4.5 mx-2.75 w-51.5 lg:w-103 shrink-0"
              style={{
                background:
                  "linear-gradient(180.12deg, #EFEBFF -15.01%, #FFFFFF 99.89%)",
                boxShadow: "0px 8px 28px 0px #14142B1A",
              }}
            >
              <button
                className="text-[#292929] text-[8px] lg:text-base dark:text-white font-medium mb-9.25 p-1.25 lg:p-3
                             dark:bg-black bg-white  rounded-lg lg:rounded-xl flex gap-1  lg:gap-2 items-center"
                style={{ boxShadow: "0px 1.86px 11.17px 0px #14142B14" }}
              >
                <MessageCircleMore className="lg:size-5 size-2.5" /> Their words
              </button>
              <p className="text-[8px] lg:text-base text-[#545454] font-medium mb-9.5 dark:text-[#FAFAFA]">
                {customer.testimonial}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  className="lg:size-12 size-4.5"
                  src={profile}
                  alt={customer.name}
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-[8px] lg:text-base dark:text-white text-black  font-medium">
                    {customer.name}
                  </h3>
                  <p className="text-[#545454] text-[6px] lg:text-sm font-medium dark:text-[#FAFAFA]">
                    {customer.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
