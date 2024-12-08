import Link from "next/link";
import { FaUniversity } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";

const HomeAboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10">
      <div>
        <article className="text-gray-300 text-sm">
          I am a passionate Web Developer who is professionally capable of
          working with a team or solo in MERN stack, vanilla Javascript, and
          Typescript based on projects. I have more than 1 and a half years of
          experience in Frontend and Backend. I use to apply Bootstrap or
          Tailwind & React.js or Next.js to design Frontend and Express.js &
          Mongoose to develop Backend to provide Full Stack development service.
          I look forward to knowing more staff and becoming an expert on Full
          stack.
        </article>
        <div className="mt-3">
          <p className="text-base flex items-center gap-1 text-gray-100 mb-2">
            <span>
              <FaUniversity />
            </span>
            <span className="mt-1">Education</span>
          </p>
          <ul className="list-disc ps-[18px] text-sm text-gray-300 flex flex-col gap-3">
            <li>
              <p className="mb-1">
                BSc in Electrical and Electronics Engineering
              </p>
              <div className="flex flex-col gap-1">
                <span>- American International University-Bangladesh</span>
                <span>- CGPA : 3.85 out of 4</span>
                <span>- Passing year : Jan 2020</span>
                <span>- Programming Course : C, C++ and Python</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <p className="text-base flex items-center gap-1 text-gray-100 mb-2">
            <span>
              <IoNewspaperOutline />
            </span>
            <span className="mt-1">Publications</span>
          </p>
          <ul className="list-disc ps-[18px] text-sm text-gray-300 flex flex-col gap-3">
            <li>
              R. Shahrear, M. A. Rahman, A. Islam, C. Dey, and M. S. R. Zishan,
              “
              <Link
                href="https://ajse.aiub.edu/index.php/ajse/article/view/97"
                target="_blank"
                className="underline transition-all duration-300 hover:no-underline"
              >
                An Automatic Traffic Rules Violation Detection and Number Plate
                Recognition System for Bangladesh
              </Link>
              ”, AJSE, vol. 19, no. 2, pp. 87 - 98, Sep. 2020.
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <p className="text-base flex items-center gap-1 text-gray-100 mb-2">
            <span>
              <GrLanguage />
            </span>
            <span className="mt-1">Language</span>
          </p>
          <ul className="list-disc ps-[18px] text-sm text-gray-300 flex flex-col gap-1">
            <li>Bengali : Native</li>
            <li>English : Professional</li>
            <li>Hindi : Elementary</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
