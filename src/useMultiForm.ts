import { ReactElement, useState } from "react";

export function useMultiForm(steps: ReactElement[]) {
  const [currStep, setcurrStep] = useState(0);

  function next() {
    setcurrStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setcurrStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(index: number) {
    setcurrStep(index);
  }

  return {
    currStep,
    step: steps[currStep],
    steps,
    isFirstStep : currStep === 0,
    isLastStep : currStep === steps.length-1,
    goto,
    next,
    back,
  };
}
