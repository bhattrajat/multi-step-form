export const getRadioGroupOptions = (isMonthly: boolean) => {
  return [
    {
      type: "Arcade",
      price: isMonthly ? 9 : 90,
      offer: isMonthly ? null : "2 months free",
    },
    {
      type: "Advanced",
      price: isMonthly ? 12 : 120,
      offer: isMonthly ? null : "2 months free",
    },
    {
      type: "Pro",
      price: isMonthly ? 15 : 150,
      offer: isMonthly ? null : "2 months free",
    },
  ];
};
