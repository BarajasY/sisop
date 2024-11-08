import { Component, createSignal } from "solid-js";
import { BaseIcon } from "./base/BaseIcon"
import { Intro } from "./concurrencia/Intro";
import { Scheduler } from "./concurrencia/Scheduler";
import { Hilos } from "./concurrencia/Hilos";
import { Sincronizacion } from "./concurrencia/Sincronizacion";
import { Aislamiento } from "./concurrencia/Aislamiento";
import { Señales } from "./concurrencia/Señales";
import { A } from "@solidjs/router";
import { Referencias } from "./base/Referencias";

type props = {
  onClose: () => void;
}

export const Multitarea: Component<props> = (props) => {

  const [MostrarReferencias, setMostrarReferencias] = createSignal<boolean>(false);

  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-rose-900 h-fit rounded-lg">Concurrencia</h1>
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
        <Intro />
        <Scheduler />
        <Hilos />
        <Sincronizacion />
        <Aislamiento />
        <Señales />

      </div>
      <Referencias
        show={MostrarReferencias()}
        onClickOutside={() => setMostrarReferencias(false)}
      >
        <div class="flex justify-start items-center flex-col pt-8">
          <h1 class="text-sky-700 font-semibold">Referencias</h1>

          <div class="flex flex-col gap-2 mt-5 w-80%">
            <A
              href="https://ocw.ehu.eus/pluginfile.php/48902/mod_resource/content/13/html/Recursos/P01/Sistemas_operativos.html"
              target="_blank"
              class=" decoration-none text-gray-800 font-semibold text-lg"
            >
              ~ Programación concurrente en Linux, OpenCourseWare
            </A>
            <A
              class=" decoration-none text-gray-800 font-semibold text-lg"
              href="https://wiki.yowu.dev/es/Knowledge-base/Linux/linux-kernel-synchronization-and-concurrency"
            >
              ~ Wiki Yowu, Sincronización y concurrencia del kernel de Linux
            </A>
            <A
              class=" decoration-none text-gray-800 font-semibold text-lg"
              href="https://phoenixnap.mx/glosario/multiprogramaci%C3%B3n"
            >
              ~ ¿Qué es la multiprogramación?, phoenixNAP
            </A>
          </div>
        </div>
      </Referencias>
    </div>
  )
}