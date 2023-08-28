export const getPriceString = ({
  isMonthly,
  price,
}: {
  isMonthly: boolean;
  price?: number;
}) => {
  return `${price} / ${isMonthly ? "mo" : "yr"}`;
};
