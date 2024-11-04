export const Partes = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Partes del sistema de archivos</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">El sistema de ficheros Linux le permite al usuario crear, borrar y acceder a los ficheros sin necesidad de saber el lugar exacto en el que se encuentran. No existen unidades físicas, sino ficheros que hacen referencia a ellas, integrados en la estructura de ficheros, como cualquier otro.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">El sistema de ficheros Linux consta de varias partes importantes: superbloque, tabla de inodos y área de datos.</p>

      <Bloques />
    </div>
  )
}

const Bloques = () => {
  return (
    <div class="flex flex-col flex-grow mt-5 gap-1">
      <div class="flex flex-grow items-center justify-center p-2 bg-purple-9 flex-col rounded-lg">
        <p class="text-purple-100 font-extrabold font-[consolas] text-2xl">Superbloque</p>
        <p class="text-purple-100 font-semibold">Contiene la información sobre el sistema de ficheros</p>
      </div>

      <div class="border-1px border-purple-900 border-dotted p-2 flex justify-center items-center flex-col rounded-lg">
        <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Tabla de Inodos</p>
        <p class="text-purple-900 font-semibold">Es el equivalente a las entradas de la FAT. Cada inodo contiene información de un fichero o directorio</p>

        <div class="w-full grid grid-cols-3 gap-2 mt-2">
          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Identificador del dispositivo</p>
            <p class="text-purple-900 font-semibold">Del dispositivo que alberga al sistema de ficheros Linux.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Número de inodo</p>
            <p class="text-purple-900 font-semibold">Identifica al archivo dentro del sistema de archivos.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Longitud del archivo</p>
            <p class="text-purple-900 font-semibold">En bytes</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Identificador del usuario creador</p>
            <p class="text-purple-900 font-semibold">Propietario del archivo con derechos diferenciados.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Identificador de grupo</p>
            <p class="text-purple-900 font-semibold">Grupo de usuarios con derechos diferenciados.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Modo de acceso</p>
            <p class="text-purple-900 font-semibold">Capacidad de leer, escribir y ejecutar el archivo por parte del propietario, del grupo y de otros usuarios.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Marcas de tiempo</p>
            <p class="text-purple-900 font-semibold">Fechas de última modificación (ntime), acceso (atime) y de alteración del propio inodo (ctime).</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Número de enlaces (hard links)</p>
            <p class="text-purple-900 font-semibold">El número de nombres (entradas de directorio) asociadas a este inodo.</p>
          </div>

          <div class="flex flex-col border-solid border-1px border-purple-900 rounded-lg p-2">
            <p class="text-purple-900 font-extrabold font-[consolas] text-2xl">Área de datos</p>
            <p class="text-purple-900 font-semibold">En esta zona se encuentran almacenados los ficheros y directorios de nuestro sistema.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-grow items-center justify-center p-2 bg-purple-9 flex-col rounded-lg">
        <p class="text-purple-100 font-extrabold font-[consolas] text-2xl">Area de datos</p>
        <p class="text-purple-100 font-semibold">Cada bloque es de 512 bytes o de múltiplos de 512. Por cada fichero, Linux tiene asociado un elemento en esta tabla que contiene un número. Este número identifica la ubicación del archivo dentro del área de datos.</p>
      </div>
    </div>
  )
}