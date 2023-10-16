import Image from "next/image";

import style from "../../components/app/sk.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function SK() {
  return (
    <main
      className={`${style.sk} flex flex-col w-full h-full px-8 pt-0 pb-8 lg:px-16 lg:pt-0 lg:pb-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#DDE8EB] lg:ring-zinc-800 mt-0 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#DDE8EB]">
          <Image
            src="/annie-spratt-oCqCLEPOf40-unsplash.jpg"
            width="2400"
            height="2400"
            alt="reactJs"
          />
          <p className="mx-8 mt-8 text-[#DDE8EB] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            React.js
          </p>
          <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            JavaScript Fundamentals, JSX, Rendering, Hooks, Props, Functional
            Components, Class Components, RRD, Styling in React, API Calls,
            Deployments.
          </p>
          <Expand href={"/"} />
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#A526B6] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#A526B6]">
          <Image
            src="/deleece-cook-TQ8lA-Rvrxw-unsplash.jpg"
            width="2121"
            height="2121"
            alt="nextJs"
          />
          <p className="mx-8 mt-8 text-[#A526B6] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Next.js
          </p>
          <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            React Fundamentals, Node.js, NPM, ES7, Server-Side Rendering, Pages
            and Routing, Layouts and Components, Data Fetching, API Routes,
            Environment Variables, Performance Optimization, Deployments.
          </p>
          <Expand href={"/"} />
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#09B1E1] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#09B1E1]">
          <Image
            src="/kenrick-mills-NJtPiWB3ADY-unsplash.jpg"
            width="2400"
            height="2400"
            alt="tailwindCSS"
          />
          <p className="mx-8 mt-8 text-[#09B1E1] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Tailwind CSS
          </p>
          <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            Basic Concepts, Utility Classes, Responsive Design, Customization,
            Layouts and Grids, Optimization, Form Styling, Transitions and
            Animations, Theming.
          </p>
          <Expand href={"/"} />
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#D75264] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#D75264]">
          <Image
            src="/deleece-cook-Vi-1ocl1e1o-unsplash.jpg"
            width="1600"
            height="1600"
            alt="SASS"
          />
          <p className="mx-8 mt-8 text-[#D75264] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            SASS
          </p>
          <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            Syntax, Nesting, Partials and Import, Functions, Responsive Design,
            Performance Optimization.
          </p>
          <Expand href={"/"} />
        </div>
      </div>
    </main>
  );
}

function Expand({ href, description, unicons }) {
  return (
    <a
      href={href}
      className="flex flex-row gap-4 mx-8 mb-8 mt-4 text-white font-medium text-sm lg:text-lg leading-relaxed tracking-tight items-center transition-all hover:text-purple-400"
    >
      Expand
      <Unicons.UilArrowUpRight className="flex lg:hidden" size="18" />
      <Unicons.UilArrowUpRight className="hidden lg:flex" size="22" />
    </a>
  );
}
