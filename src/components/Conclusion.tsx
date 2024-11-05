import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";

type props = {
  onClose: () => void;
}

export const Conclusion: Component<props> = (props) => {
  return (
    <div class="w-full h-full flex flex-col mb-5 pt-20 overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-teal-700 h-fit rounded-lg">Conclusión</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
      </div>

      <div class="flex w-60% gap-5 justify-center items-center flex-col text-justify mt-10">
        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Laura Alicia Gallegos Moreno</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux es un sistema operativo robusto y versátil que destaca por su flexibilidad, seguridad y eficiencia. Es una plataforma de código abierto, lo que permite a la comunidad de desarrolladores de todo el mundo colaborar y mejorar constantemente su rendimiento y adaptabilidad. Además, su estabilidad y bajo consumo de recursos lo hacen ideal tanto para servidores como para dispositivos de menor potencia, y es altamente valorado en entornos empresariales y académicos.</p>
          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux también ofrece una gran variedad de distribuciones que se adaptan a distintas necesidades y perfiles de usuario, desde principiantes hasta expertos. Su diseño basado en permisos y su estructura modular permiten un alto nivel de seguridad, que es difícil de igualar en otros sistemas operativos. Sin embargo, su uso puede presentar una curva de aprendizaje para quienes vienen de otros entornos, especialmente en lo que respecta al manejo de la línea de comandos.</p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Raymond Bustos Pérez</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux es mucho más que un simple sistema operativo; es un ecosistema completo que representa la esencia de la colaboración, la flexibilidad y la eficiencia en la informática moderna. Desde su creación, ha revolucionado la manera en que se desarrolla, comparte y utiliza la tecnología, demostrando que el software libre y de código abierto puede competir e incluso superar a las soluciones comerciales en términos de estabilidad, seguridad y adaptabilidad. Su arquitectura modular permite personalizaciones profundas, adecuándose tanto a las necesidades de un servidor de alto rendimiento como a un dispositivo móvil o un sistema embebido.</p>
          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Además, Linux es un pilar en la formación de desarrolladores y administradores de sistemas, brindándoles un entorno robusto para explorar conceptos avanzados como la gestión de procesos, memoria y redes. La comunidad de usuarios y desarrolladores de Linux sigue siendo uno de sus mayores activos, impulsando mejoras constantes y fomentando un ambiente de aprendizaje y cooperación.</p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Alondra Guadalupe Aguilar Moreno</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">En conclusión, Linux es un sistema operativo sólido y adaptable que sobresale en seguridad, eficiencia y arquitectura modular. Sus controles de acceso y autenticación avanzados, junto con la administración eficiente de memoria y concurrencia, lo hacen ideal para entornos de alto rendimiento y alta disponibilidad. Además, su flexibilidad permite su uso en una variedad de dispositivos, desde sistemas embebidos hasta supercomputadoras. Gracias a una comunidad activa y continua innovación, Linux sigue siendo una opción líder para organizaciones y usuarios que buscan estabilidad y control en sus sistemas.</p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Yahir Moreno Barajas</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux es un sistema operativo poderoso y flexible que ha revolucionado el mundo de la informática al ofrecer una plataforma abierta y colaborativa. Su naturaleza de código abierto permite que desarrolladores de todo el mundo contribuyan a su mejora constante, generando una comunidad activa y dinámica. Esta colaboración ha impulsado su evolución, dotándolo de una amplia variedad de distribuciones que satisfacen diferentes necesidades, desde el uso en servidores hasta dispositivos móviles y sistemas embebidos. La robustez, seguridad y capacidad de personalización de Linux lo convierten en una elección popular tanto para entusiastas como para profesionales de la tecnología, y su adopción sigue creciendo en sectores críticos como el científico, educativo y empresarial. Gracias a su adaptabilidad y libertad de uso, Linux fomenta el aprendizaje y la innovación, consolidándose como un pilar en el desarrollo tecnológico actual.</p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Ricardo Daniel Pérez Maldonado</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold"></p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Gerardo Haziel López Chávez</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Para concluir con este tema, solo me queda decir que linux es un sistema operativo de código abierto el cual nos permite a los usuarios modificar y distribuir el software libremente. Este es muy conocido debido a su alta seguridad, estabilidad y eficiencia en el uso de recursos siento este su punto fuerte frente a otros tipos de sistemas operativos. Además, de esto, Linux es muy flexible y personalizable, con una gran comunidad de usuarios y desarrolladores que contribuyen a su mejora continua. Se podría decir que linux es una opción poderosa y versátil para una amplia gama de aplicaciones tecnológicas tanto un poco obsoletas como las de las gamas actuales.</p>
        </div>

        <div class="flex flex-col">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">Cassandra Lisbeth Cruz Bernal</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Para concluir con este proyecto puedo mencionar que Linux se ha convertido a lo largo del tiempo en un sistema operativo muy esencial en el ámbito tecnológico ya que llega a ser muy flexible a la hora de trabajar con el. Además cuenta con una arquitectura robusta, eficiente manejo de memoria y un buen enfoque de seguridad, todas estas características hacen que este sistema operativo sea muy utilizado por muchos desarrolladores, empresas y usuarios que buscan algún sistema confiable y eficiente.</p>
        </div>

      </div>
    </div>
  )
}