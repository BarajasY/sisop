import { Component, createSignal } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";
import { Malware } from "./seguridad/Malware";
import { Mitigacion } from "./seguridad/Mitigacion";
import { Intrusos } from "./seguridad/Intrusos";
import { Autentificacion } from "./seguridad/Autentificacion";
import { Niveles } from "./seguridad/Niveles";
import { Problemas } from "./seguridad/Problemas";
import { Red } from "./seguridad/Red";
import { A } from "@solidjs/router";
import { Referencias } from "./base/Referencias";

type props = {
  onClose: () => void;
}

export const Seguridad: Component<props> = (props) => {

  const [MostrarReferencias, setMostrarReferencias] = createSignal<boolean>(false);

  return (
    <div class="w-full h-full flex flex-col overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-emerald-700 h-fit rounded-lg">Seguridad</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10 justify-between">
        <BaseIcon
          icon="i-mdi-close-thick"
          variant="neg-accent"
          hover={true}
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
        <Malware />
        <Mitigacion />
        <Intrusos />
        <Autentificacion />
        <Niveles />
        <Problemas />
        <Red />

        <Referencias
          show={MostrarReferencias()}
          onClickOutside={() => setMostrarReferencias(false)}
        >
          <div class="flex justify-start items-center flex-col pt-8">
            <h1 class="text-sky-700 font-semibold">Referencias</h1>

            <div class="flex flex-col gap-2 mt-5 w-80%">
              <A
                href="https://tuxcare.com/es/blog/implementing-risk-compliance-and-management-in-linux-systems-a-practical-guide/"
                target="_blank"
                class=" decoration-none text-gray-800 font-semibold text-lg"
              >
                ~ Trusca, A. (2024, marzo 22). Implantación del cumplimiento y la gestión de riesgos en sistemas Linux: Guía práctica. TuxCare.
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://infolinux.es/prevencion-de-desastres-en-linux-estrategias-de-respaldo-y-recuperacion/"
              >
                ~ Prevención de Desastres en Linux: Estrategias de Respaldo y Recuperación. (2023, diciembre 5). infoLinux
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://tuxcare.com/es/blog/securing-linux-network-understanding-attack-vectors-and-countermeasures/"
              >
                ~ Karasev, A. (2023, septiembre 18). Proteger la red Linux: Comprender los vectores de ataque y las contramedidas. TuxCare
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://www.computerweekly.com/es/consejo/Cinco-debilidades-de-seguridad-de-Linux-que-pueden-pasar-por-alto"
              >
                ~ Beaver, K. (2009, febrero 6). Cinco debilidades de seguridad de Linux que pueden pasar por alto. ComputerWeekly.es; TechTarget
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://www.eset.com/es"
              >
                ~ ESET España. (n.d.). Cómo proteger Linux contra virus y malware. ESET España.
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://www.muylinux.com"
              >
                ~ MuyLinux. (n.d.). Linux: Control de acceso y autenticación de usuarios. MuyLinux.
              </A>
              <A
                href="https://openwebinars.net"
                class=" decoration-none text-gray-800 font-semibold text-lg"
              >
                ~ OpenWebinars. (n.d.). Manual de administración y seguridad en Linux.
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://www.linuxadictos.com/seguridad-en-linux"
              >
                ~ Linux Adictos. (n.d.). Seguridad en Linux: Introducción a SELinux y AppArmor. Linux
              </A>
              <A
                class=" decoration-none text-gray-800 font-semibold text-lg"
                href="https://www.ccn-cert.cni.es"
              >
                ~ Centro Criptológico Nacional (CCN). (n.d.). Guía de seguridad en Linux.
              </A>
            </div>
          </div>
        </Referencias>
      </div>
    </div>
  )
}