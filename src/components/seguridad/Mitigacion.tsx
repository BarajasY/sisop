export const Mitigacion = () => {
  return (
    <div class="flex flex-col w-full mt-3">
      <h1 class="p-2 text-3xl text-emerald-900 font-bold border-b-1px border-b-solid border-b-emerald-500 w-fit">Mitigación de riesgos</h1>

      <p class="w-full p-2 text-xl text-emerald-900 font-semibold">Aunque los virus en Linux son menos comunes, siempre es recomendable</p>

      <div class="flex flex-col gap-2">
        <p class="p-2 bg-gray-900 w-fit text-lg text-emerald-200 rounded-lg font-semibold">Mantener el sistema y las aplicaciones actualizadas.</p>
        <p class="p-2 bg-gray-900 w-fit text-lg text-emerald-200 rounded-lg font-semibold">Configurar permisos de usuario adecuados.</p>
        <p class="p-2 bg-gray-900 w-fit text-lg text-emerald-200 rounded-lg font-semibold">Usar firewalls y herramientas de monitoreo como <span class="font-[consolas]">netstat</span>.</p>
        <p class="p-2 bg-gray-900 w-fit text-lg text-emerald-200 rounded-lg font-semibold">Instalar software antivirus, como ClamAV, especialmente en entornos de servidor.</p>
        <p class="p-2 bg-gray-900 w-fit text-lg text-emerald-200 rounded-lg font-semibold">Evitar descargar y ejecutar archivos o aplicaciones de fuentes no confiables.</p>
      </div>
    </div>
  )
}