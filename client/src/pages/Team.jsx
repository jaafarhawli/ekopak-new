import React, {useEffect} from "react";
import TitleContainer from "../components/TitleContainer";
import TeamCard from "../components/TeamCard";

const Team = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-secondary">
      <TitleContainer firstWord="Our" lastWord="Team" team={true} />
      <div className="w-full xl:px-28 px-4 py-16 bg-secondary lg:block flex flex-col-reverse">
        <div className="lg:w-[50%] lg:min-w-[560px] flex gap-4 lg:ml-8 lg:mb-4 lg:float-right sm:flex-row flex-col">
          <div className="flex flex-col gap-4 w-full">
            <TeamCard
              picture="KhalilHajjar"
              name="Khalil Hajjar"
              description="Consultant Manager"
            />
            <TeamCard
              picture="JosianeMezher"
              name="Josiane Mezher"
              description="Business Development Manager"
            />
          </div>
          <div className="flex flex-col gap-4 w-full sm:mt-28">
            <TeamCard
              picture="CharbelChahine"
              name="Charbel Chahine"
              description="General Manager"
            />
            <TeamCard
              picture="CesarIbrahim"
              name="Cesar Ibrahim"
              description="Project Manager"
            />
          </div>
        </div>

          <p className="text-[22px] text-justify mb-6 lg:mb-0">
            Our Company is managed by a team of experienced professionals who
            are dedicated to ensuring the success of the company. Rana Lateif
            serves as the Deputy CEO, bringing a wealth of knowledge and
            experience to the table. As the second in command, Rana plays a
            crucial role in the overall strategic direction of the company and
            is responsible for ensuring that the company operates smoothly and
            efficiently.<br /><br /> 
            Charbel Chahine serves as the General Manager and is responsible for
            overseeing the day-to-day operations of the company. He has a strong
            track record of successfully managing complex projects and ensuring
            that the company's goals are met.<br /><br /> 
            Josiane Mezher is the Business Development Manager, responsible for
            identifying and pursuing new business opportunities that will help
            the company grow and expand. She brings a wealth of experience in
            the industry and has a proven track record of success in developing
            new markets and building strong relationships with clients.<br /><br /> 
            Cesar Ibrahim and Nader Harakeh are the Project Managers,
            responsible for overseeing specific projects and ensuring that they
            are completed on time and within budget. Both bring a wealth of
            experience and knowledge to their roles and are committed to
            delivering high-quality work that meets the needs of the company and
            its clients.<br /><br /> 
            In conclusion, our Company is managed by a team of experienced and
            dedicated professionals who are committed to ensuring the success of
            the company. They bring a wealth of knowledge, experience, and
            expertise to their roles and are dedicated to delivering
            high-quality work that meets the needs of the company and its
            clients.
          </p>
      </div>
    </div>
  );
};

export default Team;
