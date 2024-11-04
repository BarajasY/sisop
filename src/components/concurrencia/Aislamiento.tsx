export const Aislamiento = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-rose-900 font-bold border-b-1px border-b-solid border-b-rose-500 w-fit">Aislamiento</h1>

      <div class="flex gap-2 flex-grow mt-4">
        <div class="flex flex-col flex-grow p-2 border-2px border-solid border-rose-700 rounded-lg">
          <h1 class="text-rose-800 font-bold text-xl">Control Groups</h1>
          <p class="text-gray-800 font-semibold text-lg">Permiten gestionar y limitar los recursos de CPU, memoria, y otros, asignados a un grupo de procesos. Los cgroups son útiles para manejar aplicaciones que requieren concurrencia y control de recursos, como contenedores (Docker) y virtualización.</p>
        </div>

        <div class="flex flex-col flex-grow p-2 border-2px border-solid border-rose-700 rounded-lg">
          <h1 class="text-rose-800 font-bold text-xl">Namespaces</h1>
          <p class="text-gray-800 font-semibold text-lg">Linux usa namespaces para aislar recursos del sistema, de modo que cada conjunto de procesos tenga su propia vista de estos recursos. Esto permite crear entornos aislados en los que los procesos pueden ejecutarse concurrentemente sin interferir entre sí.</p>
        </div>
      </div>
    </div>
  )
}