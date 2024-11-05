import { Component } from "solid-js";
import { BaseIcon } from "./base/BaseIcon";

type props = {
  onClose: () => void;
}

export const Fundamentales: Component<props> = (props) => {

  const download = (filename: string) => {
    const path = `/public/${filename}/`;

    const link = document.createElement('a');
    link.href = path;
    link.download = filename;

    link.click();
  }

  return (
    <div class="w-full h-full flex flex-col mb-5 pt-20 overflow-y-auto items-center absolute bg-gray-100">
      <div class="flex justify-center my-5 gap-2">
        <h1 class="text-5xl font-black text-sky-100 p-3 bg-indigo-700 h-fit rounded-lg">Fundamentales</h1>
      </div>

      <div class="absolute w-80% justify-start flex mt-10">
        <BaseIcon
          icon="i-mdi-close-thick"
          hover={true}
          variant="neg-accent"
          onClick={() => props.onClose()}
        />
      </div>

      <div class="w-50% gap-3 mt-10 grid grid-cols-2">

        <div class="flex flex-grow hover:bg-purple-400 transition-all duration-200 ease-linear  bg-purple-300 items-center justify-center p-3 rounded-lg cursor-pointer"
          onClick={() => download('ActFundamental#1_Equipo4.pdf')}
        >
          <h1 class="text-purple-600">Fundamental 1</h1>
        </div>

        <div class="flex flex-grow hover:bg-blue-400 transition-all duration-200 ease-linear bg-blue-300 items-center justify-center p-3 rounded-lg cursor-pointer"
          onClick={() => download('ActFundamental#2(Investigacion)_Equipo4.pdf')}
        >
          <h1 class="text-blue-600">Fundamental 2</h1>
        </div>

        <div class="flex flex-grow hover:bg-rose-400 transition-all duration-200 ease-linear bg-rose-300 items-center justify-center p-3 rounded-lg cursor-pointer"
          onClick={() => download('ActFundamental#3.pdf')}
        >
          <h1 class="text-rose-600">Fundamental 3</h1>
        </div>

        <div class="flex flex-grow hover:bg-emerald-400 transition-all duration-200 ease-linear bg-emerald-300 items-center justify-center p-3 rounded-lg cursor-pointer"
          onClick={() => download('ActFundamental#4_Equipo4.pdf')}
        >
          <h1 class="text-emerald-600">Fundamental 4</h1>
        </div>
      </div>
    </div>
  )
}