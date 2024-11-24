"use client";
import {
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaStripeS,
  FaTools,
} from "react-icons/fa";
import { IoLogoFigma, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  RiNextjsFill,
  RiNpmjsFill,
  RiSettingsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiAxios,
  SiExpress,
  SiFilezilla,
  SiGmail,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiReactrouter,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { BiLogoNetlify } from "react-icons/bi";
import { VscVscodeInsiders } from "react-icons/vsc";

const HomeTechnicalSkillsSection = () => {
  return (
    <div>
      <p className="text-base flex items-center gap-1 text-gray-100 mb-2">
        <span>
          <RiSettingsLine />
        </span>
        <span className="mt-1">Technical Skills</span>
      </p>
      <ul className="list-disc ps-[18px] text-sm text-gray-300 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <li>
          <p className="mb-3 flex items-center gap-1">
            <span>Expertise</span>
            <span>🥇</span>
          </p>
          <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-orange-600 text-2xl">
                <FaHtml5 />
              </span>
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sky-600 text-2xl">
                <FaCss3Alt />
              </span>
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-violet-600 text-2xl">
                <FaBootstrap />
              </span>
              <span>Bootstrap</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-cyan-500 text-2xl">
                <RiTailwindCssFill />
              </span>
              <span>TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-2xl">
                <SiShadcnui />
              </span>
              <span>Shadcn/ui</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-yellow-400 text-2xl">
                <IoLogoJavascript />
              </span>
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-cyan-500 text-2xl">
                <FaReact />
              </span>
              <span>React JS</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-500 text-2xl">
                <SiReactrouter />
              </span>
              <span>React-Router</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-100 text-2xl">
                <RiNextjsFill />
              </span>
              <span>Next JS</span>
            </div>
          </div>
        </li>
        <li>
          <p className="mb-3 flex items-center gap-1">
            <span>Comfortable</span>
            <span>🥈</span>
          </p>
          <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-lime-500 text-2xl">
                <FaNodeJs />
              </span>
              <span>Node Js</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-2xl">
                <SiExpress />
              </span>
              <span>Express Js</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-100 text-2xl">
                <HiArrowsUpDown />
              </span>
              <span>Crud operation</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-green-500 text-2xl">
                <SiMongodb />
              </span>
              <span>MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-800 text-2xl">
                <SiMongoose />
              </span>
              <span>Mongoose</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-600 text-2xl">
                <SiJsonwebtokens />
              </span>
              <span>JWT</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-violet-500 text-2xl">
                <SiRedux />
              </span>
              <span>Redux Toolkit</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-blue-600 text-2xl">
                <SiTypescript />
              </span>
              <span>Typescript</span>
            </div>
          </div>
        </li>
        <li>
          <p className="mb-3 flex items-center gap-1">
            <span>Familiar</span>
            <span>🥉</span>
          </p>
          <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-violet-500 text-2xl">
                <SiAxios />
              </span>
              <span>Axios</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sky-500 text-2xl">
                <FaStripeS />
              </span>
              <span>Stripe</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-orange-400 text-2xl">
                <MdOutlinePayment />
              </span>
              <span>AAmarPay</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-cyan-500 text-2xl">
                <SiGmail />
              </span>
              <span>Nodemailer</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-pink-500 text-2xl">
                <FaSass />
              </span>
              <span>Sass/Scss</span>
            </div>
          </div>
        </li>
        <li>
          <p className="mb-3 flex items-center gap-1">
            <span>Tools</span>
            <span>
              <FaTools />
            </span>
          </p>
          <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-blue-600 text-2xl">
              <VscVscodeInsiders />
              </span>
              <span>VS Code</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-blue-300 text-2xl">
                <FaChrome />
              </span>
              <span>Chrome Devtools</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-cyan-400 text-2xl">
                <BiLogoNetlify />
              </span>
              <span>Netlify</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-2xl">
                <IoLogoVercel />
              </span>
              <span>Vercel</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-orange-600 text-2xl">
                <FaGitAlt />
              </span>
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-600 text-2xl">
                <RiNpmjsFill />
              </span>
              <span>npm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-400 text-2xl">
                <IoLogoFigma />
              </span>
              <span>Figma</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-blue-600 text-2xl">
                <SiAdobephotoshop />
              </span>
              <span>Photoshop</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-red-600 text-2xl">
                <SiFilezilla />
              </span>
              <span>FileZilla</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeTechnicalSkillsSection;
