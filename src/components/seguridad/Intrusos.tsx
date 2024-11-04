export const Intrusos = () => {
  return (
    <div class="flex flex-col w-full mt-3">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Intrusos</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Usuarios o agentes no autorizados que acceden o intentan acceder al sistema sin permiso. Los intrusos pueden ser individuos que explotan vulnerabilidades de seguridad para obtener acceso a recursos, datos, o funcionalidades restringidas de un sistema. También pueden incluir malware, como troyanos, virus, y rootkits, que se instalan en el sistema para realizar actividades maliciosas.</p>

      <div class="flex flex-col gap-2 items-center mt-10">
        <div class="grid grid-cols-[220px_auto] w-80% gap-2">
          <p class="font-bold text-emerald-900 flex items-center justify-center">Externos</p>
          <p class="p-2 bg-gray-800 text-emerald-100 font-[consolas] rounded-lg">Son usuarios sin acceso legítimo al sistema que intentan obtenerlo mediante técnicas de ataque como la fuerza bruta, escaneo de puertos o vulnerabilidades en servicios de red. Generalmente, los atacantes externos buscan explotar fallos en la seguridad de la red para acceder a los recursos del sistema.</p>

          <p class="font-bold text-emerald-900 flex items-center justify-center">Internos</p>
          <p class="p-2 bg-gray-800 text-emerald-100 font-[consolas] rounded-lg">Son usuarios que ya tienen acceso al sistema pero intentan realizar acciones no autorizadas, como acceder a archivos o información que no les corresponde o ejecutar comandos con privilegios más altos. Los intrusos internos pueden representar una amenaza significativa, ya que suelen tener algún conocimiento del sistema y acceso parcial a sus recursos.</p>

          <p class="font-bold text-emerald-900 flex items-center justify-center">Con Privilegios Elevados</p>
          <p class="p-2 bg-gray-800 text-emerald-100 font-[consolas] rounded-lg">Son usuarios con privilegios elevados, como administradores del sistema o usuarios con acceso sudo, que pueden abusar de sus permisos para realizar acciones maliciosas o indebidas. Este tipo de intrusión suele ser más difícil de detectar debido al nivel de acceso de los usuarios involucrados.</p>
        </div>
      </div>
    </div>
  )
};