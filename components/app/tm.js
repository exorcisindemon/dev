import Image from "next/image";

import style from "../../components/app/tm.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function TM() {
  return (
    <main
      className={`${style.tm} flex flex-col w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <p className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
        Ask Something?
      </p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <BlockQuote
          specialization={"React.js, Next.js Dev."}
          unicons={
            <Unicons.UilArrow
              className="hidden lg:flex mt-4 lg:mt-0"
              size="22"
            />
          }
          cover={
            <Image
              className="mt-8 w-full rounded-2xl"
              src="/pawel-czerwinski-aMPfitH2tT0-unsplash.jpg"
              width="1920"
              height="1080"
              alt="askReactNext"
            />
          }
          thread={
            "Hi! A passionate developer who absolutely loves the world of web development, and my playground of choice is React.js and Next.js. There's something incredibly satisfying about bringing dynamic, interactive, and beautiful web applications to life, and these technologies allow me to do just that."
          }
          contact={
            "mailto:cseira@outlook.com?subject=I'm [...]. Let's talk about React.js, Next.js"
          }
          subject={"React.js, Next.js"}
          date={"Tuesday, October 10, 2023"}
          time={"5.02 AM"}
          app={"Next.js"}
        />
        <BlockQuote
          specialization={"iOS App UI/UX Designer"}
          unicons={
            <Unicons.UilPalette
              className="hidden lg:flex mt-4 lg:mt-0"
              size="22"
            />
          }
          cover={
            <Image
              className="mt-8 w-full rounded-2xl"
              src="/pawel-czerwinski-9yEDe2r3PcM-unsplash.jpg"
              width="1920"
              height="1080"
              alt="askUIUX"
            />
          }
          thread={
            "I'm someone who absolutely thrives on the creative excitement of crafting stunning iOS UI/UX designs. Whether it's the sleek elegance of a minimalist interface or the vibrant energy of a dynamic app, I'm all about making user experiences not just functional but delightful."
          }
          contact={
            "mailto:cseira@outlook.com?subject=I'm [...]. Let's talk about iOS App UI/UX Design"
          }
          subject={"iOS App UI/UX Design"}
          date={"Tuesday, October 10, 2023"}
          time={"6.41 AM"}
          app={"Next.js"}
        />
      </div>
    </main>
  );
}

function BlockQuote({
  specialization,
  unicons,
  cover,
  thread,
  contact,
  subject,
  date,
  time,
  app,
}) {
  return (
    <blockquote className="bg-white flex flex-col p-8 w-full lg:w-[480px] rounded-2xl shadow-2xl shadow-zinc-600">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 items-center">
          <Image
            className="w-16 rounded-full"
            src="/avatar/364949757_818510079740755_8222179311779232246_n.jpg"
            width="1080"
            height="1080"
            alt="profile"
          />
          <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <p className="text-purple-600 font-semibold text-lg leading-relaxed tracking-tight">
              Ras<span className="ml-2 text-black">(@sievl)</span>
            </p>
            <p className="text-zinc-600 font-medium text-sm leading-relaxed tracking-tight">
              {specialization}
            </p>
          </div>
        </div>
        {unicons}
      </div>
      {cover}
      <div className="flex flex-col items-center lg:items-start mt-8">
        <p className="text-zinc-600 text-sm leading-relaxed tracking-tight text-justify mt-0">
          {thread}{" "}
          <a
            className="text-purple-600 font-semibold transition-all hover:text-purple-700"
            href={contact}
          >
            I would like to spare my time, and lets talk about {subject}.
          </a>
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed tracking-tight mt-8">
          At {date} - {time}
        </p>
        <p className="text-black font-semibold text-sm leading-relaxed tracking-tight mt-0">
          Uploaded using {app} App
        </p>
      </div>
    </blockquote>
  );
}
