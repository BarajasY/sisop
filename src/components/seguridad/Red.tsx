import { For } from "solid-js"

export const Red = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Seguridad de Red</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Los sistemas operativos Linux se han hecho inmensamente populares entre los desarrolladores web, que crean aplicaciones en servidores, routers, teléfonos móviles e incluso algunos ordenadores de sobremesa. Estos sistemas operativos se eligen con frecuencia para alimentar bases de datos que albergan información sensible. Además, a menudo se asigna una potencia de cálculo considerable para su funcionamiento. Sin embargo, esta amplia utilización también los expone a una variedad de posibles vectores de ataque externos e internos. A continuación se hablará sobre algunos de los vectores de ciberataque más frecuentes dirigidos contra la seguridad de las redes Linux, así como estrategias para contrarrestarlos.</p>

      <div class="flex flex-grow justify-center items-center">
        <TablaRed />
      </div>
    </div>
  )
}

export const TablaRed = () => {
  
  const red = [
    {
      name: 'Vectores de ataque',
      description: 'Incluyen vulnerabilidades en protocolos de red y aplicaciones con puertos abiertos, así como ataques a la cadena de suministro de software. La explotación de estas brechas permite a los atacantes comprometer el sistema.'
    },
    {
      name: 'Fortalecimiento de la red',
      description: 'El uso de cortafuegos como nftables, que reemplaza a iptables, mejora la seguridad y el rendimiento, especialmente frente a ataques DDoS.'
    },
    {
      name: 'Defensa contra DDos',
      description: 'La mitigación incluye el filtrado de tráfico, el uso de CDNs y servicios de protección en la nube, lo que ayuda a mantener la accesibilidad del sistema durante un ataque.'
    },
    {
      name: 'SSH',
      description: 'Configurar SSH de forma segura es esencial, desactivando el acceso root y usando autenticación basada en claves para prevenir ataques.'
    },
    {
      name: 'Ransomware y Parches',
      description: 'Mantener el sistema actualizado es clave para evitar ransomware. Las organizaciones recurren al parcheo en tiempo real para minimizar interrupciones, utilizando herramientas como KernelCare.'
    },
    {
      name: 'Ataques internos',
      description: 'Los usuarios de sistemas compartidos pueden ser vectores de malware. Sistemas como SELinux y AppArmor agregan una capa de control para limitar el acceso de procesos maliciosos.'
    },
    {
      name: 'Escalada de privilegios',
      description: 'Configurar sudo correctamente y aplicar privilegios mínimos evita que usuarios escalen sus permisos. La contenedorización con systemd también limita el impacto de posibles ataques internos.'
    },
  ]
  
  return (
    <div class="flex flex-col flex-grow gap-2 mt-5 mb-5">
    <For
      each={red}
    >
      {(v) => (
        <div class="grid grid-cols-[150px_auto] gap-2">
          <p class=" flex text-center items-center justify-center p-1 font-[consolas] text-lg rounded-lg bg-gray-8 text-emerald-100 font-bold">{v.name}</p>
          <p class="p-2 bg-gray-8 rounded-lg text-emerald-100 font-semibold text-base">{v.description}</p>
        </div>
      )}
    </For>
  </div>
  )
}