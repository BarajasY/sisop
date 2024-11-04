import { Component, createMemo, ParentComponent } from "solid-js";

type props = {
  variant: 'top' | 'down' | 'left' | 'right';
  show: boolean;
}

export const SlideIn: ParentComponent<props> = (props) => {
  const translateOut = createMemo(() => {
    if (!props.show) {
      if (props.variant === 'top') {
        return '-translate-y-[100vh] invisible';
      }
      if (props.variant === 'right') {
        return 'translate-x-[100vw] invisible';
      }
      if (props.variant === 'left') {
        return '-translate-x-[100vw] invisible';
      }
      if (props.variant === 'down') {
        return 'translate-y-[100vh] invisible';
      }
    }
  });

  const translateIn = createMemo(() => {
    if (props.show) {
      if (props.variant === 'top') {
        return 'translate-y-0 visible';
      }
      if (props.variant === 'right') {
        return 'translate-x-0 visible';
      }
      if (props.variant === 'left') {
        return 'translate-x-0 visible';
      }
      if (props.variant === 'down') {
        return 'translate-y-0 visible';
      }
    }
  });

  return (
    <div class={`absolute translate-all duration-[500ms] w-screen h-screen flex justify-center items-center ${translateIn()} ${translateOut()}`}
    >
      {props.children}
    </div>
  )
}