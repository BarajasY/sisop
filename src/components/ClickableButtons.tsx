import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";

type props = {
  onClick: (variant: 'top' | 'right' | 'left' | 'down' | 'corner-left' | 'corner-right' | 'bottom-left') => void;
}

export const ClickableButtons: Component<props> = (props) => {
  return (
    <div class="w-screen absolute h-screen flex justify-center items-center">
      <div
        class="absolute group top-0 p-5 w-300px rounded-md hover:bg-emerald-300 cursor-pointer mt-5 transition-all duration-200 flex justify-center items-center flex-col"
        onClick={() => props.onClick('top')}
      >
        <BaseIcon
          icon="i-mdi-chevron-up"
        />
        <p class=" font-semibold -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Seguridad</p>
      </div>
      <div
        class="absolute group right-0 p-5 h-300px rounded-md hover:bg-blue-200 cursor-pointer mr-5 transition-all duration-200 flex justify-center items-center"
        onClick={() => props.onClick('right')}
      >
        <p class=" rotate-90 font-semibold transition-all duration-300 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">Arquitectura</p>
        <BaseIcon
          icon="i-mdi-chevron-right"
        />
      </div>
      <div
        class="absolute left-0 p-5 h-300px group rounded-md hover:bg-rose-300 cursor-pointer ml-5 transition-all duration-200 flex justify-center items-center"
        onClick={() => props.onClick('left')}
      >
        <BaseIcon
          icon="i-mdi-chevron-left"
        />
        <p class="rotate-[270deg] font-semibold opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">Concurrencia</p>
      </div>
      <div
        class="absolute bottom-0 group p-5 w-300px rounded-md hover:bg-purple-300 cursor-pointer mb-5 transition-all duration-200 flex justify-center items-center flex-col"
        onClick={() => props.onClick('down')}
      >
        <p class=" font-semibold translate-y-1 ml-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">Memoria</p>
        <BaseIcon
          icon="i-mdi-chevron-down"
        />
      </div>

      <div
        class="absolute top-0 flex items-end group right-0 group p-5 w-300px rounded-md hover:bg-teal-300 cursor-pointer mb-5 transition-all duration-200 flex-col"
        onClick={() => props.onClick('corner-right')}
      >
        <div class="group-hover:bg-teal-300 absolute right-0 top-0 h-250px w-150px transition-all duration-300" />
        <p class="font-semibold w-100px translate-y-1 ml-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">Conclusiones</p>
        <div class="w-100px">
          <BaseIcon
            icon="i-mdi-chevron-up rotate-45"
          />
        </div>
      </div>

      <div
        class="absolute top-0 group left-0 group p-5 w-300px rounded-md hover:bg-amber-300 cursor-pointer mb-5 transition-all duration-200 flex-col"
        onClick={() => props.onClick('corner-left')}
      >
        <div class="group-hover:bg-amber-300 absolute left-0 top-0 h-250px w-150px transition-all duration-300" />
        <p class="font-semibold translate-y-1 ml-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">Introducción</p>
        <div class="w-100px">
          <BaseIcon
            icon="i-mdi-chevron-left rotate-45"
          />
        </div>
      </div>

      <div
        class="absolute bottom-0 group left-0 group p-5 w-300px rounded-md hover:bg-indigo-300 cursor-pointer transition-all duration-200 flex-col"
        onClick={() => props.onClick('bottom-left')}
      >
        <div class="group-hover:bg-indigo-300 absolute left-0 bottom-0 h-250px w-150px transition-all duration-300" />
        <p class="font-semibold translate-y-1 ml-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">Fundamentales</p>
        <div class="w-100px">
          <BaseIcon
            icon="i-mdi-chevron-down rotate-45"
          />
        </div>
      </div>



    </div>
  )
}