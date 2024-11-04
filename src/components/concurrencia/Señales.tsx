import { For } from "solid-js"

export const Señales = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit">Señales</h1>

      <p class="w-full p-2 text-xl text-rose-900 font-semibold">Las señales son mecanismos que permiten al kernel notificar eventos a los procesos. Los procesos pueden implementar manejadores de señales para manejar interrupciones.</p>
      <p class="w-full p-2 text-xl text-rose-900 font-semibold">Existe un gran repertorio de señales y estas cambian dependiendo el sistema operativo, aquí algunas menciones de algunas señales.</p>


      <div class="flex flex-grow justify-center items-center mt-3">
        <TablaSeñales />
      </div>
    </div>
  )
}

export const TablaSeñales = () => {

  const signal = [
    {
      name: 'SIGABRT',
      description: 'Señal de aborto. Generalmente se envía cuando un programa detecta una condición interna grave, como una corrupción de memoria'
    },
    {
      name: 'SIGALRM',
      description: 'Señal de alarma. Se utiliza para implementar temporizadores y alarmas'
    },
    {
      name: 'SIGCHLD',
      description: 'Señal de hijo. Se envía a un proceso padre cuando uno de sus hijos termina, se detiene o se reanuda.'
    },
    {
      name: 'SIGINT',
      description: 'Señal de interrupción. Generalmente se genera al presionar Ctrl+C en la terminal, y se utiliza para interrumpir un proceso.'
    },
    {
      name: 'SIGKILL',
      description: 'Señal de muerte. Esta señal no puede ser capturada ni ignorada, y se utiliza para terminar un proceso inmediatamente.'
    },
    {
      name: 'SIGPIPE',
      description: 'Señal de tubería rota. Se envía a un proceso que intenta escribir en una tubería que ha sido cerrada por el otro extremo.'
    },
    {
      name: 'SIGQUIT',
      description: 'Señal de salida. Similar a SIGINT, pero generalmente produce un volcado de núcleo (core dump) para facilitar la depuración.'
    },
    {
      name: 'SIGBUS',
      description: 'Señal de error de bus. Se genera cuando hay un error en una operación de acceso a memoria.'
    },
    {
      name: 'SIGSTOP',
      description: 'Señal de parada. Suspende la ejecución de un proceso.'
    },
    {
      name: 'SIGSEGV',
      description: 'Señal de violación de segmento. Se genera cuando un proceso intenta acceder a una dirección de memoria inválida.'
    },
  ]


  return (
    <div class="grid w-200 gap-2 grid-cols-[100px_auto]">
      <For
        each={signal}
      >
        {(i) => (
          <>
            <p class="font-[consolas] font-bold text-rose-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">{i.name}</p>
            <p class="p-2 border-rose-8 font-semibold border-2px border-solid text-rose-900 rounded-lg">{i.description}</p>
          </>
        )}
      </For>
    </div>
  )
}