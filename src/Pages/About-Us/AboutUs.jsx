import React, { useState } from "react";

const AboutUs = () => {
    const tabs = ["Story", "Mission", "Success", "Team & Others"];
    const [active, setActive] = useState(0);

    const text = `We started with a simple promise — to make parcel delivery fast, reliable, 
    and stress-free. Over the years, our commitment to real-time tracking, efficient 
    logistics, and customer-first service has made us a trusted partner for thousands. 
    Whether it's a personal gift or a time-sensitive business delivery, we ensure it 
    reaches its destination — on time, every time.`;

    return (
        <div className="w-full bg-gray-100 p-6 my-10">
            <div className="bg-white w-full max-w-6xl rounded-2xl p-10 shadow-md">

                <h1 className="text-4xl font-bold text-[#003C3C]">About Us</h1>
                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                </p>

                {/* Tabs */}
                <div className="mt-10 border-b flex gap-6 text-gray-600">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`pb-3 text-sm transition ${
                                active === index
                                    ? "text-[#007F6D] font-semibold border-b-2 border-[#007F6D]"
                                    : "hover:text-[#007F6D]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-6 text-gray-600 text-sm space-y-5 leading-relaxed">
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
