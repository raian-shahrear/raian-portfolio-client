"use client";
import { GiSkills } from "react-icons/gi";

const HomeInterpersonalSkillsSection = () => {
  return (
    <div className="mb-6">
      <p className="text-base flex items-center gap-1 text-gray-100 mb-2">
        <span>
          <GiSkills />
        </span>
        <span className="mt-1">Interpersonal Skills</span>
      </p>
      <ul className="list-disc ps-[18px] text-sm text-gray-300 grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10">
        <li>
          <p className="mb-1">Communication and Teamwork</p>
          <div className="flex flex-col gap-1">
            <span>
              - I have proved my communication and teamwork skill during
              laboratory work, club activity and internship.
            </span>
            <span>
              - Where I go, try to communicate with everyone related and most of
              the time, I come forward first.
            </span>
            <span>
              - I enjoy to work as a group and try to collaborate with all.
            </span>
          </div>
        </li>
        <li>
          <p className="mb-1">Critical Thinking</p>
          <div className="flex flex-col gap-1">
            <span>
              - I always like to think differently and looking for multiple
              solution. Sometimes, it would be gone out of box.
            </span>
            <span>
              - I also respect tradition and not all time follow a trend when I
              know, what is good and effective.
            </span>
          </div>
        </li>
        <li>
          <p className="mb-1">Negotiation</p>
          <div className="flex flex-col gap-1">
            <span>
              - Listening is an important key of Negotiation. I have experienced
              as a middle man most of the time, among my family and friends.
            </span>
            <span>
              - I always put myself on their shoes and try to understand them.
              Then I help them to come to a peaceful agreement.
            </span>
          </div>
        </li>
        <li>
          <p className="mb-1">Leadership & Influencing</p>
          <div className="flex flex-col gap-1">
            <span>
              - I usually acted as a leader in the most of my laboratory groups.
              My experience of work was leaded me to this.
            </span>
            <span>
              - I always believe in work, it can be alone or with a team.
              However, if the time comes to take responsibility and encourage
              team mate, I come forward as needed.
            </span>
            <span>
              - I strongly follow the ethics and always try to understand my
              mates as well as lead them to achieve the goal.
            </span>
          </div>
        </li>
        <li>
          <p className="mb-1">Adaptability under pressure</p>
          <div className="flex flex-col gap-1">
            <span>
              - I love to learn a new thing and have no problem to work under
              presser.
            </span>
            <span>
              - I experienced this when I started my capstone project. All of my
              team member, including me had no idea about python, machine
              learning and writing thesis book. My team and I decided to share
              the work according to our previous skill and as part of mine, I
              started to learn machine learning and python then. It was more
              challenging but interesting to me and finally, our success was
              come true.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeInterpersonalSkillsSection;
