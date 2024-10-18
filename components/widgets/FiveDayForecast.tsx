"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGlobalContext } from "@/app/context/globalContext";
import { calender, clearSky } from "@/lib/Icons";
import { kelvinToCelsius, unixToDay } from "@/lib/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { TemperatureRange } from "../ui/temperature-range";

function FiveDayForecast() {
  const { fiveDayForecast } = useGlobalContext();

  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const processData = (
    dailyData: {
      main: { temp_min: number; temp_max: number };
      dt: number;
    }[]
  ) => {
    let minTemp = Number.MAX_VALUE;
    let maxTemp = Number.MIN_VALUE;

    dailyData.forEach(
      (day: { main: { temp_min: number; temp_max: number }; dt: number }) => {
        if (day.main.temp_min < minTemp) {
          minTemp = day.main.temp_min;
        }
        if (day.main.temp_max > maxTemp) {
          maxTemp = day.main.temp_max;
        }
      }
    );

    return {
      day: unixToDay(dailyData[0].dt),
      minTemp: kelvinToCelsius(minTemp),
      maxTemp: kelvinToCelsius(maxTemp),
    };
  };

  const dailyForecasts = [];

  for (let i = 0; i < 40; i += 8) {
    const dailyData = list.slice(i, i + 5);
    dailyForecasts.push(processData(dailyData));
  }

  return (
    <Card className="h-fit shrink-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-medium">
          {calender} 5-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-base font-normal md:mb-1">
        {dailyForecasts.map((day, i) => (
          <div key={i}>
            <div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
              <p className="min-w-[3rem] font-medium">
                {i === 0
                  ? "Today"
                  : day.day}
              </p>
              <p>{clearSky}</p>
              <div className="flex w-[60%] flex-row gap-2 overflow-hidden">
                <div className="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
                  <p className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
                    {Math.floor(day.minTemp)}&deg;
                  </p>
                  <TemperatureRange
                    min={15}
                    max={32}
                    value={[day.minTemp, day.maxTemp]}
                  />
                  <p className="flex w-[3rem] min-w-fit justify-end">
                    {Math.floor(day.maxTemp)}&deg;
                  </p>
                </div>
              </div>
            </div>
            {/* {i !== day.list.length - 1 && <Separator className="mt-3" />} */}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default FiveDayForecast;
