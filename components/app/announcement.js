import style from "../../shared/module/controller.module.css";

export default function Announcement() {
  return (
    <section
      className={`${style.announcement} flex flex-col lg:flex-row w-full h-screen lg:h-full px-8 py-8 lg:px-16 lg:py-32 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col gap-8 w-full items-center">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          RESERVA
        </h1>
        <div className="flex flex-col gap-8 w-full lg:w-[25%] items-center justify-center">
          <p className="mt-0 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center">
            In the ever-evolving world of scientific research and
            experimentation, maintaining precise control over equipment,
            consumables, and data is paramount. RESERVA is here to help you meet
            these challenges head-on and transform your laboratory operations.
          </p>
          <a
            href="https://pre-reserva.vercel.app/"
            className="mt-0 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center transition-all hover:text-purple-400"
          >
            https://pre-reserva.vercel.app/
          </a>
          <p className="mt-0 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center">
            <span className="text-purple-400">2a8560f</span> •{" "}
            <span className="text-purple-400">update</span>
          </p>
        </div>
      </div>
    </section>
  );
}