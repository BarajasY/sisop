export const Fisica = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Memoria Física</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">La RAM determina si tu equipo puede manejar procesos que consumen mucha memoria.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Por ejemplo, necesitaremos al menos 1 GB de RAM para 1.000 activos que usen MongoDB en un servidor de producción. Para garantizar un rendimiento satisfactorio del servidor, la memoria física debe superar lo que necesita la base de datos. De lo contrario, MongoDB comenzará a utilizar la memoria de intercambio. Esto reducirá el rendimiento del sistema. La razón detrás de esto es que la memoria física es accesible en nanosegundos; la memoria de intercambio, solo en milisegundos.</p>
    
      <MemoryGraph />
    </div>
  )
}

export const MemoryGraph = () => {
  return (
    <div class="flex flex-col mt-5">
      <div class="w-full flex justify-center">
        <h1 class="text-center text-2xl font-bold text-purple-900 z-1 p-2 bg-gray-100">Memoria Física</h1>
      </div>

      <div class="flex h-0">
        <div class="h-20px w-2px bg-purple-900 z-0 -translate-y-22px" />
        <div class="h-2px w-full bg-purple-900 z-0 -translate-y-22px" />
        <div class="h-20px w-2px bg-purple-900 z-0 -translate-y-22px" />
      </div>

      <div class="flex w-full gap-2px">
        <div class="flex w-85% flex-col">
          <div class="w-full flex justify-center">
            <h1 class="text-center text-2xl font-bold text-purple-800 z-1 p-2 bg-gray-100">En uso</h1>
          </div>

          <div class="flex w-full">
            <div class="h-20px w-2px bg-purple-800 z-0 -translate-y-22px" />
            <div class="h-2px w-full bg-purple-800 z-0 -translate-y-22px" />
            <div class="h-20px w-2px bg-purple-800 z-0 -translate-y-22px" />
          </div>
        </div>
        <div class="flex w-15% flex-col">
          <div class="w-full flex justify-center">
            <h1 class="text-center text-2xl font-bold text-gray-800 z-1 p-2 bg-gray-100">Margen</h1>
          </div>

          <div class="flex w-full">
            <div class="h-20px w-2px bg-gray-800 z-0 -translate-y-22px" />
            <div class="h-2px w-full bg-gray-800 z-0 -translate-y-22px" />
            <div class="h-20px w-2px bg-gray-800 z-0 -translate-y-22px" />
          </div>
        </div>
      </div>

      <div class="flex w-full h-50px">
        <div class="w-85% bg-purple-800 rounded-s-lg" />
        <div class="w-15% bg-gray-800 rounded-e-lg" />
      </div>
    </div>
  )
}