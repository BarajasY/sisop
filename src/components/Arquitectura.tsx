import { Component } from "solid-js"
import { Interfaz } from "./arquitectura/Interfaz"
import { Kernel } from "./arquitectura/Kernel"
import { EspacioDeUsuario } from "./arquitectura/Usuario"
import { BaseIcon } from "./base/BaseIcon"
import { Procesos } from "./arquitectura/Procesos"

type props = {
  onClose: () => void;
}

export const Arquitectura: Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col mb-5 pt-20 overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-sky-700 h-fit rounded-lg">Arquitectura</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
      </div>

      <div class="flex flex-col w-70%">
        <Kernel />
        <Interfaz />
        <EspacioDeUsuario />
        <Procesos />
      </div>
    </div>
  )
}
