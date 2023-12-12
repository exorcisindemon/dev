"use client";

import style from "../../shared/module/controller.module.css";
import { useState, useEffect } from "react";

export default function Banner() {
  const launchDate = new Date("March 1, 2024 00:00:00 GMT+0000");
  const [timer, setTimer] = useState(timeRemaining());

  function timeRemaining() {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${style.banner} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-2 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-center">
        <label className="text-black font-medium text-sm leading-relaxed tracking-tight text-center">
          Capture the Essence of Research and Development of RESERVA
        </label>
        <label className="hidden lg:flex text-black font-medium text-sm leading-relaxed tracking-tight">
          ◦
        </label>
        <label onHover className="transition-all bg-black hover:bg-white text-white hover:text-black px-4 py-2 font-medium text-sm leading-relaxed tracking-tight rounded-full">
          Expected to be done at {timer.days}d {timer.hours}h {timer.minutes}m{" "}
          {timer.seconds}s
        </label>
      </div>
    </section>
  );
}
