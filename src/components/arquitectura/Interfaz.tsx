export const Interfaz = () => {
  return (
    <div class="flex flex-col w-full items-center mt-10">
      <div class=" w-80% flex flex-col">
        <div class="flex flex-col justify-center items-center">
          <h1 class="p-2 text-3xl bg-sky-700 z-1 text-sky-100 rounded-2xl px-4">Interfaz de Sistema</h1>
          <div class="w-full h-2px bg-sky-700 z-0 -translate-y-25px" />
        </div>
        <div class="w-full flex justify-start mt-5">
          <p class="p-2 bg-sky-700 rounded-lg w-fit text-sky-100 px-3 font-semibold text-xl">Enlace que logra conectar el espacio de usuario y todas las aplicaciones de usuario con el espacio de núcleo.</p>
        </div>
        <div class="w-full flex justify-end mt-5">
          <p class="p-2 bg-sky-700 rounded-lg w-80% text-sky-100 px-3 font-semibold text-xl">Ofrece una serie de funcionalidades para que las aplicaciones de usuario puedan interactuar con el kérnel, no es posible que las aplicaciones interactúen directamente con el kernel con funciones únicas.</p>
        </div>
        <div class="w-full flex justify-start mt-5">
          <p class="p-2 bg-sky-700 rounded-lg w-80% text-sky-100 px-3 font-semibold text-xl">Algunos ejemplos de llamadas de aplicaciones a la interfaz de sistema son: abrir archivos, leer y escribir datos, crear y gestionar procesos, trabajar con hilos, entre muchas otras funcionalidades.</p>
        </div>
        <div class="flex flex-col justify-center items-center mt-10">
          <div class="w-full h-2px bg-sky-700 z-0" />
        </div>
      </div>
    </div>
  )
}