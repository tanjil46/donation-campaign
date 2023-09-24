import { useEffect, useState } from "react";
import SelectedDonations from "./SelectedDonations";




const DonationsAfterDonated = () => {
const [localData,setLocalData]=useState([])


  useEffect(()=>{



    const donationStrorage=JSON.parse(localStorage.getItem('donate'))

            setLocalData(donationStrorage)
          
          
       
    
      





  },[])





     




console.log(localData)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            
    {
     
       localData.slice(0,4).map(donateData=><SelectedDonations donateData={donateData} key={donateData.id}></SelectedDonations>)


    }
        





        </div>
    );
};

export default DonationsAfterDonated;