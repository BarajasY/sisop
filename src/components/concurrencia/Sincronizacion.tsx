export const Sincronizacion = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit">Sincronización</h1>

      <p class="w-full p-2 text-xl text-rose-900 font-semibold">Para gestionar la concurrencia y evitar problemas de condiciones de carrera y inconsistencia de datos, Linux proporciona varios mecanismos de sincronización.</p>

      <div class="flex flex-col flex-grow gap-2 mt-5 mb-5">
        <div class="grid grid-cols-[150px_auto] gap-2">
          
          <p class=" flex items-center justify-center p-1 font-[consolas] text-lg rounded-lg bg-gray-8 text-rose-100 font-bold">Mutexes</p>
          <p class="p-2 bg-gray-8 rounded-lg text-rose-100 font-semibold text-base">Bloqueos que aseguran que solo un hilo a la vez pueda acceder a una sección crítica de código.</p>
        
          <p class=" flex items-center justify-center p-1 font-[consolas] text-lg rounded-lg bg-gray-8 text-rose-100 font-bold">Semáforos</p>
          <p class="p-2 bg-gray-8 rounded-lg text-rose-100 font-semibold text-base">Variables de sincronización que permiten el control de acceso a recursos limitados.</p>
        
          <p class=" flex items-center justify-center p-1 font-[consolas] text-lg text-center rounded-lg bg-gray-8 text-rose-100 font-bold">Spinlocks y Read-Write Locks</p>
          <p class="p-2 bg-gray-8 rounded-lg text-rose-100 font-semibold text-base flex items-center">Los spinlocks se utilizan en contextos donde los hilos pueden “esperar girando” hasta que el recurso esté libre, mientras que los read-write locks permiten múltiples lectores o un único escritor en una sección crítica.</p>
        
          <p class=" flex items-center justify-center p-1 font-[consolas] text-lg rounded-lg bg-gray-8 text-rose-100 font-bold">Futexes</p>
          <p class="p-2 bg-gray-8 rounded-lg text-rose-100 font-semibold text-base">Proporcionan sincronización eficiente sin hacer llamadas al sistema si no es necesario, lo que reduce el consumo de recursos para tareas concurrentes.</p>
        
        </div>
      </div>
    </div>
  )
}