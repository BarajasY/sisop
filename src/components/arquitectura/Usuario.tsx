import { For } from "solid-js"

export const EspacioDeUsuario = () => {

  const commands = [
    {
      command: 'ls',
      description: 'Enlista los archivos en el actual directorio.'
    },
    {
      command: 'cd [nombre]',
      description: 'Comando "Change directory" cambia al directorio que se establezca'
    },
    {
      command: 'mkdir [nombre]',
      description: 'Crea un directorio con el nombre que se establezca.'
    },
    {
      command: 'mv [nombre] [nombre o directorio]',
      description: 'Mueve un archivo al directorio establecido o lo renombra al nombre ofrecido.'
    },
    {
      command: 'rm [nombre]',
      description: 'Borra el archivo con el nombre otorgado. También puede remover directorios con -r'
    },
    {
      command: 'cat [nombre]',
      description: 'Muestra los contenidos de un archivo.'
    },
    {
      command: 'ps',
      description: 'Muestra los procesos activos.'
    },
    {
      command: 'kill [id]',
      description: 'Elimina el proceso con el id entregado.'
    },
    {
      command: 'chmod [permiso] [archivo]',
      description: 'Cambia los permisos de escritura y lectura de archivos.'
    },
    {
      command: 'ipconfig',
      description: 'Enseña la configuración de red del dispositivo actual.'
    },
    {
      command: 'sudo [comando] [usuario]',
      description: 'Permite ejecutar comandos con los permisos de otro usuario.'
    },
  ]

  return (
    <div class="flex flex-col w-full items-center mt-5 mb-5">
      <div class=" w-80% flex flex-col gap-5">
        <h1 class="p-2 text-3xl text-sky-700 font-bold border-b-1px border-b-solid border-b-sky-500 w-fit">Espacio de Usuario</h1>

        <div class="w-full flex justify-start">
          <p class="p-2 bg-sky-700 rounded-lg w-fit text-sky-100 px-3 font-semibold text-xl">Se ofrecen versiones simplificadas de funciones para trabajar con archivos, memoria...</p>
        </div>

        <div class="w-full flex justify-end">
          <p class="p-2 bg-sky-700 rounded-lg w-fit text-sky-100 px-3 font-semibold text-xl">Incluye interfaces de línea de comandos para interactuar con el sistema.</p>
        </div>

        <div class="w-full flex justify-end">
          <p class="p-2 bg-sky-700 rounded-lg w-fit text-sky-100 px-3 font-semibold text-xl">Ejempos: Bash, Zsh y Fish.</p>
        </div>


        <div class="w-full flex justify-start">
          <p class="p-2 bg-sky-700 rounded-lg text-sky-100 px-3 font-semibold text-xl w-80%">Aquí es donde vive la gran mayoría de las aplicaciones que se utilizan en el día a día. Estas aplicaciones acceden por si mismas al sistema o al kernel por medio de la Interfaz de Sistema, nunca directamente.</p>
        </div>

        <div class="w-full flex justify-center">
          <h1 class="p-2 bg-gray-700 rounded-lg w-fit text-sky-100 px-3 font-bold text-2xl">Comandos comúnes</h1>
        </div>
        
        <div class="flex flex-col flex-grow justify-center items-center gap-2">
          <div class="p-4 flex flex-col bg-gray-300 gap-3 rounded-lg">
            <For each={commands}>
              {(i) => (
                <div class="flex w-230 items-center gap-2">
                  <p class="font-[consolas] font-bold p-2 bg-gray-900 text-white w-fit rounded-lg">{i.command}</p>
                  <p class="font-semibold">{i.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}