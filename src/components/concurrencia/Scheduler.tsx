export const Scheduler = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit">Scheduler</h1>

      <p class="w-full p-2 text-xl text-rose-900 font-semibold">El planificador de CPU es el componente central que decide cómo distribuir el tiempo de CPU entre procesos y hilos en el sistema. Linux utiliza un planificador de tareas completamente justo (CFS), diseñado para asegurar que cada tarea reciba una porción de tiempo de CPU de manera equitativa.</p>
      <p class="w-full p-2 text-xl text-rose-900 font-semibold">El planificador tiene en cuenta la prioridad de cada proceso (los valores <span class="font-extrabold">nice</span> y <span class="font-extrabold">renice</span>) y utiliza una cola de procesos donde organiza estos procesos de acuerdo con su prioridad y otros factores, como el tiempo que llevan ejecutándose y el tipo de tarea (interactiva o de procesamiento intensivo).</p>
    </div>
  )
}