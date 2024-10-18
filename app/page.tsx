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
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid gap-4 sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <Sunset />
            <Wind />
            <DailyForecast />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
        </div>
      </div>

      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          Code by Noobmaster
        </p>
      </footer>
    </main>
  );
}
