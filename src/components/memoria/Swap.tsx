export const Swap = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-purple-900 font-bold border-b-1px border-b-solid border-b-purple-500 w-fit">Memoria Swap</h1>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Por lo general, la memoria física se encarga de almacenar datos para todos los procesos en el equipo. ¿Pero qué sucede cuando la memoria física está llena? Ahí es cuando la memoria de intercambio entra en juego.</p>
      <p class="w-full p-2 text-xl text-purple-900 font-semibold">Cuando el sistema está lleno, las páginas inactivas de la memoria se moverán a la memoria de intercambio. Esta consta de una partición de intercambio, un archivo de intercambio o ambos. Una partición de intercambio es una partición de disco. Un archivo de intercambio es un sistema de archivos. Usar uno u otro depende de tu preferencia. Ambas son opciones válidas.</p>
      
      <img src="public/swap-memory.png" class="w-110 h-60 object-cover" />
    </div>
  )
}