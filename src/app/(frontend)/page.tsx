import HomeAboutSection from "@/components/modules/home/HomeAboutSection";
import HomeBannerSection from "@/components/modules/home/HomeBannerSection";
import HomeBlogsSection from "@/components/modules/home/HomeBlogsSection";
import HomeCertificateSection from "@/components/modules/home/HomeCertificateSection";
import HomeContactSection from "@/components/modules/home/HomeContactSection";
import HomeExperienceSection from "@/components/modules/home/HomeExperienceSection";
import HomeProjectsSection from "@/components/modules/home/HomeProjectsSection";
import HomeSkillsSection from "@/components/modules/home/homeSkills/HomeSkillsSection";

const HomePage = () => {
  return (
    <div>
      <HomeBannerSection />
      <div className="container mx-auto px-2">
        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            About Me
          </h2>
          <HomeAboutSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Certificate & Award
          </h2>
          <HomeCertificateSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Experiences
          </h2>
          <HomeExperienceSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Skills
          </h2>
          <HomeSkillsSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Top Projects
          </h2>
          <HomeProjectsSection />
        </section>

        <section className="mt-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Blogs
          </h2>
          <HomeBlogsSection />
        </section>

        <section className="mt-10 pb-10">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            Contact Me
          </h2>
          <HomeContactSection />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
