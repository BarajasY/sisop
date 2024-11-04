export const Jerarquia = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Jerarquía del sistema de archivos</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">A diferencia de sistemas como Windows, donde los archivos se dividen según las unidades de almacenamiento (C:, D:, etc.), Linux tiene una estructura de árbol que comienza en un directorio raíz, denotado como /. Todos los demás archivos y directorios se ramifican desde aquí.</p>
    
      <div class="flex-grow flex justify-center items-center mt-10">
        <Rutas />
      </div>
    </div>
  )
};

const Rutas = () => {
  return (
    <div class="grid w-200 gap-2 grid-cols-[100px_auto]">
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/</p>
      <p class="p-2 border-purple-8 font-semibold border-2px border-solid text-purple-900 rounded-lg">El directorio raíz. Todo comienza aquí.</p>

      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/bin</p>
      <p class="p-2 border-purple-8 border-2px font-semibold rounded-lg border-solid text-purple-900">Almacena los comandos binarios esenciales que son necesarios tanto en modo de usuario como en modo de recuperación.</p>

      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/etc</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Contiene todos los archivos de configuración del sistema.</p>
      
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/home</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Directorio donde se almacenan los archivos personales de los usuarios.</p>
      
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/var</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Almacena archivos variables como logs y bases de datos.</p>

      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/usr</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Contiene archivos y directorios compartidos a nivel de usuario, como programas y bibliotecas</p>
      
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/boot</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Aquí residen los archivos de arranque y el kernel.</p>
      
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/dev</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Almacena archivos de dispositivo, representando hardware como discos duros o dispositivos de entrada.</p>
      
      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/proc</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Un sistema de archivos virtual que documenta el estado del sistema en tiempo real.</p>

      <p class="font-[consolas] font-bold text-purple-200 bg-gray-8 p-2 rounded-lg flex items-center justify-center">/tmp</p>
      <p class="p-2 border-purple-8 border-2px border-solid text-purple-900 font-semibold rounded-lg">Directorio para almacenar archivos temporales.</p>

    </div>
  )
}