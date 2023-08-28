import { Props } from "../hooks/useMultiStepForm";
import { getPriceString } from "../utils/getPriceString";

export const Step3 = ({ isMonthlyPlan, plan, addOns, gotoStep }: Props) => {
  const totalPrice =
    addOns.reduce((acc, val) => acc + val.price, 0) + plan.price;
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900">Finishing Up</h1>
      <p className="text-base text-gray-500">
        Double-check everything looks ok before confirming
      </p>
      <div className="my-4 rounded bg-gray-200 p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-900">{`${plan.type} ${
              isMonthlyPlan ? "Monthly" : "Yearly"
            }`}</h2>
            <button
              type="button"
              onClick={() => gotoStep(1)}
              className="border-b-2 border-blue-600 text-blue-600"
            >
              Change
            </button>
          </div>
          <div className="font-bold text-blue-900">
            {getPriceString({
              price: plan.price,
              isMonthly: isMonthlyPlan,
            })}
          </div>
        </div>
        <div className="mt-2 h-[1px] bg-gray-400"></div>
        {addOns.map((addOn) => {
          return (
            <div key={addOn.type} className="my-4 flex justify-between">
              <h3 className="text-gray-600">{addOn.name}</h3>
              <h4 className="font-semibold text-blue-900">
                +
                {getPriceString({
                  price: addOn.price,
                  isMonthly: isMonthlyPlan,
                })}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between p-4">
        <div className="font-semibold text-gray-400">
          Total {isMonthlyPlan ? "per month" : "per year"}
        </div>
        <div className=" font-bold text-blue-900">
          {getPriceString({ price: totalPrice, isMonthly: isMonthlyPlan })}
        </div>
      </div>
    </div>
  );
};
