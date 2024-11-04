import { For } from "solid-js"

export const Procesos = () => {

  const states = [
    {
      name: 'En ejecución',
      description: "El proceso se está ejecutando y está consumiendo recursos de CPU o hilos."
    },
    {
      name: 'Ejecutable',
      description: "El proceso está listo para ejecutarse y está en lista para próximamente ser ejecutado. Esto puede ocurrir cuando muchos procesos están listos pero no existe suficiente CPU en la máquina para correrlos todos, por lo que se alinean."
    },
    {
      name: 'En espera interrumpible',
      description: "Cuando un proceso está en ejecución, pero tiene que esperar por datos para utilizar (como peticiones HTTP o input en consola), una aplicación bien codificada pondría el proceso en espera. Detener estos procesos sería trivial y no tendría efectos colaterales."
    },
    {
      name: 'En espera ininterrumpible',
      description: "El proceso está esperando alguna instrucción importante (usualmente una syscall del kernel), por lo que interrumpirlo causaría daños a los archivos en uso. Al utilizar el comando mkdir, el proceso hace un syscall al kernel y entra por un periodo muy breve en este estado."
    },
    {
      name: 'Detenido',
      description: "Es un proceso el cual ha sido suspendido (por el usuario, por ejemplo). Este caso se puede dar en aplicaciones de consola al usar CTRL + Z."
    },
    {
      name: 'Zombie',
      description: "Cuando el proceso se ha terminado de ejecutar, entra en estado Zombie hasta que el CPU haga una limpia y remueva todos los procesos de la memoria que han terminado de ejecutarse."
    },
  
  ]

  return (
    <div class="flex flex-col w-full items-center pb-30">
      <div class=" w-80% flex flex-col gap-5">
        <h1 class="p-2 text-3xl text-gray-700 font-bold border-b-1px border-b-solid border-b-gray-500 w-fit">Procesos</h1>

        <div class="w-full flex justify-start">
          <p class="p-2 bg-gray-700 rounded-lg w-full text-gray-100 px-3 font-semibold text-xl">Cada programa que se ejecuta dentro de Linux se tomará como un proceso independiente. A este proceso se el asigna su propio espacio de memoria y recursos de CPU.</p>
        </div>
        <div class="w-full flex-col items-center flex justify-center">
          <h1 class="text-gray-700 font-bold py-2px">Estados de un proceso</h1>
          <div class="flex flex-col w-800px p-2 bg-gray-700 rounded-md divide-y-2px divide-gray-300 divide-solid divide-x-none">
            <For
              each={states}
            >
              {i => (
                <div class="w-full grid grid-cols-[140px_auto] divide-gray-5">
                  <p class="p-2 font-semibold text-gray-100 border-r-2px border-r-gray-300 border-r-solid">{i.name}</p>
                  <p class="p-2 text-gray-100 font-semibold pl-3">{i.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}