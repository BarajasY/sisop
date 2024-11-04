import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon"
import { Intro } from "./concurrencia/Intro";
import { Scheduler } from "./concurrencia/Scheduler";
import { Hilos } from "./concurrencia/Hilos";
import { Sincronizacion } from "./concurrencia/Sincronizacion";
import { Aislamiento } from "./concurrencia/Aislamiento";
import { Señales } from "./concurrencia/Señales";

type props = {
  onClose: () => void;
}

export const Multitarea:Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-rose-900 h-fit rounded-lg">Concurrencia</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
      </div>
      <div class="w-60% mb-20">
        <Intro />
        <Scheduler />
        <Hilos />
        <Sincronizacion />
        <Aislamiento />
        <Señales />
      </div>
    </div>
  )
}