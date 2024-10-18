"use client";

import DailyForecast from "@/components/widgets/DailyForecast";
import FeelsLike from "@/components/widgets/FeelsLike";
import FiveDayForecast from "@/components/widgets/FiveDayForecast";
import Humidity from "@/components/widgets/Humidity";
import Pressure from "@/components/widgets/Pressure";
import Sunset from "@/components/widgets/Sunset";
import Temperature from "@/components/widgets/Temperature";
import Visibility from "@/components/widgets/Visibility";
import Wind from "@/components/widgets/Wind";
import { useGlobalContextUpdate } from "./context/globalContext";
import defaultStates from "@/lib/defaultStates";
import { CodeIcon, HeartIcon } from "@radix-ui/react-icons";
import AirPollution from "@/components/widgets/AirPollution";

export default function Home() {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getClickedCityCords = (lat: number, lon: number) => {
    setActiveCityCoords([lat, lon]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <div className="states flex flex-col gap-3 flex-1 my-5">
        <h2 className="flex items-center gap-2 font-medium">
          Top Large Cities
        </h2>
        <div className="flex gap-4">
          {defaultStates.map((state, index) => {
            return (
              <div
                key={index}
                className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                onClick={() => {
                  getClickedCityCords(state.lat, state.lon);
                }}
              >
                <p className="px-6 py-4">{state.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-72 md:w-[32rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid gap-4 sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <Sunset />
            <Wind />
            <FeelsLike />
            <Humidity />
            <DailyForecast />
            <Visibility />
            <Pressure />
            <AirPollution />
          </div>
        </div>
      </div>

      <footer className="py-4">
        <div
          className="group cursor-pointer flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
          aria-hidden={true}
        >
          <CodeIcon className="h-5 w-5 group-hover:text-slate-400" />
          <span>with</span>
          <HeartIcon className="h-4 w-4 group-hover:text-red-500" />
          <span>by </span>
          <span className="text-red-400">Noobmaster</span>
        </div>
      </footer>
    </main>
  );
}
