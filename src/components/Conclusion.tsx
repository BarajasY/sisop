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

      <div class="flex w-60% gap-5 mb-10 justify-center items-center flex-col text-justify mt-10">
        <div class="flex flex-col mb-10">
          <h1 class="p-2 text-3xl text-teal-900 font-bold border-b-1px border-b-solid border-b-teal-500 w-fit">General</h1>

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux es un sistema operativo que ha transformado la tecnología moderna gracias a su modelo de desarrollo abierto y a la comunidad global que lo respalda. Nació como un proyecto impulsado por la curiosidad y la creatividad, y ha evolucionado hasta convertirse en una de las plataformas más confiables y adaptables del mundo, utilizada en todo tipo de dispositivos, desde computadoras personales y servidores hasta supercomputadoras, dispositivos móviles y sistemas embebidos. La filosofía de Linux, basada en el software libre y en el poder de la colaboración, permite que millones de desarrolladores, empresas e instituciones de cualquier ámbito puedan acceder a su código fuente, adaptarlo y mejorar constantemente sus funcionalidades.</p>
          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Además de su flexibilidad, Linux destaca por su estabilidad y seguridad, lo que lo convierte en una opción privilegiada para entornos críticos como el empresarial, el científico y el gubernamental, donde la confiabilidad y la protección de datos son esenciales. Muchas distribuciones de Linux, cada una con sus particularidades, ofrecen configuraciones optimizadas para diferentes usos, desde entornos minimalistas y ligeros hasta sistemas completos orientados a servidores o desarrollo de software. Esto permite que cada usuario, ya sea un principiante o un experto, pueda encontrar una distribución que se adapte a sus necesidades y preferencias.</p>
          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux también fomenta el aprendizaje y el desarrollo de habilidades técnicas; su enfoque en el acceso abierto a sus entrañas hace que los usuarios puedan experimentar y aprender sobre el funcionamiento interno de un sistema operativo de una manera que otros sistemas privativos no permiten. Al mismo tiempo, contribuye a la democratización de la tecnología al ser gratuito y accesible, abriendo oportunidades para quienes buscan una alternativa libre de costos de licencia.</p>
          <p class="w-full p-2 text-xl text-teal-900 font-semibold">La comunidad global que respalda Linux, compuesta por desarrolladores, profesionales y entusiastas, es uno de sus mayores activos, ya que impulsa mejoras, innovaciones y la resolución de problemas de manera continua. Linux no es solo un sistema operativo, sino un ecosistema que encarna los valores de la colaboración, la transparencia y la libertad, y su impacto seguirá creciendo a medida que más personas y organizaciones opten por adoptar esta plataforma abierta, que sigue redefiniendo el mundo de la informática y la tecnología en general.</p>
        </div>

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

          <p class="w-full p-2 text-xl text-teal-900 font-semibold">Linux es un sistema operativo que con el paso del tiempo se ha vuelto escencial para empresas  enfocadas a las tecnologías de la información; su interfaz de línea de comandos y código abierto hace que sea amado por muchos programadores y amantes de la informática. Su corazón de código abierto para muchos lo más importante, hace que se pueda modificar, utilizar y redistribuir por cualquier persona, u empresa; lo cual ha generado diferentes versiones o distribuciones basados en Linux como Ubuntu, Fedora, RedHad entre otros. Esto también implica la personalización de su entorno visual, es gratuito, a nivel de usuario solo tiene pocas amenazas, sus actualizaciones son diarias contribuidas por programadores y hay grandes comunidades que se apoyan en el soporte de Linux. Con un gran potencial de linux dominando su terminal se pueden realizar muchas cosas que en otros  sistemas no se puede realizar. Muchas veces nos enfocamos solo en los sistemas operativos basicos; sin probar algo nuevo que nos pueda brindar más conocimiento, experiencia como Linux que al punto de vista personal; ya es muy requerido en el área laboral.</p>
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