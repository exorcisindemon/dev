import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function Collaborate() {
  return (
    <section
      className={`${style.collaborate} flex flex-col lg:flex-row w-full h-full px-8 pt-0 pb-8 lg:px-16 lg:pt-0 lg:pb-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col w-full h-full justify-normal lg:justify-between gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-center w-full text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
            Collaborate?
          </p>
          <p className="text-zinc-400 font-semibold text-start lg:text-center w-full text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            The Best Way To Work Together
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <GridSocial
            title={"Instagram"}
            description={"@rasxev"}
            href={"https://www.instagram.com/rasxev/"}
          />
          <GridSocial
            title={"Telegram"}
            description={"@rasxev"}
            href={"https://t.me/rasxev"}
          />
          <GridSocial
            title={"X"}
            description={"@exorcisindemon"}
            href={"https://twitter.com/exorcisindemon"}
          />
        </div>
      </div>
    </section>
  );
}

function GridSocial({ title, description, href }) {
  return (
    <div className="flex flex-row w-full items-center justify-between ring-1 ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-zinc-400">
      <div className="flex flex-col w-[60%] mx-8 items-center justify-center">
        <p className="w-full mt-8 mb-0 text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
          {title}
        </p>
        <p className="w-full mt-4 mb-8 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
          {description}
        </p>
      </div>
      <a
        href={href}
        className="flex flex-row w-[40%] gap-4 mx-8 mb-8 mt-8 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight items-center justify-end transition-all hover:text-purple-400"
      >
        Link
        <Unicons.UilArrowUpRight className="flex lg:hidden" size="18" />
        <Unicons.UilArrowUpRight className="hidden lg:flex" size="22" />
      </a>
    </div>
  );
}
