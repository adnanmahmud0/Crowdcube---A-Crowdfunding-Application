import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyDonation = () => {
    const allCampaign = useLoaderData();
    const { user } = useContext(AuthContext);
    const [donationHistory, setDonationHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://crowd-cube-adnanmahmud.vercel.app/showdonation")
            .then((res) => res.json())
            .then((data) => setDonationHistory(data))
            .catch(() => {
                setError("Failed to load donation history.");
            });
    }, [user]);

    const selectedDonationUser = donationHistory?.filter((item) => item.uid === user?.uid);
    const selectedDonationIds = selectedDonationUser?.map((ur) => ur.donationId);
    const selectedDonationHistory = allCampaign?.filter((item) =>
        selectedDonationIds?.includes(item._id)
    );


    console.log(selectedDonationHistory);


    return (
        <div>
            <div class="h-full">
                <div class="max-w-7xl mx-auto p-6">
                    <h2 class="text-3xl font-extrabold ">Your shopping bag</h2>
                    {
                        selectedDonationHistory.map(donationHistory =>
                            <div class="mt-8">
                                <div class="lg:col-span-2 space-y-6">
                                    <div class="p-2 bg-white shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] rounded-md relative">
                                        <div class="grid sm:grid-cols-2 items-center gap-4">

                                            <div class="w-full h-full p-4 shrink-0 text-center">
                                                <img src={donationHistory.image} class="w-full h-full rounded-xl object-contain inline-block" />
                                            </div>

                                            <div class="p-2">
                                                <h3 class="text-lg font-bold ">{donationHistory.campaignTitle}</h3>

                                                <ul class="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-3">
                                                    <li>Campaign Type: {donationHistory.campaignType}</li>
                                                    <li>Description: {donationHistory.description}</li>
                                                    <li>Deadline: {donationHistory.deadline}</li>
                                                </ul>

                                                <div class="flex items-center justify-between flex-wrap gap-4 mt-6">
                                                    <div>
                                                        <h4 class="text-lg font-bold text-[#185C65]">Minimum Amount: {donationHistory.minimumDonationAmount}৳</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default MyDonation;
