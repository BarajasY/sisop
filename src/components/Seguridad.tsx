import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";
import { Malware } from "./seguridad/Malware";
import { Mitigacion } from "./seguridad/Mitigacion";
import { Intrusos } from "./seguridad/Intrusos";
import { Autentificacion } from "./seguridad/Autentificacion";
import { Niveles } from "./seguridad/Niveles";
import { Problemas } from "./seguridad/Problemas";
import { Red } from "./seguridad/Red";

type props = {
  onClose: () => void;
}

export const Seguridad:Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-emerald-700 h-fit rounded-lg">Seguridad</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          variant="neg-accent"
          hover={true}
          onClick={() => props.onClose()}
        />
      </div>
      <div class="w-60% mb-20">
        <Malware />
        <Mitigacion />
        <Intrusos />
        <Autentificacion />
        <Niveles />
        <Problemas />
        <Red />
      </div>
    </div>
  )
}