import { FormData } from "../App";
import { getAddOnServices } from "../utils/getAddOnServices";
import { getPriceString } from "../utils/getPriceString";

type UpdateFields = (data: Partial<FormData>) => void;

type Props = FormData & { updateFields: UpdateFields };

export const Step2 = ({ isMonthlyPlan, addOns, updateFields }: Props) => {
  const addOnServices = getAddOnServices(isMonthlyPlan);
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900">Pick add-ons</h1>
      <p className="text-base text-gray-500">
        Add-ons help to enhance your gaming experience
      </p>
      {addOnServices.map((service) => {
        const selectedService = addOns.find(
          (addOn) => addOn.type === service.id,
        );
        return (
          <div
            className={`mt-4 flex items-center gap-4 border-2 border-gray-200 p-4 ${
              selectedService ? "border-indigo-900" : ""
            }`}
            key={service.id}
          >
            <input
              type="checkbox"
              id={service.id}
              name={service.id}
              className="text-indigo-900 ring-indigo-900"
              checked={Boolean(selectedService)}
              onChange={(e) => {
                if (e.target.checked) {
                  updateFields({
                    addOns: [
                      ...addOns,
                      {
                        type: service.id,
                        name: service.name,
                        price: service.price,
                      },
                    ],
                  });
                } else {
                  updateFields({
                    addOns: addOns.filter((addOn) => addOn.type !== service.id),
                  });
                }
              }}
            />
            <label
              className="flex flex-grow items-center justify-between"
              htmlFor={service.id}
            >
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-blue-900">
                  {service.name}
                </h3>
                <p>{service.description}</p>
              </div>
              <div className="text-indigo-900">
                +
                {getPriceString({
                  isMonthly: isMonthlyPlan,
                  price: service.price,
                })}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};
