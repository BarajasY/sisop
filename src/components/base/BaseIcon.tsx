import { Component, createMemo } from "solid-js";

type props = {
  icon: string;
  hover?: boolean;
  variant?: 'accent' | 'delete' | 'neg-accent';
  alwaysHover?: boolean;
  onClick?:(e: MouseEvent) => void;
}

export const BaseIcon:Component<props> = (props) => {

  const parentStyle = createMemo(() => {
    if (props.hover) {
      return 'hover:bg-gray-300'
    }
    return ''
  });

  const iconStyle = createMemo(() => {
    if (props.variant === 'accent') {
      return 'text-cyan-700'
    }

    if (props.variant === 'delete') {
      return 'text-red-600'
    }
    return 'text-gray-600'
  });

  const handleClick = (e: MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  }

  return (
    <div 
      class={`flex items-center p-2 justify-center rounded-md cursor-pointer transition-all duration-200 ease-in-out ${parentStyle()}`}
      onClick={e => handleClick(e)}
    >
      <div class={`${props.icon} text-lg ${iconStyle()}`} />
    </div>
  )
}