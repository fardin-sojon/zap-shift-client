import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-secondary text-white rounded-xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden mt-10">
      <div className="max-w-xl z-10">
        <h2 className="text-3xl font-bold mb-4">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="text-gray-200 mb-6">
          We provide the lowest delivery charge, the highest value, and 100%
          safety of your products. Delivering across Bangladesh — fast and safe.
        </p>

        <div className="flex gap-4">
          <button className="btn btn-primary text-white">
            Become a Merchant
          </button>
          <button className="btn bg-transparent border border-primary text-primary hover:bg-primary hover:text-white">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      <div className="z-10">
        <div className="border-2 border-primary rounded-xl p-10 text-center text-5xl">
          📦
        </div>
      </div>
    </div>
  );
};

export default Banner2;
