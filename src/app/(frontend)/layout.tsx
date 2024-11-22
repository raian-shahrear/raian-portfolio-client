import FrontendFooter from "@/components/shared/frontend/footer/Footer";
import FrontendNavbar from "@/components/shared/frontend/navbar/Navbar";

const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <FrontendNavbar />
      <div className="min-h-[93.7vh] pt-[50px] bg-[#212529]">{children}</div>
      <div>
        <FrontendFooter />
      </div>
    </div>
  );
};

export default FrontendLayout;
