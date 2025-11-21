import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";

const Features = () => {
  const features = [
    {
      icon: <LuPackageSearch size={50} />,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment journey and get instant status updates.",
    },
    {
      icon: <MdOutlineLocalShipping size={50} />,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with utmost care and delivered securely. Your product's safety is always our priority.",
    },
    {
      icon: <FaPhoneAlt size={50} />,
      title: "24/7 Call Center Support",
      desc: "Our team is available 24/7 to assist you with updates, questions, or delivery concerns — anytime you need us.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 mt-15">
      {features.map((f, index) => (
        <div
          key={index}
          className="flex items-center gap-6 bg-white p-6 rounded-xl shadow"
        >
          <div className="text-primary">{f.icon}</div>
          <div>
            <h2 className="text-xl font-bold mb-1">{f.title}</h2>
            <p className="text-sm text-gray-700 max-w-xl">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
