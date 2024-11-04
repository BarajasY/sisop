import { For } from "solid-js"

export const Niveles = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Niveles de seguridad</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Linux ofrece múltiples niveles de seguridad para proteger el sistema y los datos, que pueden agruparse en las siguientes categorías.</p>

      <div class="flex flex-grow justify-center items-center">
        <ListaNiveles />
      </div>
    </div>
  )
}

const ListaNiveles = () => {

  const niveles = [
    {
      name: 'Nivel de Usuario',
      features: [
        {
          description: 'Permisos de archivo: Los permisos de lectura, escritura y ejecución se asignan a los propietarios de archivos, grupos y otros usuarios.'
        },
        {
          description: 'Control de acceso: Mediante listas de control de acceso (ACL), se pueden definir permisos más detallados para usuarios específicos.'
        },
        {
          description: 'Roles y sudo: El comando sudo permite a usuarios ejecutar comandos con permisos de superusuario temporalmente, lo que minimiza el riesgo de tener múltiples usuarios con privilegios completos.'
        },
      ]
    },
    {
      name: 'Nivel de Sistema',
      features: [
        {
          description: 'Autenticación de usuarios: Sistemas como PAM (Pluggable Authentication Module) gestionan la autenticación de usuarios y los métodos de acceso.'
        },
        {
          description: 'Gestión de contraseñas: Configuraciones como el uso de contraseñas fuertes, el vencimiento de las mismas y el bloqueo después de varios intentos fallidos aumentan la seguridad.'
        },
        {
          description: 'Logs y monitoreo: Archivos de registro (/var/log) permiten monitorear y auditar actividades en el sistema.'
        },
      ]
    },
    {
      name: 'Nivel de Red',
      features: [
        {
          description: 'Firewall (iptables/nftables): Controla el tráfico de red mediante reglas que permiten o bloquean conexiones.'
        },
        {
          description: 'SELinux y AppArmor: Estas herramientas de control de acceso obligatorio limitan las acciones que los programas pueden realizar, incluso si son comprometidos.'
        },
        {
          description: 'TCP Wrappers: Proporciona control de acceso a servicios de red a través de archivos de configuración como /etc/hosts.allow y /etc/hosts.deny.'
        },
      ]
    },
    {
      name: 'Nivel de Aplicación',
      features: [
        {
          description: 'Configuración segura de aplicaciones: Las aplicaciones deben configurarse de forma segura y mantener las últimas actualizaciones.'
        },
        {
          description: 'Sandboxes: Algunas aplicaciones pueden ejecutarse en un entorno aislado o “sandbox” para limitar su impacto en el sistema en caso de un compromiso.'
        },
      ]
    },
    {
      name: 'Física',
      features: [
        {
          description: 'Cifrado de disco: Herramientas como LUKS pueden cifrar el disco completo, protegiendo los datos en caso de pérdida o robo del equipo.'
        },
        {
          description: 'Desactivación de puertos no utilizados: Limita el acceso físico a través de puertos como USB.'
        },
      ]
    },
  ]

  return (
    <div class="grid grid-cols-3 gap-2 mt-5">
      <For
        each={niveles}
      >
        {(item) => (
          <div class="p-2 flex flex-col rounded-lg border-2px border-solid border-emerald-8">
            <p class="font-bold font-[consolas] text-xl text-emerald-800 flex items-center justify-center pb-3 border-b-solid border-b-emerald-8 border-b-1px">{item.name}</p>
            <div class="flex flex-col gap-2 mt-2">
              <For
                each={item.features}
              >
                {desc => (
                  <p class="font-semibold text-emerald-8 text-base">{desc.description}</p>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}