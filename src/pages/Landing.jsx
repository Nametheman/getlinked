import Criteria from "../components/Criteria";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Policies from "../components/Policies";
import Prizes from "../components/Prizes";
import Rules from "../components/Rules";
import Sponsors from "../components/Sponsors";
import Timeline from "../components/Timeline";
import SuspenseWrapper from "../layout/SuspenseWrapper";
import Loader from "../bits/Loader";

const Landing = () => {
  return (
    <div>
      <Hero />
      <SuspenseWrapper fallback={Loader}>
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
      </SuspenseWrapper>
    </div>
  );
};

export default Landing;
