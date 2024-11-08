import { Component, createSignal } from "solid-js";
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
import { A } from "@solidjs/router";
import { Referencias } from "./base/Referencias";

type props = {
  onClose: () => void;
}

export const Memoria: Component<props> = (props) => {

  const [MostrarReferencias, setMostrarReferencias] = createSignal<boolean>(false);

  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-purple-900 h-fit rounded-lg">Memoria</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10 justify-between">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
        <BaseIcon
          icon="i-mdi-file-document-multiple-outline"
          hover={true}
          variant="neg-accent"
          onClick={() => setMostrarReferencias(true)}
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

      <Referencias
        show={MostrarReferencias()}
        onClickOutside={() => setMostrarReferencias(false)}
      >
        <div class="flex justify-start items-center w-100% h-100% flex-col pt-8">
          <h1 class="text-sky-700 font-semibold">Referencias</h1>

          <div class="flex flex-col gap-2 mt-5 w-80%">
            <A
              href="http://multimedia.uoc.edu/blogs/linux/el-sistema-de-archivos/"
              target="_blank"
              class=" decoration-none text-gray-800 font-semibold text-lg"
            >
              ~ GNU / Linux, Multimedia
            </A>
            <A
              class=" decoration-none text-gray-800 font-semibold text-lg"
              href="https://www.luisllamas.es/organizacion-sistema-de-archivos-en-linux/"
            >
              ~ Luis Llamas, Organización del sistema de archivos en Linux
            </A>
            <A
              class=" decoration-none text-gray-800 font-semibold text-lg"
              href="https://blyx.com/public/docs/curso-linux-principiantes/memvirt.html"
            >
              ~ Curso Linux Principiantes
            </A>
            <A
              class=" decoration-none text-gray-800 font-semibold text-lg"
              href="https://www.site24x7.com/es/learn/linux/optimize-memory.html"
            >
              ~ Gestionar y optimizar la memoria en Linux
            </A>
          </div>
        </div>
      </Referencias>
    </div>
  )
}