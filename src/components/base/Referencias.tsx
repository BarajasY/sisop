import { ParentComponent } from "solid-js";

type props = {
  show: boolean;
  onClickOutside: () => void;
}

export const Referencias: ParentComponent<props> = (props) => {

  const wrapClick = (e: MouseEvent) => {
    e.stopImmediatePropagation();
    e.stopPropagation();
  };

  return (
    <div
      class="absolute flex left-0 justify-center w-100% h-100% z-2 top-0 items-center bg-gray-7 bg-opacity-50"
      classList={{ 'visible': props.show, 'invisible': !props.show }}
      onclick={() => props.onClickOutside()}
    >
      <div class="-translate-y-100vh transition-all w-60vw h-60vh absolute border-2px border-solid border-gray-300 shadow-lg bg-white rounded-lg duration-500 ease-in-out"
        classList={{ 'translate-y-0': props.show }}
        onClick={(e) => wrapClick(e)}
      >
        {props.children}
      </div>
    </div>
  )
}