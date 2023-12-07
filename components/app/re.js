import Image from "next/image";

import style from "../../shared/module/controller.module.css"

export default function RE() {
  return (
    <main
      className={`${style.re} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col w-full lg:w-[40%] h-full justify-center overflow-y-hidden">
        <Image src="/sigmund-mFcsYcSSiMQ-unsplash.jpg" width="3024" height="3024" alt="cover" />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-[60%]">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          Trough All Documentations, etc.
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8 w-full">
          <div className="flex flex-col w-full h-full items-start justify-start mt-0 lg:mt-0">
            <p className="text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Prelude?
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              Countless tutorials, articles, and online courses beckoned to me,
              promising to reveal the secrets of web development. I started with
              the foundations: HTML and CSS. My days were filled with coding
              exercises, late-night debugging sessions, and the satisfaction of
              seeing a blank canvas transform into a beautifully crafted
              webpage.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-0">
            <p className="text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Conquering JavaScript
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              As I honed my skills, I encountered JavaScript—the magical
              language that brought interactivity and life to websites. It was
              like learning a new dialect, but I was undeterred. Loops,
              conditions, and functions became my companions as I strived to
              master the art of creating dynamic and responsive web experiences.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-8">
            <p className="text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Transitioning to React.js
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              React introduced a different paradigm—a component-based
              architecture that felt both familiar and foreign. As I delved into
              the React documentation, I encountered JSX, a syntax that blended
              HTML with JavaScript.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-8">
            <p className="text-purple-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Evolving Beyond React
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              Just as I had with React, I explored the rich ecosystem
              surrounding Next.js. I integrated it with state management
              libraries, connected it to APIs, and leveraged its serverless
              functions for backend logic. The impact of Next.js on my
              development journey was profound. I could create web applications
              that were not only interactive and dynamic but also highly
              optimized for performance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
