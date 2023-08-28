import { Switch } from "@headlessui/react";
import { FormData } from "../App";
import { RadioGroup } from "@headlessui/react";
import { getRadioGroupOptions } from "../utils/getRadioGroupOptions";
import { getPriceString } from "../utils/getPriceString";

type UpdateFields = (data: Partial<FormData>) => void;

type Props = FormData & { updateFields: UpdateFields };

export const Step1 = ({ isMonthlyPlan, plan, updateFields, addOns }: Props) => {
  const options = getRadioGroupOptions(isMonthlyPlan);
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900">Select your plan</h1>
      <p className="text-base text-gray-500">
        You have the option of monthly or yearly billing
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <RadioGroup
          value={plan.type}
          onChange={(val) =>
            updateFields({
              plan: {
                type: val,
                price: options.find(({ type }) => type === val)?.price ?? 0,
              },
            })
          }
          className="lg:flex lg:justify-between"
        >
          <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
          {options.map((option) => (
            <RadioGroup.Option
              key={option.type}
              value={option.type}
              className={({ checked }) =>
                `${
                  checked
                    ? "bg-gray-100 bg-opacity-75 ring-2 ring-blue-900 ring-opacity-60"
                    : "bg-white"
                }
              relative mb-2 flex cursor-pointer rounded-lg border-[1px] border-gray-300 px-5 py-4 shadow-md focus:outline-none lg:w-32`
              }
            >
              <div className="flex gap-4 lg:flex-col">
                <div>
                  <img
                    src={`/assets/images/icon-${option.type.toLowerCase()}.svg`}
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-base">{option.type}</h3>
                  <div>
                    {getPriceString({
                      price: option.price,
                      isMonthly: isMonthlyPlan,
                    })}
                  </div>
                  {option.offer && (
                    <div className="lg:text-sm">{option.offer}</div>
                  )}
                </div>
              </div>
            </RadioGroup.Option>
          ))}
        </RadioGroup>
        <div className="flex justify-center gap-4 rounded bg-gray-100 p-4">
          <span>Yearly</span>
          <Switch
            checked={isMonthlyPlan}
            onChange={(value) =>
              updateFields({
                isMonthlyPlan: value,
                plan: {
                  ...plan,
                  price: value ? plan.price / 10 : plan.price * 10,
                },
                addOns: addOns.map((addOn) => ({
                  ...addOn,
                  price: value ? addOn.price / 10 : addOn.price * 10,
                })),
              })
            }
            className={`relative inline-flex h-6 w-11 items-center rounded-full bg-blue-900`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                isMonthlyPlan ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span>Monthly</span>
        </div>
      </div>
    </div>
  );
};
