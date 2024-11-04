import { For } from "solid-js"

export const Autentificacion = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Autentificación</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Proceso de verificar la identidad de un usuario o de un servicio antes de permitirle el acceso al sistema o a ciertos recursos. En Linux, como en otros sistemas operativos, la autenticación es una medida de seguridad fundamental para proteger el sistema y sus datos.</p>

      <div class="flex flex-grow justify-center items-center">
        <TablaAutentificacion />
      </div>
    </div>
  )
}

const TablaAutentificacion = () => {

  const auth = [
    {
      name: 'Contraseñas',
      description: 'Es el método más común y consiste en la verificación del usuario mediante una combinación de nombre de usuario y contraseña. Linux permite configurar políticas de contraseñas (longitud mínima, complejidad, caducidad) y herramientas como passwd para administrarlas.'
    },
    {
      name: 'Basada en llaves',
      description: 'En lugar de contraseñas, los usuarios pueden autenticarse en servicios de red (como SSH) mediante pares de llaves (pública y privada). Esto ofrece mayor seguridad que las contraseñas, ya que una clave privada es más difícil de adivinar o interceptar.'
    },
    {
      name: 'Dos factores',
      description: 'Linux puede integrarse con aplicaciones de 2FA (por ejemplo, Google Authenticator o Authy) para solicitar un segundo factor de autenticación, como un código temporal, además de la contraseña. Esto protege contra accesos no autorizados incluso si la contraseña es comprometida.'
    },
    {
      name: 'Certificados digitales',
      description: "Los certificados digitales permiten la autenticación en redes y sistemas de manera segura. Se usan en entornos donde la autenticación segura es crítica, ya que los certificados son difíciles de falsificar."
    },
    {
      name: 'Autenticación biométrica',
      description: "Linux soporta autenticación biométrica (como huellas digitales) en dispositivos compatibles. Esto añade una capa de seguridad adicional y suele usarse en sistemas físicos."
    },
    {
      name: 'Basada en tókens',
      description: "Consiste en dispositivos físicos o aplicaciones que generan tokens únicos para la autenticación. Estos tokens son utilizados como un factor adicional, generalmente en sistemas de alta seguridad."
    }
  ]

  return (
    <div class="flex flex-col w-80% gap-2 mt-5 mb-5">
      <For
        each={auth}
      >
        {(v) => (
          <div class="grid grid-cols-[150px_auto] gap-2">
            <p class="flex items-center text-center justify-center p-1 font-[consolas] text-lg rounded-lg bg-gray-8 text-emerald-100 font-bold">{v.name}</p>
            <p class="p-2 bg-gray-8 rounded-lg text-emerald-100 font-semibold text-base">{v.description}</p>
          </div>
        )}
      </For>
    </div>
  )
}