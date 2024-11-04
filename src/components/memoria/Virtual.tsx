export const Virtual = () => {
  return (
    <div class="flex flex-col w-full">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Memoria Virtual</h1>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">La memoria de Linux se compone de la memoria física, también conocida como RAM, y el espacio de intercambio, conocido como memoria swap. La memoria virtual es el nombre que se le da a toda la memoria de Linux.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">La regla por lo general es que, la memoria swap debe ser el doble a la memoria física. Es decir, con 4 GB de RAM se recomienda 8 GB de memoria swap, por un total de 12 GB de memoria virtual.</p>

      <MemoryGraph />

      <p class="w-full p-2 text-xl text-purple-900 font-semibold mt-10 leading-relaxed">Para conocer la cantidad y el tipo de memoria RAM que tiene un sistema Linux, se puede abrir la consola de comandos y ejecutar el comando <span class="font-[consolas] font-bold py-1 px-2 bg-gray-800 text-purple-200 rounded-md">sudo dmidecode --type memory | less</span>. El resultado será una tabla con información sobre la memoria RAM, como la cantidad de memoria instalada, el número de módulos y el tipo de memoria. </p>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold mt-2 leading-relaxed">Para saber el uso actual de la memoria, la memoria libre o total, se puede utilizar el comando <span class="font-[consolas] font-bold py-1 px-2 bg-gray-800 text-purple-200 rounded-md">free</span>. </p>

      
    </div>
  )
};

export const MemoryGraph = () => {
  return (
    <div class="flex flex-col mt-5">
      <div class="w-full flex justify-center">
        <h1 class="text-center text-2xl font-bold text-purple-900 z-1 p-2 bg-gray-100">Memoria Virtual (12 GB)</h1>
      </div>

      <div class="flex h-0">
        <div class="h-20px w-2px bg-purple-900 z-0 -translate-y-22px" />
        <div class="h-2px w-full bg-purple-900 z-0 -translate-y-22px" />
        <div class="h-20px w-2px bg-purple-900 z-0 -translate-y-22px" />
      </div>

      <div class="flex w-full gap-2px">
        <div class="flex w-33% flex-col">
          <div class="w-full flex justify-center">
            <h1 class="text-center text-2xl font-bold text-purple-800 z-1 p-2 bg-gray-100">Memoria RAM (4 GB)</h1>
          </div>

          <div class="flex w-full">
            <div class="h-20px w-2px bg-purple-800 z-0 -translate-y-22px" />
            <div class="h-2px w-full bg-purple-800 z-0 -translate-y-22px" />
            <div class="h-20px w-2px bg-purple-800 z-0 -translate-y-22px" />
          </div>
        </div>
        <div class="flex w-67% flex-col">
          <div class="w-full flex justify-center">
            <h1 class="text-center text-2xl font-bold text-gray-800 z-1 p-2 bg-gray-100">Memoria Swap (8 GB)</h1>
          </div>

          <div class="flex w-full">
            <div class="h-20px w-2px bg-gray-800 z-0 -translate-y-22px" />
            <div class="h-2px w-full bg-gray-800 z-0 -translate-y-22px" />
            <div class="h-20px w-2px bg-gray-800 z-0 -translate-y-22px" />
          </div>
        </div>
      </div>

      <div class="flex w-full h-50px">
        <div class="w-33% bg-purple-800 rounded-s-lg" />
        <div class="w-67% bg-gray-800 rounded-e-lg" />
      </div>
    </div>
  )
}