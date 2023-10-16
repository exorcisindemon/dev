import style from "../../components/app/pr.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function PR() {
  return (
    <main
      className={`${style.pr} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-start w-full text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
            Latest Frontend Projects
          </p>
          <p className="text-zinc-400 font-semibold text-start lg:text-start w-full text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Unveiling the Most Recent Frontend Creations
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <Project
            title={"Reserva"}
            category={"Next.js Ongoing Project"}
            description={
              "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
            }
          />
          <Project
            title={"Travl"}
            category={"Next.js Ongoing Project"}
            description={
              "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
            }
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-end w-full text-2xl lg:text-4xl leading-relaxed tracking-tight">
            Latest UI/UX Projects
          </p>
          <p className="text-zinc-400 font-semibold text-start lg:text-end w-full text-lg lg:text-2xl leading-relaxed tracking-tight">
            Get Inspired by the Newest UI/UX Developments
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <Project
            title={"LINE"}
            category={"UI/UX Ongoing Project"}
            description={
              "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
            }
          />
          <Project
            title={"CryptCen"}
            category={"UI/UX Ongoing Project"}
            description={
              "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
            }
          />
        </div>
      </div>
    </main>
  );
}

function Project({ title, category, description }) {
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
      <Unicons.UilArrowRight className="flex lg:hidden" size="18" />
      <Unicons.UilArrowRight className="hidden lg:flex" size="22" />
    </a>
  );
}
