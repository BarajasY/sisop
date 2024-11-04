export const Troubleshoot = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Problemas de memoria</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Los problemas de hardware pueden afectar directamente la optimización de la memoria. Digamos que tu sitio web funciona con lentitud y que un programa local se ha ralentizado. Para ver si esto se debe a un problema de RAM, deberás quitar los módulos de RAM y probarlos para determinar cuál es el culpable.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold"><span class="px-2 py-1 font-[consolas] bg-gray-800 text-purple-300 font-semibold rounded-md">dmidecode</span> puede ayudar a recuperar información de hardware del sistema mientras comprueba si hay problemas de hardware. La herramienta <span class="px-2 py-1 font-[consolas] bg-gray-800 text-purple-300 font-semibold rounded-md">dmidecode</span> ayuda a mostrar el BIOS de gestión del sistema en el contenido de la tabla</p>
    </div>
  )
}