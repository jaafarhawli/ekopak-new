import React from "react";
import Container from "../../components/Container";
import Headline from "../../components/Headline";
import Button from "../../components/Button";
import images from "../../assets";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  return (
    <Container className="flex lg:flex-row flex-col" id="team">
      <div className="lg:w-1/2 w-full flex flex-col gap-10">
        <Headline className="text-white">Our Team</Headline>
        <p className="lg:text-[22px] text-[18px] text-justify text-white">
          EkoPak Sal is managed by a team of experienced and dedicated
          professionals who are committed to ensuring the success of the
          company. They bring a wealth of knowledge, experience, and expertise
          to their roles and are dedicated to delivering high-quality work that
          meets the needs of the company and its clients
        </p>
        <Button
          className="text-white border-white hover:text-primary-100 hover:bg-white duration-200"
          onClick={() => {
            navigate("/team");
          }}
        >
          Read More
        </Button>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <img src={images.team} alt="" className="lg:w-full w-full" />
      </div>
    </Container>
  );
};

export default Team;
