import Image from "next/image";

import style from "../../components/app/he.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function HE() {
  return (
    <main
      className={`${style.he} flex flex-col lg:flex-row w-full h-full lg:h-[800px] px-8 py-8 lg:px-8 lg:pt-0 lg:pb-0 gap-8 items-center justify-center`}
    >
      <div className="flex flex-col w-full lg:w-[40%] lg:pb-8">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          The <span className="text-purple-400">React.js</span> Whisperer,{" "}
          <span className="text-purple-400">Next.js</span> Maestro, and the iOS
          App Charmcaster of <span className="text-purple-400">UI/UX</span>
          <span className="ml-2 animate-ping text-purple-400">|</span>
        </h1>
        <h2 className="mt-8 text-zinc-400 font-medium text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
          Ras. As an Informatics Engineering student, I&apos;ve had the
          privilege of immersing myself in the world of technology and software
          development.
        </h2>
        <div className="flex flex-row gap-4 w-full lg:w-auto overflow-x-auto lg:overflow-x-hidden">
          <Link
            href={"https://github.com/sievl"}
            unicons={<Unicons.UilGithubAlt />}
          />
          <Link
            href={"https://www.instagram.com/rasxev/"}
            unicons={<Unicons.UilInstagram />}
          />
          <Link
            href={"mailto:cseira@outlook.com"}
            unicons={<Unicons.UilEnvelope />}
          />
          <Link
            href={"https://t.me/rasxev"}
            unicons={<Unicons.UilTelegramAlt />}
          />
          <Link
            href={"https://twitter.com/ccsievl"}
            unicons={<Unicons.UilTwitterAlt />}
          />
        </div>
        <p className="mt-8 text-white font-semibold text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight">
          Fully handcrafted using Next.js by Ras at Semarang, Central Java,
          Indonesia.
          <br />
          Credits to Unsplash for Images.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-[30%] h-full justify-center overflow-y-hidden">
        <Image src="../mockup/cryptcen.svg" width="560" height="860" alt="cryptcen" />
      </div>
    </main>
  );
}

function Link({ href, unicons }) {
  return (
    <a
      href={href}
      className="transition-all hover:bg-purple-800 mt-8 p-4 rounded-2xl bg-zinc-900 text-white"
    >
      {unicons}
    </a>
  );
}
