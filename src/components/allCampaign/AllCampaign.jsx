import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
    const allCampaign = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(allCampaign);

    const handleSort = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => a.minimumDonationAmount - b.minimumDonationAmount);
        setSortedCampaigns(sorted);
    };

    return (
        <div>
            <div className="">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-extrabold mb-12">All Campaign</h2>
                        <div>
                            <button
                                onClick={handleSort}
                                className="shadow-xl py-3 px-6 text-sm font-semibold text-white bg-[#185C65] hover:bg-gray-600 focus:outline-none rounded-full"
                            >
                                Sort By Ascending
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                        {
                            sortedCampaigns.map(campaign =>
                                <Link to={`/campaignDetails/${campaign._id}`} key={campaign._id}>
                                    <div className="bg-gray-100 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                                        <div className="overflow-hidden mx-auto md:mb-2 mb-4">
                                            <img src={campaign.image} alt="Product 1" className="h-72 w-full object-cover rounded-xl" />
                                        </div>

                                        <div>
                                            <div className="absolute bottom-5 right-4 text-xs">Deadline: {campaign.deadline}</div>
                                            <h3 className="text-lg font-extrabold text-gray-800">{campaign.campaignTitle}</h3>
                                            <p className="text-gray-600 text-xs">{campaign.campaignType}</p>
                                            <h4 className="text-gray-600 text-sm mt-4">{campaign.minimumDonationAmount}৳ minimum</h4>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;
