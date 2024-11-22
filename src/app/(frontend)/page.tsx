import HomeAboutSection from "@/components/modules/home/HomeAboutSection";
import HomeBannerSection from "@/components/modules/home/HomeBannerSection";
import HomeCertificateSection from "@/components/modules/home/HomeCertificateSection";
import HomeExperienceSection from "@/components/modules/home/HomeExperienceSection";
import HomeProjectsSection from "@/components/modules/home/HomeProjectsSection";
import HomeSkillsSection from "@/components/modules/home/homeSkills/HomeSkillsSection";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <HomeBannerSection />
      <div className="container mx-auto px-2">
        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-start text-white border-b border-gray-500 pb-2 mb-6">
            About Me
          </h2>
          <HomeAboutSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-end text-white border-b border-gray-500 pb-2 mb-6">
            Certificate & Award
          </h2>
          <HomeCertificateSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-start text-white border-b border-gray-500 pb-2 mb-6">
            Experiences
          </h2>
          <HomeExperienceSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-end text-white border-b border-gray-500 pb-2 mb-6">
            Skills
          </h2>
          <HomeSkillsSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-start text-white border-b border-gray-500 pb-2 mb-6">
            Top Projects
          </h2>
          <HomeProjectsSection />
          <div className="mt-6 flex justify-center">
            <Link href="/projects" className="bg-gray-100 p-2 rounded-md">View All</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
