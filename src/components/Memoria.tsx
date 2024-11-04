import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon"
import { Virtual } from "./memoria/Virtual";
import { Gestion } from "./memoria/Gestion";
import { Swap } from "./memoria/Swap";
import { Fisica } from "./memoria/Fisica";
import { Troubleshoot } from "./memoria/Troubleshoot";
import { Archivos } from "./memoria/Archivos";
import { Jerarquia } from "./memoria/Jerarquia";
import { Permisos } from "./memoria/Permisos";
import { Manejo } from "./memoria/Manejo";
import { Partes } from "./memoria/Partes";

type props = {
  onClose: () => void;
}

export const Memoria: Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-purple-900 h-fit rounded-lg">Memoria</h1>
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
        <Virtual />
        <Fisica />
        <Swap />
        <Gestion />
        <Troubleshoot />
        <Archivos />
        <Jerarquia />
        <Permisos />
        <Manejo />
        <Partes />
      </div>
    </div>
  )
}