import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";

type props = {
  onClose: () => void;
}

export const Introduccion: Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col mb-5 pt-20 overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-amber-700 h-fit rounded-lg">Introducción</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
      </div>

      <div class="w-60% flex items-center justify-center text-justify flex-col">
        <p class="w-full p-2 text-xl text-amber-900 font-semibold">Linux es un sistema operativo de código abierto que ha ganado popularidad en el mundo por ser tan flexible, seguro y robusto. Desarrollado inicialmente por Linus Torvalds en 1991, Linux se basa en el núcleo del sistema operativo Unix y ha evolucionado a lo largo del tiempo gracias a grandes comunidades que se unen al desarrollo y actualizaciones. A diferencia de otros sistemas operativos , como Windows o macOS, Linux permite a los usuarios modificar y distribuir su código fuente, lo que lleva a innovat nuevas tecnologías y personalización. Este sistema operativo se utiliza en una variedad de dispositivos, desde servidores hasta teléfonos móviles. Su arquitectura permite a los usuarios elegir entre diversas distribuciones, como Ubuntu, Fedora, redHat entre otras; que se adaptan a las necesidades de los usuarios. Al paso de los años, Linux ha demostrado ser una opción confiable para empresas y usuarios, especialmente en entornos de servidor y desarrollo de software. Además del software libre que tiene Linux promueve la colaboración y el acceso a comunidades abiertas a la creación de software, lo que ha llevado a un mundo de herramientas y aplicaciones. En un mundo cada vez más digital, el conocimiento y uso de Linux se ha convertido en una habilidad valiosa y demandada.</p>
        <img src="/public/linux.svg" class="w-100 h-100 object-[fit]" />
      </div>
    </div>
  )
}