import * as Unicons from "@iconscout/react-unicons";

export default function FT() {
  return (
    <main className="bg-zinc-950 flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center">
      <div className="flex flex-col w-full h-full justify-normal lg:justify-between gap-0">
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-16 w-full lg:w-auto">
          <div className="flex flex-col w-full lg:w-[10%] justify-start">
            <p className="w-full mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
              HE
            </p>
            <div className="flex flex-col w-full lg:w-auto">
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Prelude?
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Conquering JavaScript
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Transitioning to React.js
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Evolving Beyond React
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[10%] justify-start">
            <p className="w-full mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
              RE
            </p>
            <div className="flex flex-col w-full lg:w-auto">
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                React.js
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Next.js
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Tailwind CSS
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                SASS
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                UI/UX Web Design
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                UI/UX iOS App Design
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[10%] justify-start">
            <p className="w-full mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
              TM
            </p>
            <div className="flex flex-col w-full lg:w-auto">
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Send (React.js, Next.js Dev.)
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Send (iOS App UI/UX Design)
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[10%] justify-start">
            <p className="w-full mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
              PR
            </p>
            <div className="flex flex-col w-full lg:w-auto">
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Reserva
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Travl
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                LINE
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                CryptCen
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[10%] justify-start">
            <p className="w-full mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
              CL
            </p>
            <div className="flex flex-col w-full lg:w-auto">
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Instagram
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                Telegram
              </p>
              <p className="w-full mt-4 text-zinc-400 font-medium text-sm leading-relaxed tracking-tight text-start">
                X
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full lg:w-auto mt-8 lg:mt-16 gap-8 items-center justify-between lg:justify-start overflow-x-auto">
          <p className="w-auto mt-0 text-white font-semibold text-lg leading-relaxed tracking-tight">
            LINK
          </p>
          <div className="flex flex-row w-full lg:w-auto gap-8 items-center justify-end lg:justify-start">
            <a className="text-zinc-400" href="https://github.com/sievl">
              <Unicons.UilGithubAlt size="22" />
            </a>
            <a
              className="text-zinc-400"
              href="https://www.instagram.com/rasxev/"
            >
              <Unicons.UilInstagram size="22" />
            </a>
            <a className="text-zinc-400" href="mailto:cseira@outlook.com">
              <Unicons.UilEnvelope size="22" />
            </a>
            <a className="text-zinc-400" href="https://t.me/rasxev">
              <Unicons.UilTelegramAlt size="22" />
            </a>
            <a className="text-zinc-400" href="https://twitter.com/ccsievl">
              <Unicons.UilTwitterAlt size="22" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
