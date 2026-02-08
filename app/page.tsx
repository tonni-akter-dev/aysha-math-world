import About from "./(home)/components/About";
import Banner from "./(home)/components/Banner";
import FaqSection from "./(home)/components/FaqSection";
import Testimonial from "./(home)/components/Testimonial";
import WhyChooseUs from "./(home)/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <WhyChooseUs />
      <Testimonial />
      <FaqSection/>
    </>
  );
}
