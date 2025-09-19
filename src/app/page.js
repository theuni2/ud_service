import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/hero";
import WhyFamiliesChooseUs from "./component/whyus";
import ProgramsAndPricing from "./component/prondprice";
import TimelineSection from "./component/timeline";
import ExpertsSection from "./component/councellors";
import ResultsTestimonials from './component/testimonial';
import FAQSection from "./component/fre";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Hero/>
      <WhyFamiliesChooseUs/>
      <ProgramsAndPricing/>
      <TimelineSection/>
      <ExpertsSection/>
      <ResultsTestimonials/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
