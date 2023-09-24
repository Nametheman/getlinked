import styled from "styled-components";
import EachTimeline from "./EachTimeline";
import Star from "./Star";
import star_pu from "../assets/images/star_pu.svg";

const Timeline = () => {
  const faqs = [
    {
      title: "Hackathon Announcement",
      text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      id: "faq1",
      direction: "left",
    },
    {
      title: "Teams Registration begins",
      text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      id: "faq2",
      direction: "right",
    },
    {
      title: "Teams Registration ends",
      text: "Interested Participants are no longer Allowed to register",
      id: "faq3",
      direction: "left",
    },
    {
      title: "Announcement of the accepted teams and ideas",
      text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      id: "faq4",
      direction: "right",
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      id: "faq5",
      direction: "left",
    },
    {
      title: "Demo Day",
      text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      id: "faq6",
      direction: "right",
    },
  ];
  return (
    <Wrapper>
      <h3>Timeline</h3>
      <p>
        Here is the breakdown of the time we anticipate <br /> using for the
        upcoming event.
      </p>
      <div className="timelineContainer">
        {faqs.map((faq, idx) => {
          const { title, text, direction, id } = faq;
          return (
            <div
              key={id}
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              // data-aos-duration="500"
              data-aos-delay={idx + 1 * 500}
            >
              <EachTimeline
                id={id}
                direction={direction}
                text={text}
                title={title}
                index={idx}
              />
            </div>
          );
        })}
      </div>
      <Star right="23%" bottom="47%" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      <Star bottom="8%" left="10%" opacity="0.4" />
    </Wrapper>
  );
};

export default Timeline;
const Wrapper = styled.section`
  border-bottom: 1px solid #ffffff2e;
  padding: 7rem 2rem;
  position: relative;
  .star_pu {
    position: absolute;
    top: 16%;
    left: 24%;
  }
  h3 {
    color: #fff;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  .timelineContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 450px) {
    /* display: none; */
  }
`;
