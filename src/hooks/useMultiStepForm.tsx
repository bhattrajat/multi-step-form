import { useState } from "react";
import { FormData } from "../App";
export type Props = FormData & {
  updateFields: (data: Partial<FormData>) => void;
} & {
  gotoStep: (step: number) => void;
};
export const useMultiStepForm = (steps: ((props: Props) => JSX.Element)[]) => {
  const [currentStepIndex, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStepIndex === steps.length - 1) return;
    setCurrentStep((currentStepIndex) => currentStepIndex + 1);
  };

  const prev = () => {
    if (currentStepIndex === 0) return;
    setCurrentStep((currentStepIndex) => currentStepIndex - 1);
  };

  const gotoStep = (step: number) => {
    setCurrentStep(step);
  };

  return {
    currentStepIndex,
    CurrentStepComp: steps[currentStepIndex],
    gotoStep,
    next,
    steps,
    prev,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
