export const Hilos = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit">Hilos</h1>

      <p class="w-full p-2 text-xl text-rose-900 font-semibold">En Linux, un proceso es una instancia de un programa que tiene su propio espacio de memoria, mientras que los hilos (threads) son subprocesos que comparten el mismo espacio de memoria del proceso padre.</p>
      <p class="w-full p-2 text-xl text-rose-900 font-semibold">Linux implementa hilos a través de su sistema de procesos usando el llamado modelo de hilos de un nivel, donde los hilos y los procesos son manejados de la misma forma por el kernel (a través de llamadas como clone()).</p>
      <p class="w-full p-2 text-xl text-rose-900 font-semibold">La librería pthreads (POSIX Threads) permite crear y gestionar hilos dentro de un proceso, lo cual facilita realizar tareas concurrentes dentro del mismo espacio de memoria.</p>

      <div class="grid grid-cols-2 gap-2 mt-4">
        <div class="flex flex-col flex-grow p-2 border-2px border-solid border-rose-700 rounded-lg">
          <h1 class="text-rose-800 font-bold text-xl">Hilos de Kernel</h1>
          <p class="text-gray-800 font-semibold text-lg">Linux utiliza hilos de kernel para tareas internas, como la gestión de dispositivos y tareas de sistema, que se ejecutan en segundo plano. Estos hilos están completamente gestionados por el kernel.</p>
        </div>

        <div class="flex flex-col flex-grow p-2 border-2px border-solid border-rose-700 rounded-lg">
          <h1 class="text-rose-800 font-bold text-xl">Hilos de Usuario</h1>
          <p class="text-gray-800 font-semibold text-lg">Gestionan a nivel de espacio de usuario, y el kernel los considera como tareas separadas si están basados en la interfaz clone() o pthread. Estos hilos son utilizados por aplicaciones y permiten mayor control sobre la concurrencia en aplicaciones de usuario.</p>
        </div>
      </div>
    </div>
  )
}

// export const Hilos = () => {
//   return (
//     <div class="flex flex-col w-full mt-10">
//       <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit"></h1>

//       <p class="w-full p-2 text-xl text-rose-900 font-semibold"></p>
//     </div>
//   )
// }