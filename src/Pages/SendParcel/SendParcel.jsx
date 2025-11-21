import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const district = (
    <>
      <option>Dhaka</option>
      <option>Faridpur</option>
      <option>Gazipur</option>
      <option>Gopalganj</option>
      <option>Kishoreganj</option>
      <option>Madaripur</option>
      <option>Manikganj</option>
      <option>Munshiganj</option>
      <option>Narayanganj</option>
      <option>Narsingdi</option>
      <option>Rajbari</option>
      <option>Shariatpur</option>
      <option>Tangail</option>

      <option>Brahmanbaria</option>
      <option>Chandpur</option>
      <option>Chattogram</option>
      <option>Cumilla</option>
      <option>Cox's Bazar</option>
      <option>Feni</option>
      <option>Khagrachari</option>
      <option>Lakshmipur</option>
      <option>Noakhali</option>
      <option>Rangamati</option>

      <option>Bagerhat</option>
      <option>Chuadanga</option>
      <option>Jashore</option>
      <option>Jhenaidah</option>
      <option>Khulna</option>
      <option>Kushtia</option>
      <option>Magura</option>
      <option>Meherpur</option>
      <option>Narail</option>
      <option>Satkhira</option>

      <option>Bogura</option>
      <option>Joypurhat</option>
      <option>Naogaon</option>
      <option>Natore</option>
      <option>Chapai Nawabganj</option>
      <option>Pabna</option>
      <option>Rajshahi</option>
      <option>Sirajganj</option>

      <option>Dinajpur</option>
      <option>Gaibandha</option>
      <option>Kurigram</option>
      <option>Lalmonirhat</option>
      <option>Nilphamari</option>
      <option>Panchagarh</option>
      <option>Rangpur</option>
      <option>Thakurgaon</option>

      <option>Habiganj</option>
      <option>Moulvibazar</option>
      <option>Sunamganj</option>
      <option>Sylhet</option>

      <option>Barguna</option>
      <option>Barishal</option>
      <option>Bhola</option>
      <option>Jhalokathi</option>
      <option>Patuakhali</option>
      <option>Pirojpur</option>
    </>
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const haldleSendParcel = (data)=>{
    console.log("Submited");
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white w-full max-w-6xl p-10 rounded-2xl shadow">
        
        {/* FORM START */}
        <form onSubmit={handleSubmit(haldleSendParcel)}>

          <h1 className="text-3xl font-bold text-[#003C3C]">Send A Parcel</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your parcel details</p>

          {/* Document / Non-doc */}
          <div className="flex gap-8 mt-8 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                defaultChecked
                className="accent-[#4CC45C]"
              />
              <span>Document</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" className="accent-[#4CC45C]" />
              <span>Non-Document</span>
            </label>
          </div>

          <hr className="my-6" />

          {/* Parcel Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Parcel Name</label>
              <input
                name="parcelName"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                placeholder="Parcel Name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Parcel Weight (KG)</label>
              <input
                name="parcelWeight"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                placeholder="Parcel Weight (KG)"
                required
              />
            </div>
          </div>

          {/* Sender / Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Sender */}
            <div>
              <h2 className="font-semibold text-lg text-[#003C3C] mb-4">
                Sender Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium">Sender Name</label>
                  <input
                    name="senderName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Sender Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Address</label>
                  <input
                    name="senderAddress"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Sender Phone No</label>
                  <input
                    name="senderPhone"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Sender Phone No"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Your District</label>
                  <select
                    name="senderDistrict"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Select your District</option>
                    {district}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Pickup Instruction
                  </label>
                  <textarea
                    name="pickupInstruction"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm h-20 focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Pickup Instruction"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h2 className="font-semibold text-lg text-[#003C3C] mb-4">
                Receiver Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium">Receiver Name</label>
                  <input
                    name="receiverName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Receiver Address</label>
                  <input
                    name="receiverAddress"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Address"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Receiver Contact No
                  </label>
                  <input
                    name="receiverPhone"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Contact No"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Receiver District
                  </label>
                  <select
                    name="receiverDistrict"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Select Receiver District</option>
                    {district}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Delivery Instruction
                  </label>
                  <textarea
                    name="deliveryInstruction"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm h-20 focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Delivery Instruction"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            * Pickup Time 4pm–7pm Approx.
          </p>

          <button
            type="submit"
            className="mt-6 bg-[#C5EB76] hover:bg-[#b6dd6b] text-[#003C3C] font-semibold px-6 py-2 rounded shadow"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
