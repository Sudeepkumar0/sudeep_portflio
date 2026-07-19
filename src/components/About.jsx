import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const EducationCard = ({ degree, institution, year }) => (
  <div className="bg-jetLight rounded-[20px] py-5 px-8 shadow-card">
    <h3 className="text-taupe text-[18px] font-bold">{degree}</h3>
    <p className="text-eerieBlack">{institution}</p>
    <p className="text-sm text-gray-500">{year}</p>
  </div>
);

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        I am an MCA graduate with a strong passion for software engineering and
        open source. Skilled in backend development and database integration, I
        enjoy building scalable applications and contributing to collaborative
        projects. My journey has been shaped by curiosity, problem‑solving, and
        a drive to keep learning and improving.
      </motion.p>
      {/* 
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      {/* <div className="mt-20 flex flex-wrap gap-10">
        <EducationCard
          degree="MCA – Master of Computer Applications"
          institution="XYZ University"
          year="2023"
        />
        <EducationCard
          degree="BSc in Computer Science"
          institution="ABC College"
          year="2020"
        />
      </div> */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          Education
        </h2>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start md:gap-16">
          <div className="flex flex-row md:flex-col items-start md:items-center relative">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-black z-10" />
              <div className="md:hidden w-[2px] h-16 bg-black mt-1" />
            </div>
            <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
              <h3 className="font-semibold text-black">MCA - NMIT Bangalore</h3>
              <p className="text-sm text-gray-700">2024 - 2026</p>
            </div>
            <div className="hidden md:block absolute top-2 left-full w-24 h-[2px] bg-black" />
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-center relative mt-10 md:mt-0">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-black z-10" />
              <div className="md:hidden w-[2px] h-16 bg-black mt-1" />
            </div>
            <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
              <h3 className="font-semibold text-black">
                BVoc - SDM College Ujire
              </h3>
              <p className="text-sm text-gray-700">2021 - 2024</p>
            </div>
            <div className="hidden md:block absolute top-2 left-full w-24 h-[2px] bg-black" />
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-center relative mt-10 md:mt-0">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-black z-10" />
              <div className="md:hidden w-[2px] h-16 bg-black mt-1" />
            </div>
            <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
              <h3 className="font-semibold text-black">
                PUC - SDM PU College Ujire
              </h3>
              <p className="text-sm text-gray-700">2019 - 2021</p>
            </div>
            <div className="hidden md:block absolute top-2 left-full w-24 h-[2px] bg-black" />
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-center relative mt-10 md:mt-0">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-black z-10" />
              <div className="md:hidden w-[2px] h-16 bg-black mt-1" />
            </div>
            <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
              <h3 className="font-semibold text-black">SSLC SDMEMS Ujire</h3>
              <p className="text-sm text-gray-700">2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
