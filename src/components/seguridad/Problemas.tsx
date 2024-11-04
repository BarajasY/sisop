export const Problemas = () => {
  return (
    <div class="flex flex-col w-full mt-10">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Posibles problemas de seguridad</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Los sistemas Linux tienden a ser tan vulnerables como sus homólogos de Windows. Los puntos débiles que se perciben no son necesariamente culpa de los sistemas operativos, sino que se deben a despistes de los administradores de Linux. Estos despistes muchas veces están relacionados con la configuración por defecto de las instalaciones, la falta de mantenimiento y la no realización de pruebas suficientemente rigurosas, o con las herramientas adecuadas, para descubrir las posibles lagunas.</p>

      <div class="flex flex-col gap-2 p-2">
        <div class="flex flex-col">
          <h1 class="text-xl text-emerald-900 font-extrabold">Falta de administración de parches</h1>
          <p class="text-base text-emerald-900 font-bold">La administración en los parches de seguridad es fundamental para mitigar las vulnerabilidades. Al no aplicar actualizaciones de seguridad diversos sistemas como Red Hats pueden quedar expuestos a exploits los cuales permiten la ejecución remota de códigos. Este descuido en la actualización de parches para Linux es un riesgo mayor, sobre todo si otros sistemas como Windows tienen metodologías de parches establecidas.</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl text-emerald-900 font-extrabold">Aplicaciones obsoletas</h1>
          <p class="text-base text-emerald-900 font-bold">Cuando diversas aplicaciones como Apache, PHP, MySQL, etc., no llegan a ser actualizadas, se crean diversos puntos de entradas de ataque. El dejar obsoleto a un software también suele generar vulnerabilidades conocidas sin parches, lo que facilita accesos no autorizados, especialmente en servicios críticos como SSH con encriptación débil.</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl text-emerald-900 font-extrabold">Carencia de contraseñas robustas</h1>
          <p class="text-base text-emerald-900 font-bold">Aunque Linux incluye herramientas para la gestión de contraseñas, la falta de políticas de contraseñas fuertes permite que usuarios malintencionados puedan obtener acceso al sistema mediante fuerza bruta u otros métodos.</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl text-emerald-900 font-extrabold">Falta de rigor</h1>
          <p class="text-base text-emerald-900 font-bold">Algunos servicios mal configurados, como SNMP, FTP anónimo o Telnet sin protección, incrementan las posibilidades de que usuarios no autorizados accedan a información sensible. La ausencia de configuraciones de seguridad básicas puede permitir que personas accedan sin restricción, poniendo en riesgo la integridad del sistema.</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl text-emerald-900 font-extrabold">Ausencia de respaldo</h1>
          <p class="text-base text-emerald-900 font-bold">Al no realizar copias de seguridad completas en sistemas Linux puede ser crítico, especialmente para servidores importantes. La falta de una copia de respaldo integral implica un mayor tiempo de recuperación y posibles pérdidas de datos en caso de fallo</p>
        </div>
      </div>
    </div>
  )
}