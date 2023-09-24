import { useEffect, useState } from "react";
import ShowDonations from "./ShowDonations";


const GetDonation = () => {

    const[donationItems,setDonationItems]=useState([])
      
    useEffect(()=>{


     fetch('donation.json')
     .then(res=>res.json())
     .then(data=>setDonationItems(data))


    },[])


return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7">
          {
            donationItems.map(donateInfo=><ShowDonations donateInfo={donateInfo} key={donateInfo.id}></ShowDonations>)
          }
        </div>
    );
};

export default GetDonation;