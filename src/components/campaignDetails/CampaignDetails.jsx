import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const CampaignDetails = () => {

    const handelDonate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const uid = e.target.uid.value;
        const donationId = e.target.donationId.value;
        console.log(name, email, uid, donationId);
        const addDonation = {name, email, uid, donationId};
        fetch('https://crowd-cube-adnanmahmud.vercel.app/adddonation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addDonation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign Donated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    const allCampaign = useLoaderData();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const selectedCampaign = allCampaign.find((item) => item._id === id);
    
    // Convert deadline string to Date object
    const campaignDeadline = new Date(selectedCampaign.deadline);
    const currentDate = new Date();

    // Check if the current date is after the deadline
    const isDeadlinePassed = currentDate > campaignDeadline;

    const dateOver = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Looks like the date is over!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    return (
        <div>
            <div className="font-sans p-8 tracking-wide max-w-7xl mx-auto">
                <div className="grid items-start grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
                    {/* Left Section */}
                    <div>
                        <div className="flex gap-4 text-center">
                            <div className=" flex items-center sm:h-[380px]">
                                <img src={selectedCampaign.image} alt="Product" className="w-full max-h-full object-contain object-center  rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="max-w-xl">
                        <div>
                            <h2 className="text-3xl font-extrabold ">{selectedCampaign.campaignTitle}</h2>
                            <p className="text-sm  mt-2">{selectedCampaign.campaignType}</p>
                        </div>
                        <div className="mt-2">
                            <div className="mt-4">
                                <div>
                                    <h3 className="text-base font-bold ">Campaign Description:</h3>
                                    <p className="text-sm  mt-2">
                                        {selectedCampaign.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-lg font-bold  mt-4">Deadline:</span>
                            <span> {selectedCampaign.deadline}</span>
                        </div>
                        <p className=" text-2xl font-bold">{selectedCampaign.minimumDonationAmount}৳ Minimum Donation Amount</p>

                        <hr className="my-8" />

                        {/* Donation Form */}
                        <form onSubmit={handelDonate} action="" className="flex flex-wrap gap-4">
                            <input hidden name="name" type="text" value={user.displayName} />
                            <input hidden name="email" type="email" value={user.email} />
                            <input hidden name="uid" type="text" value={user.uid} />
                            <input hidden name="donationId" type="text" value={selectedCampaign._id} />
                            {isDeadlinePassed ? (
                                <button type="button" onClick={dateOver} className="min-w-[200px] px-4 py-3 bg-gray-400 text-white text-sm font-semibold rounded">
                                    Donation Closed
                                </button>
                            ) : (
                                <button type="submit" className="min-w-[200px] px-4 py-3 bg-[#185C65] hover:bg-gray-900 text-white text-sm font-semibold rounded">
                                    Donate now
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;
