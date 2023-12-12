import style from "../../shared/module/controller.module.css";

export default function Announcement() {
  return (
    <section
      className={`${style.announcement} flex flex-col lg:flex-row w-full h-screen lg:h-full px-8 py-8 lg:px-16 lg:py-32 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col gap-0 w-full items-center">
        <p className="text-white lg:text-black font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          RESERVA
        </p>
        <div className="mt-8 flex flex-col gap-8 w-full lg:w-[25%] items-center justify-center">
          <p className="mt-0 p-0 lg:px-8 lg:py-8 text-zinc-400 lg:text-zinc-600 font-normal text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center lg:text-justify backdrop-blur-0 lg:backdrop-blur-lg rounded-none lg:rounded-2xl ring-0 lg:ring-1 lg:ring-zinc-200">
            RESERVA is a cutting-edge solution tailored to meet the unique needs
            of laboratories, providing a robust platform for the efficient
            tracking, maintenance, and utilization of laboratory assets. From
            high-tech equipment to consumables, RESERVA empowers laboratories to
            enhance productivity and ensure the smooth operation of experiments
            and research activities.
            <p className="mt-8 text-zinc-400 lg:text-zinc-600 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center">
              <span className="text-purple-400 lg:text-purple-600">
                8082a0f
              </span>{" "}
              •{" "}
              <span className="text-purple-400 lg:text-purple-600">update</span>
            </p>
          </p>
          <a
            href="https://pre-reserva.vercel.app/"
            className="bg-purple-400/20 lg:bg-purple-600/80 mt-0 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-center transition-all hover:text-purple-400 px-4 py-2 rounded-full"
          >
            https://pre-reserva.vercel.app/
          </a>
        </div>
      </div>
    </section>
  );
}
