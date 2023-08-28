import { FormData } from "../App";

type UpdateFields = (data: Partial<FormData>) => void;

type Props = FormData & { updateFields: UpdateFields };
export const Step0 = ({ name, email, phone, updateFields }: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900">Personal info</h1>
      <p className="text-base text-gray-500">
        Please provide your name, email, address & phone number
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <div>
          <label className="block font-semibold text-blue-900" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            required
            onChange={(e) => updateFields({ name: e.target.value })}
            className="w-full rounded border-gray-700"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-900" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            value={email}
            required
            onChange={(e) => updateFields({ email: e.target.value })}
            className="w-full rounded border-gray-700"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-900" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            className="w-full rounded border-gray-700"
            name="phone"
            required
            type="tel"
          />
        </div>
      </div>
    </div>
  );
};
