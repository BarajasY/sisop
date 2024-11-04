export const Permisos = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Permisos y Propietarios</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Una parte integral del sistema de archivos de Linux es cómo maneja los permisos. Cada archivo y directorio tiene un propietario y un grupo asociado. Además, tiene un conjunto de permisos que determina quién puede leer, escribir o ejecutar un archivo.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Por ejemplo, un archivo con permisos rwxr-xr-- indica que el propietario puede leer, escribir y ejecutar el archivo. Los miembros del grupo pueden leer y ejecutar, y otros usuarios solo pueden leerlo.</p>
    </div>
  )
};