export const Kernel = () => {
  return (
    <div class="flex flex-col w-full items-center mt-5">
      <div class=" w-80% flex flex-col gap-5">
        <h1 class="p-2 text-3xl text-sky-700 font-bold border-b-1px border-b-solid border-b-sky-500 w-fit">Espacio de Kernel</h1>

        <div class="w-full flex justify-start">
          <p class="p-2 bg-sky-700 rounded-lg w-fit text-sky-100 px-3 font-semibold text-xl">Es el espacio en donde toda la funcionalidad del kernel de Linux opera.</p>
        </div>

        <div class="w-full flex justify-end">
          <p class="p-2 bg-sky-700 rounded-lg w-80% text-sky-100 px-3 font-semibold text-xl">Ofrece una API disponible para ser usada por aplicaciones de usuario por medio de la interfaz de sistema.</p>
        </div>

        <div class="w-full flex justify-start">
          <p class="p-2 bg-sky-700 rounded-lg text-sky-100 px-3 font-semibold text-xl w-80%">El kernel tiene una estructura modular, por lo que se puede extender tanto como el desarrollador lo quiera, esto, sin afectar el resto del sistema. Los drivers que se instalan al utilizar un nuevo dispositivo son un ejemplo del alcance de esta modularidad.</p>
        </div>
      </div>
    </div>
  )
}