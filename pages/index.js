import HeroSection from "../components/HomeView/HeroSection";
import IconsComp from "../components/HomeView/IconsComp";
import Meta from "../components/Layout/Meta";
const Home = () => {
  return (
    <div className="h-screen lg:pl-40 lg:pr-16">
      <Meta title="Mansi K. | Home" desc="Mani K UI/UX Portfolio" />
      <HeroSection />
      <IconsComp />
    </div>
  );
};

export default Home;
