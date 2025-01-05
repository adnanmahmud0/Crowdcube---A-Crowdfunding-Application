import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const selectedCampaign = useLoaderData();
    console.log(selectedCampaign);
    const {campaignTitle, campaignType, deadline, description, image, minimumDonationAmount, uid, userEmail, userName, _id} = selectedCampaign;
    const updateCampaign = (e) => {
        e.preventDefault();
        const campaignTitle = e.target.campaignTitle.value;
        const campaignType = e.target.campaignType.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const minimumDonationAmount = e.target.minimumDonationAmount.value;
        const deadline = e.target.deadline.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;
        const uid = e.target.uid.value;

        console.log(campaignTitle, campaignType, image, description, minimumDonationAmount, deadline, userEmail, userName, uid);
        const updateCampaign = {campaignTitle, campaignType, image, description, minimumDonationAmount, deadline, userEmail, userName, uid};

        fetch(`https://crowd-cube-adnanmahmud.vercel.app/updatecampaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

        

    };

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center mb-16">
                    <div>

                    </div>
                    <h4 className="text-[#185C65] text-base font-semibold mt-6">
                        Update Campaign
                    </h4>
                </div>

                <form onSubmit={updateCampaign}>
                    <div className="md:grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-[#185C65] text-sm mb-2 block">
                                Campaign title
                            </label>
                            <input required
                                name="campaignTitle"
                                type="text"
                                defaultValue={campaignTitle}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                                placeholder="Enter campaign title"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Campaign Type
                            </label>
                            <select
                                name="campaignType"
                                
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                                defaultValue=""
                            >
                                <option defaultValue={campaignType} disabled>
                                    {
                                        campaignType
                                    }
                                </option>
                                <option value="Personal Issue">Personal Issue</option>
                                <option value="Startup">Startup</option>
                                <option value="Business">Business</option>
                                <option value="Creative Ideas">Creative Ideas</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-800 text-sm mb-2 block">
                                Image
                            </label>
                            <input required
                                name="image"
                                type="text"
                                defaultValue={image}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                                placeholder="Enter image link"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-800 text-sm mb-2 block">
                                Description
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Minimum donation amount
                            </label>
                            <input required
                                name="minimumDonationAmount"
                                type="number"
                                defaultValue={minimumDonationAmount}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                                placeholder="Enter minimum donation amount"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Deadline
                            </label>
                            <input required
                                name="deadline"
                                type="date"
                                defaultValue={deadline}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                User Email
                            </label>
                            <input
                                disabled
                                defaultValue={userEmail}
                                name="userEmail"
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                User Name
                            </label>
                            <input
                                disabled
                                defaultValue={userName}
                                name="userName"
                                type="text"
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#185C65] transition-all"
                            />
                        </div>
                        <div >
                            <input className='hidden' name="uid" defaultValue={uid} type="text" value={selectedCampaign.uid} />
                        </div>
                    </div>

                    <div className="mt-12">
                        <button
                            type="submit"
                            className="w-full py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#185C65] hover:bg-[#133F47] focus:outline-none"
                        >
                            Update Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UpdateCampaign;