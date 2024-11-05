import { Title } from "@solidjs/meta";
import { createSignal, For } from "solid-js";
import { Arquitectura } from "~/components/Arquitectura";
import { ClickableButtons } from "~/components/ClickableButtons";
import { Conclusion } from "~/components/Conclusion";
import { Fundamentales } from "~/components/Fundamentales";
import { Introduccion } from "~/components/Introduccion";
import { Memoria } from "~/components/Memoria";
import { Multitarea } from "~/components/Multitarea";
import { Seguridad } from "~/components/Seguridad";
import { SlideIn } from "~/components/SlideIn";

export default function Home() {

  const [Screen, setScreen] = createSignal<'top' | 'right' | 'left' | 'down' | 'corner-left' | 'corner-right'  | 'bottom-left' | undefined>();

  const members = [
    {
      name: 'Yahir Moreno Barajas',
      matricula: '2128081',
      carrera: 'ITS',
      image:'yahir.png'
    },
    {
      name: 'Raymond Bustos Pérez',
      matricula: '1996031',
      carrera: 'ITS',
      image:'raymond.png'
    },
    {
      name: 'Alondra Guadalupe Aguilar Moreno',
      matricula: '1934482',
      carrera: 'IAS',
      image:'alondra.png'
    },
    {
      name: 'Ricardo Daniel Pérez Maldonado',
      matricula: '1737931',
      carrera: 'IAS',
      image:'ricardo.png'
    },
    {
      name: 'Gerardo Haziel López Chávez',
      matricula: '2052020',
      carrera: 'IAS',
      image:'gerardo.png'
    },
    {
      name: 'Cassandra Lisbeth Cruz Bernal',
      matricula: '2003718',
      carrera: 'ITS',
      image:'cassandra.png'
    },
    {
      name: 'Laura Alicia Gallegos Moreno',
      matricula: '1973188',
      carrera: 'ITS',
      image:'laura.png'
    },
  ]

  return (
    <main class="overflow-y-hidden overflow-x-hidden">
      <Title>Linux</Title>
      <div class="flex w-screen flex-col items-center bg-gray-200 h-screen justify-center overflow-y-hidden overflow-x-hidden">
        <h1 class="text-9xl drop-shadow-2xl animate-fadein font-bold text-cyan-900">Linux</h1>
        <p class="text-lg text-gray-700 font-bold animate-fadein mt-5">Sistemas Operativos</p>
        <p class="text-lg text-gray-700 font-bold animate-fadein mt-5">Universidad Autónoma de Nuevo León</p>
        <p class="text-lg text-gray-700 font-bold animate-fadein mt-5">Facultad de Ingeniería Mecánica y Eléctrica</p>
        <p class="text-lg text-gray-700 font-bold animate-fadein mt-5">Equipo #4 PIA</p>
        <div class="mt-5 flex flex-col gap-1">
          <For
            each={members}
          >
            {(t) => (
              <div class="grid grid-cols-[60px_350px_100px_auto] items-center gap-2 p-2 rounded-lg bg-gray-800">
                <img src={t.image} class="w-60px h-60px object-[fit]" />
                <p class="font-[consolas] text-lg text-cyan-100">{t.name}</p>
                <p class="font-[consolas] text-lg text-cyan-100">{t.matricula}</p>
                <p class="font-[consolas] text-lg text-cyan-100">{t.carrera}</p>
              </div>
            )}
          </For>
        </div>
        <ClickableButtons
          onClick={(v) => setScreen(v)}
        />
        <SlideIn
          variant='top'
          show={Screen() === 'top'}
        >
          <Seguridad
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
        <SlideIn
          variant='down'
          show={Screen() === 'down'}
        >
          <Memoria
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
        <SlideIn
          variant='right'
          show={Screen() === 'right'}
        >
          <Arquitectura
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
        <SlideIn
          variant='left'
          show={Screen() === 'left'}
        >
          <Multitarea
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
        <SlideIn
          variant='corner-left'
          show={Screen() ===  'corner-left'}
        >
          <Introduccion
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
        <SlideIn
          variant='corner-right'
          show={Screen() === 'corner-right'}
        >
          <Conclusion
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>

        <SlideIn
          variant='bottom-left'
          show={Screen() === 'bottom-left'}
        >
          <Fundamentales
            onClose={() => setScreen(undefined)}
          />
        </SlideIn>
      </div>
    </main>
  );
}
