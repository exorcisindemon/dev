import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function Projects() {
  return (
    <section
      className={`${style.projects} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col w-full h-full justify-normal lg:justify-between gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-start w-full text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
            Latest Frontend Projects
          </p>
          <p className="text-zinc-400 font-semibold text-start lg:text-start w-full text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Unveiling the Most Recent Frontend Creations
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <List
            title={"RESERVA"}
            category={"Next.js Ongoing Project"}
            description={
              "In the ever-evolving world of scientific research and experimentation, maintaining precise control over equipment, consumables, and data is paramount. RESERVA is here to help you meet these challenges head-on and transform your laboratory operations."
            }
          />
          <List
            title={"Travl"}
            category={"Next.js Ongoing Project"}
            description={
              "Introducing Travl: Your Passport to Seamless Travel Experiences. In a world constantly on the move, where wanderlust knows no boundaries, there is one app that stands out as your trusted companion on the journey of a lifetime."
            }
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse w-full h-full justify-normal lg:justify-between gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-end w-full text-2xl lg:text-4xl leading-relaxed tracking-tight">
            Latest UI/UX Projects
          </p>
          <p className="text-zinc-400 font-semibold text-start lg:text-end w-full text-lg lg:text-2xl leading-relaxed tracking-tight">
            Get Inspired By the Newest UI/UX Developments
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <List
            title={"LINE"}
            category={"UI/UX Ongoing Project"}
            description={
              "Introducing the iOS app UI/UX design for the LINE social media platform, where innovation meets user-centricity to redefine the way we connect and communicate in the digital age. From streamlined navigation to eye-catching visuals, I'm proud to showcase a design that fosters seamless connections and fosters meaningful interactions."
            }
          />
          <List
            title={"CryptCen"}
            category={"UI/UX Ongoing Project"}
            description={
              "CryptCen is more than just an app; it is your gateway to a seamless and innovative crypto asset management experience. Inviting you to explore our iOS app and discover how it can empower you on your crypto journey. Stay ahead of the curve with CryptCen and revolutionize the way you manage your digital wealth."
            }
          />
        </div>
      </div>
    </section>
  );
}

function List({ title, category, description }) {
  return (
    <div className="flex flex-col w-full items-start justify-start ring-1 ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-zinc-400">
      <p className="mx-8 mt-8 text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
        {title}
      </p>
      <p className="mx-8 mt-4 text-white font-semibold text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
        {category}
      </p>
      <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
        {description}
      </p>
      <SeeProject href={"/"} />
    </div>
  );
}

function SeeProject({ href }) {
  return (
    <a
      href={href}
      className="flex flex-row gap-4 mx-8 mb-8 mt-4 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight items-center transition-all hover:text-purple-400"
    >
      See Project
      <Unicons.UilArrowUpRight className="flex lg:hidden" size="18" />
      <Unicons.UilArrowUpRight className="hidden lg:flex" size="22" />
    </a>
  );
}
