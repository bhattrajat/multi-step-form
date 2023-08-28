import checkedIcon from "../assets/images/icon-thank-you.svg";
export const Step4 = () => {
  return (
    <div className="text-center lg:flex lg:h-full lg:flex-col lg:justify-center">
      <img className="mx-auto mb-2 h-12 w-12" src={checkedIcon} alt="" />
      <h1 className="text-2xl font-bold text-blue-900">Thank you!</h1>
      <p className="mt-4 text-base text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
