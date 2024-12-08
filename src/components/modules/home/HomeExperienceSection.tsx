"use client";
import Link from "next/link";
import { PiBagSimpleFill } from "react-icons/pi";

const HomeExperienceSection = () => {
  return (
    <ul className="text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-3">
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <PiBagSimpleFill />
          </span>
          <span className="font-semibold">Frontend Developer (Full-time)</span>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>
            - Company :{" "}
            <Link
              href="https://www.nextgenitltd.com"
              target="_blank"
              className="underline transition-all duration-300 hover:no-underline"
            >
              Nextgen Innovation LTD.
            </Link>{" "}
            at Dhaka.
          </span>
          <span>- Duration : Jan, 2023 - Aug, 2024 (1y 7m)</span>
          <span>- Location : Hybrid</span>
          <div>
            <span>- Responsibility :</span>
            <ul className="list-disc ps-[28px] text-sm text-gray-300 flex flex-col gap-1">
              <li>
                To design frontend using React.js and raw HTML, CSS &
                JavaScript.
              </li>
              <li>To design government projects including dashboards.</li>
              <li>
                To collaborate with the backend team when needed to adjust the
                design.
              </li>
              <li>
                To work with the backend team while the technologies were
                Node.js and MongoDB.
              </li>
              <li>
                To collaborate remotely with the offshore team (ByteShake - UK)
                and work on their existing or new projects like Tenderbase and
                Ultralysis.
              </li>
              <li>To work on WordPress theme for sometimes.</li>
            </ul>
          </div>
          <div>
            <span>- Worked projects :</span>
            <ul className="list-disc ps-[28px] text-sm text-gray-300 flex flex-col gap-1">
              <li>
                <Link
                  href="https://www.guardianlife.com.bd"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Guardian Life Insurance
                </Link>{" "}
                (Full stack using ReactJS, React Bootstrap, NodeJS, ExpressJS
                and Mongoose).
              </li>
              <li>
                <Link
                  href="https://www.ecertificate.fisheries.gov.bd"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Department of Fisheries (DoF)
                </Link>{" "}
                (Frontend + Dashboard using HTML5, vanilla CSS3, Bootstrap5,
                vanilla JS, jQuery).
              </li>
              <li>
                <Link
                  href="https://www.elab.fisheries.gov.bd"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  DoF Lab Automation
                </Link>{" "}
                (Frontend + Dashboard using HTML5, vanilla CSS3, Bootstrap5,
                vanilla JS, jQuery).
              </li>
              <li>
                <Link
                  href="https://enorsia.com"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Enorsia (eCommerce)
                </Link>{" "}
                (Frontend using HTML5, vanilla CSS3, Bootstrap5, vanilla JS,
                jQuery).
              </li>
              <li>
                <Link
                  href="https://tenderbase.co.uk"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Tenderbase Ltd.
                </Link>{" "}
                (Frontend and dashboard to the existing as well as new design
                from a sketch using figma).
              </li>
              <li>
                <Link
                  href="https://ultralysis.com"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Ultralysis
                </Link>{" "}
                (Existing dashboard).
              </li>
              <li>
                <Link
                  href="https://themepaste.com"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Themepaste Ltd.
                </Link>{" "}
                (Modified wordPress theme).
              </li>
              <li>
                <Link
                  href="http://www.acctx.co.uk/beta1"
                  target="_blank"
                  className="underline transition-all duration-300 hover:no-underline"
                >
                  Accountax
                </Link>{" "}
                (Frontend from a sketch using XD).
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <p className="mb-1 flex gap-1">
          <span className="mt-1">
            <PiBagSimpleFill />
          </span>
          <span className="font-semibold">
            Sales and Service Executive (Full-time)
          </span>
        </p>
        <div className="flex flex-col gap-1 ps-[20px]">
          <span>
            - Company :{" "}
            <Link
              href="https://www.anifco.com"
              target="_blank"
              className="underline transition-all duration-300 hover:no-underline"
            >
              Anifco Healthcare LTD.
            </Link>{" "}
            at Dhaka.
          </span>
          <span>- Duration : Apr, 2021 - Aug, 2021 (5m)</span>
          <span>- Location : On-site</span>
          <div>
            <span>- Responsibility :</span>
            <ul className="list-disc ps-[28px] text-sm text-gray-300 flex flex-col gap-1">
              <li>
                To collaborate with tender as well as sales work inside and
                outside the office.
              </li>
              <li>
                To install or service medical equipment and Gas pipelines as
                well as perform a service visit for regular checks.
              </li>
              <li>
                To design Medical Gas Pipe Line, Nurse Call and Pneumatic Tube
                System for a hospital by using AutoCAD 2D.
              </li>
              <li>
                To make price offers, and equipment requisition, and contribute
                to other office works.
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HomeExperienceSection;
