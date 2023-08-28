export const getAddOnServices = (isMonthlyPlan: boolean) =>
  [
    {
      id: "onlineService",
      name: "Online Service",
      description: "Access to multiplayer games",
      price: isMonthlyPlan ? 1 : 10,
    },
    {
      id: "largerStorage",
      name: "Larger Storage",
      description: "Extra 1TB of cloud storage",
      price: isMonthlyPlan ? 2 : 20,
    },
    {
      id: "customizableProfile",
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: isMonthlyPlan ? 2 : 20,
    },
  ] as const;
