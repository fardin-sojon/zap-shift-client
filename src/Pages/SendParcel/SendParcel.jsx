import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(r=>r.region);
    const regions = [...new Set(regionsDuplicate)];
    // console.log(regions);
    const senderRegion = useWatch({control, name:'senderRegions'})
    const receiverRegion = useWatch({control, name:'receiverRegion'})

    const districtsByRegion = (region)=>{
        const regionDistricts = serviceCenters.filter(c=>c.region === region);
        const districts = regionDistricts.map(d=> d.district);
        return districts;
    }


  const haldleSendParcel = (data)=>{
    console.log(data);
    const sameDistict = data.senderDistrict === data.receiverDistrict;
    console.log(sameDistict);
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white w-full max-w-6xl p-10 rounded-2xl shadow">
        
        <form onSubmit={handleSubmit(haldleSendParcel)}>

          <h1 className="text-3xl font-bold text-[#003C3C]">Send A Parcel</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your parcel details</p>

          {/* Document / Non-doc */}
          <div className="flex gap-8 mt-8 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                {...register('parcelType')}
                value="document"
                defaultChecked
                className="accent-[#4CC45C]"
              />
              <span>Document</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" 
              {...register('parcelType')}
              value="non-document" 
              className="accent-[#4CC45C]" />
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
                {...register('parcelName')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                placeholder="Parcel Name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Parcel Weight (KG)</label>
              <input
              type="number"
                name="parcelWeight"
                {...register('parcelWeight')}
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
                    {...register('senderName')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Sender Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Sender Email</label>
                  <input
                  type="email"
                    name="senderEmail"
                    {...register('senderEmail')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Sender Email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Sender Address</label>
                  <input
                    name="senderAddress"
                    {...register('senderAddress')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Sender Phone No</label>
                  <input
                    name="senderPhone"
                    {...register('senderPhone')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Sender Phone No"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Regions</label>
                  <select
                    name="senderRegions"
                    {...register('senderRegions')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Pick a Regions</option>
                    {
                      regions.map((r, i)=><option key={i} value={r}>{r}</option>)
                    }
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Your District</label>
                  <select
                    name="senderDistrict"
                    {...register('senderDistrict')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Pick a District</option>
                    {
                      districtsByRegion(senderRegion).map((r, i)=><option key={i} value={r}>{r}</option>)
                    }
                  </select>
                </div>

                

                <div>
                  <label className="text-sm font-medium">
                    Pickup Instruction
                  </label>
                  <textarea
                    name="pickupInstruction"
                    {...register('pickupInstruction')}
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
                    {...register('receiverName')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Receiver Email</label>
                  <input
                  type="email"
                    name="receiverEmail"
                    {...register('receiverEmail')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Receiver Address</label>
                  <input
                    name="receiverAddress"
                    {...register('receiverAddress')}
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
                    {...register('receiverPhone')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                    placeholder="Receiver Contact No"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Receiver Region
                  </label>
                  <select
                    name="receiverRegion"
                    {...register('receiverRegion')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Select Receiver Region</option>
                    {
                      regions.map((r, i)=><option key={i} value={r}>{r}</option>)
                    }
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Receiver District
                  </label>
                  <select
                    name="receiverDistrict"
                    {...register('receiverDistrict')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-[#4CC45C] outline-none"
                  >
                    <option value="">Select Receiver District</option>
                    {
                      districtsByRegion(receiverRegion).map((r, i)=><option key={i} value={r}>{r}</option>)
                    }
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Delivery Instruction
                  </label>
                  <textarea
                    name="deliveryInstruction"
                    {...register('deliveryInstruction')}
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
