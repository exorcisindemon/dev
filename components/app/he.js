import Image from "next/image";

import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function HE() {
  return (
    <main
      className={`${style.he} flex flex-col lg:flex-row w-full h-full lg:h-[800px] px-8 pt-8 pb-0 lg:px-8 lg:pt-0 lg:pb-0 gap-8 items-center justify-center`}
    >
      <div className="flex flex-col w-full lg:w-[40%] lg:pb-8">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          The <span className="text-purple-400">React.js</span> Maven,{" "}
          <span className="text-purple-400">Next.js</span> Virtuoso, and the iOS
          App Enchantress of <span className="text-purple-400">UI/UX</span>
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
            unicons={<Unicons.UilGithubAlt size="22" />}
          />
          <Link
            href={"https://www.instagram.com/rasxev/"}
            unicons={<Unicons.UilInstagram size="22" />}
          />
          <Link
            href={"mailto:poxcia@outlook.com"}
            unicons={<Unicons.UilEnvelope size="22" />}
          />
          <Link
            href={"https://t.me/rasxev"}
            unicons={<Unicons.UilTelegramAlt size="22" />}
          />
          <Link
            href={"https://twitter.com/CCRSXNT"}
            unicons={<Unicons.UilTwitterAlt size="22" />}
          />
        </div>
        <p className="mt-8 text-white font-semibold text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight">
          Fully handcrafted using Next.js by Ras at Semarang, Central Java,
          Indonesia.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-[30%] h-full justify-center overflow-y-hidden">
        <Image
          src="../mockup/cryptcen.svg"
          width="1680"
          height="2580"
          alt="cryptcen"
        />
      </div>
    </main>
  );
}

function Link({ href, unicons }) {
  return (
    <a
      href={href}
      className="transition-all hover:bg-purple-400 mt-8 p-4 rounded-2xl bg-zinc-900 text-white hover:text-black"
    >
      {unicons}
    </a>
  );
}
