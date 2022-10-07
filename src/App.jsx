import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Purchase from "./components/Purchase";
import YougGet from "./components/YougGet";
import Works from "./components/Works";
import EduSmart from "./components/EduSmart";
import "swiper/css/bundle";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-sm mx-auto">
      <Navbar />
      <Banner />
      <Offer />
      <Purchase />
      <YougGet />
      <Works />
      <EduSmart />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
