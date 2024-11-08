import { Component, createSignal } from "solid-js"
import { Interfaz } from "./arquitectura/Interfaz"
import { Kernel } from "./arquitectura/Kernel"
import { EspacioDeUsuario } from "./arquitectura/Usuario"
import { BaseIcon } from "./base/BaseIcon"
import { Procesos } from "./arquitectura/Procesos"
import { Referencias } from "./base/Referencias"
import { A } from "@solidjs/router"

type props = {
  onClose: () => void;
}

export const Arquitectura: Component<props> = (props) => {

  const [MostrarReferencias, setMostrarReferencias] = createSignal<boolean>(false);

  return (
    <div class="w-full h-full flex flex-col mb-5 pt-20 overflow-y-auto overflow-x-hidden items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-sky-700 h-fit rounded-lg">Arquitectura</h1>
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

      <div class="flex flex-col w-70%">
        <Kernel />
        <Interfaz />
        <EspacioDeUsuario />
        <Procesos />
        <Referencias
          show={MostrarReferencias()}
          onClickOutside={() => setMostrarReferencias(false)}
        >
          <div class="flex justify-start items-center flex-col pt-8">
            <h1 class="text-sky-700 font-semibold">Referencias</h1>

            <div class="flex flex-col gap-2 mt-5 w-80%">
              <A
                href="https://frikisdelhacking.com/sistemas-operativos/linux/arquitectura-del-sistema-operativo-linux/"
                target="_blank"
                class=" decoration-none text-gray-800 font-semibold text-lg"
              >
                ~ Entendiendo la Arquitectura del Sistema Operativo Linux, frikis del hacking
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://juncotic.com/gnulinux-arquitectura-basica-del-sistema/"
              >
                ~ GNU/Linux: Arquitectura básica del sistema, Diego Córdoba, 2018. Juncotic
              </A>
            </div>
          </div>
        </Referencias>
      </div>
    </div>
  )
}
