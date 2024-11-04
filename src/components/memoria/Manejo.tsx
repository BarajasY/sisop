export const Manejo = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Manejo del sistema de archivos</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Linux proporciona numerosas herramientas para gestionar y explorar el sistema de archivos, incluidos comandos como ls, cd, mkdir, rmdir, cp, mv, y muchos más. Estos comandos son fundamentales para la navegación y gestión eficiente del sistema de archivos.</p>


      <div class="flex flex-grow justify-center items-center p-2">
        <Comandos />
      </div>
    </div>
  )
};

const Comandos = () => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">ls: Lista los archivos y directorios en el directorio actual. Puedes usar opciones como -l para una lista detallada o -a para mostrar archivos ocultos.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="text-violet-400 font-[consolas]">ls</span>&nbsp;-la</p>
      </div>

      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">cd: Cambia el directorio de trabajo. Puedes usar rutas absolutas o relativas.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="font-[consolas] text-violet-400">cd</span>&nbsp;/ruta/al/directorio</p>
      </div>

      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">mkdir: Crea un nuevo directorio.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="text-violet-400 font-[consolas]">mkdir</span>&nbsp;nombre_directorio</p>
      </div>

      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">rmdir: Elimina un directorio vacío.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="text-violet-400 font-[consolas]">rmdir</span>&nbsp;nombre_directorio</p>
      </div>

      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">mv: Mueve o renombra archivos y directorios.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="text-violet-400 font-[consolas]">mv</span>&nbsp;archivo_origen archivo_destino</p>
      </div>

      <div class="flex flex-col">
        <p class="text-purple-900 font-bold text-lg">find: Busca archivos y directorios en una jerarquía de directorios. Puedes usar varios criterios de búsqueda.</p>
        <p class="p-2 bg-gray-900 text-purple-200 font-[consolas] text-lg text-center flex items-center rounded-lg"><span class="text-violet-400 font-[consolas]">find</span>&nbsp;/ruta name "nombre_archivo"</p>
      </div>

    </div>
  )
}