import { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Step0 } from "./components/step0";
import { Step1 } from "./components/step1";
import { Step2 } from "./components/step2";
import { Step3 } from "./components/step3";
import { Step4 } from "./components/step4";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  isMonthlyPlan: boolean;
  plan: {
    type: string;
    price: number;
  };
  addOns: {
    type: string;
    name: string;
    price: number;
  }[];
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  isMonthlyPlan: true,
  plan: {
    type: "Arcade",
    price: 9,
  },
  addOns: [],
};

const STEPS = ["Your info", "Select plan", "Add-ons", "Summary"];
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (data: Partial<FormData>) => {
    setData((prevData) => ({ ...prevData, ...data }));
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    CurrentStepComp,
    currentStepIndex,
    gotoStep,
    next,
    prev,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([Step0, Step1, Step2, Step3]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStepIndex !== steps.length - 1) return next();
    setIsSubmitted(true);
  };
  console.log(data);
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex h-screen flex-col lg:h-[40rem] lg:w-1/2 lg:flex-row lg:gap-4 lg:rounded lg:bg-white lg:p-4 lg:shadow"
    >
      <div className="lg:bg-sidebar-desktop flex h-40 items-center justify-center gap-2 bg-sidebar-mobile bg-cover bg-no-repeat lg:h-auto lg:w-1/3 lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 lg:rounded-lg lg:px-4 lg:py-8">
        {Array(steps.length)
          .fill(0)
          .map((_, ind) => {
            return (
              <div key={ind} className="lg:flex lg:gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${
                    currentStepIndex === ind
                      ? "bg-blue-300 text-blue-900"
                      : "text-white"
                  }`}
                >
                  {ind + 1}
                </div>
                <div className="hidden lg:block lg:text-white">
                  <div className="text-sm font-light uppercase">{`Step ${
                    ind + 1
                  }`}</div>
                  <div>{STEPS[ind]}</div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex h-[calc(100vh_-_14rem)] flex-col justify-between lg:h-full lg:w-3/4">
        <div className="relative -top-12 m-4 rounded bg-white px-4 py-8 shadow lg:static lg:h-full lg:p-0 lg:shadow-none">
          {isSubmitted ? (
            <Step4 />
          ) : (
            <CurrentStepComp
              {...data}
              updateFields={updateFields}
              gotoStep={gotoStep}
            />
          )}
        </div>
        {!isSubmitted && (
          <div className="mb-4 flex justify-between p-4 lg:h-20">
            {!isFirstStep && (
              <button type="button" onClick={prev}>
                Go Back
              </button>
            )}
            <button
              type="submit"
              className="ml-auto rounded bg-blue-900 px-4 py-2 font-semibold text-blue-50 shadow"
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default App;
