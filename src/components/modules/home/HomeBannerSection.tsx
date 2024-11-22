"use client";
import Image from "next/image";
import Link from "next/link";
import raianBanner from "@/assets/home/raian-banner.png";
import Typewriter from "typewriter-effect";

const HomeBannerSection = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-2">
        <div className="flex flex-col-reverse lg:flex-row gap-y-10 gap-x-20 xl:gap-x-60 items-center">
          <div className="flex-1 text-center lg:text-start">
            <p className="text-lg text-gray-400 mb-1">Hello!</p>
            <h1 className="text-3xl xl:text-4xl text-white mb-3">
              This is <span className="font-semibold">Raian Shahrear</span>
            </h1>
            <div className="text-lg lg:text-xl text-white mb-3">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      'Have Expertise in <span style="color: #3b82f6;">Frontend Development</span>'
                    )
                    .pauseFor(300)
                    .deleteChars(20)
                    .typeString('<span style="color: #3b82f6;">React JS</span>')
                    .pauseFor(300)
                    .deleteChars(8)
                    .typeString(
                      '<span style="color: #3b82f6;">MERN Stack</span>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            <p className="text-base text-gray-400 mb-16">
              I am a Frontend developer from Bangladesh, have learned MERN Stack
              development and completed a few projects on this tech, now
              exploring more about MERN and web servers & databases. I can make
              a website in a few days, but it depends on the size and
              functionality of the project.
            </p>

            <Link
              href="https://drive.google.com/file/d/1f_Z-jRQv4jBcw-6UTjoSsK7bdXvmEf-y/view"
              target="_blank"
              className="bg-blue-500 text-white md:text-sm px-3 py-2 rounded-md"
            >
              Download Resume
            </Link>
          </div>
          <div className="w-full lg:w-[400px]">
            <Image
              src={raianBanner}
              width={400}
              height={400}
              alt="raian"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerSection;
