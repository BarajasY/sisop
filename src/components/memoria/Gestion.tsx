export const Gestion = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Gestión</h1>

      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Para gestionar la memoria en Linux, se trabaja con unidades llamadas <span class="font-extrabold">páginas</span>. Cuando un proceso solicita memoria, el kernel le asigna páginas virtuales, que pueden estar soportadas en la memoria RAM o en la memoria swap.</p>
      <div class="w-full flex justify-end mt-3">
        <img src="public/memory-pagination.png" />
      </div>
    </div>
  )
}