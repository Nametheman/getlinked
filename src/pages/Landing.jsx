import Criteria from "../components/Criteria";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Policies from "../components/Policies";
import Prizes from "../components/Prizes";
import Rules from "../components/Rules";
import Sponsors from "../components/Sponsors";
import Timeline from "../components/Timeline";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <section id="overview">
        <Criteria />
      </section>
      <section id="faqs">
        <Faq />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <Prizes />
      <Sponsors />
      <Policies />
    </div>
  );
};

export default Landing;
