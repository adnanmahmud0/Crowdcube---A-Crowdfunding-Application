import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
    const allCampaign = useLoaderData();
    const { user } = useContext(AuthContext);

    // Set up local state for campaigns
    const [userCampaign, setUserCampaign] = useState([]);

    useEffect(() => {
        // Filter campaigns belonging to the logged-in user
        const filteredCampaigns = allCampaign?.filter((item) => item.uid === user?.uid);
        setUserCampaign(filteredCampaigns);
    }, [allCampaign, user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowd-cube-adnanmahmud.vercel.app/deletecampaign/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success",
                            });
                            // Update the local state to remove the deleted campaign
                            setUserCampaign(userCampaign.filter((campaign) => campaign._id !== _id));
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the campaign. Please try again later.",
                            icon: "error",
                        });
                        console.error("Delete error:", error);
                    });
            }
        });
    };

    return (
        <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md">
            <h2 className="text-4xl font-extrabold  text-center mb-16">My Campaign</h2>
            {userCampaign.length === 0 ? (
                <p className="text-center text-gray-500">You have no campaigns yet. Start by creating one!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {userCampaign.map((campaign) => (
                        <div key={campaign._id} className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                            <div className="bg-white flex flex-col h-full">
                                <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                    <img
                                        src={campaign.image || "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                                        alt={campaign.campaignTitle || "Campaign Image"}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center flex-1">
                                    <h3 className="text-lg font-bold ">{campaign.campaignTitle}</h3>
                                    <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-3 list-none">
                                        <li>Campaign Type: {campaign.campaignType}</li>
                                        <li>Description: {campaign.description}</li>
                                        <li>Deadline: {campaign.deadline}</li>
                                    </ul>
                                    <h4 className="text-xs  font-bold mt-3">
                                        Minimum Donation Amount is {campaign.minimumDonationAmount}৳
                                    </h4>
                                </div>
                                <div className="flex">
                                    <Link
                                        to={`/updateCampaign/${campaign._id}`}
                                        type="button"
                                        className="bg-[#185C65] font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full text-center"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        type="button"
                                        className="bg-red-500 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCampaign;
