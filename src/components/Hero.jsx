import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, download, sudeep, bwmap, worldmap } from "../assets";

const renderActionButton = ({
  href,
  download: isDownload,
  external,
  icon,
  label,
}) => {
  const sharedClassName =
    "inline-flex flex-none items-center justify-center sm:justify-start gap-1.5 px-2.5 py-1 sm:px-6 sm:py-3 border border-black/70 bg-white/20 backdrop-blur-md text-[10px] sm:text-base text-black rounded-full font-medium shadow-sm whitespace-nowrap transition-all duration-200 hover:bg-black hover:text-white hover:border-black";

  const content = (
    <>
      <span className="flex h-4 w-4 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-black/70 bg-white/40 group-hover:border-white">
        {icon}
      </span>
      <span>{label}</span>
    </>
  );

  if (isDownload) {
    return (
      <a href={href} download className={`${sharedClassName} group`}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${sharedClassName} group`}
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={`${sharedClassName} group`}>
      {content}
    </a>
  );
};

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I&apos;m{" "}
              <span
                className="text-battleGray sm:text-[90px] 
             text-[50px] font-mova
             font-extrabold uppercase"
              >
                Sudeep
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Software Engineer <br className="sm:block hidden" />
              {/* Open Source Enthusiast <br className="sm:block hidden" />
              Backend Developer */}
            </p>
            <div className="mt-6 flex w-full max-w-xl flex-row flex-nowrap gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0 sm:gap-3">
              {renderActionButton({
                href: "/public/GSK_Resume.pdf",
                download: true,
                label: "Download Resume",
                icon: (
                  <img
                    src={download}
                    alt="Download"
                    className="h-2.5 w-2.5 sm:h-4 sm:w-4 object-contain"
                  />
                ),
              })}

              {renderActionButton({
                href: "https://github.com/Sudeepkumar0",
                external: true,
                label: "GitHub",
                icon: (
                  <img
                    src={github}
                    alt="GitHub"
                    className="h-2.5 w-2.5 sm:h-4 sm:w-4 object-contain"
                  />
                ),
              })}

              {renderActionButton({
                href: "https://www.linkedin.com/in/g-sudeep-kumar-aa1bb6253/",
                external: true,
                label: "LinkedIn",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-black group-hover:fill-white"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.31V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.39-1.86 3.62 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                ),
              })}
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={sudeep}
            alt="sudeep"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
