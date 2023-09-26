import { useEffect, useState } from "react";

import PercentageShow from "../assets/PercentageShow";




const GetDonatePercentage = () => {

  const[getDonate,setGetDonate]=useState([])
 


















 useEffect(()=>{
    const donationStrorage=JSON.parse(localStorage.getItem('donate'))

    setGetDonate(donationStrorage)


 },[])


 
const donatePrice=getDonate.map(donate=>donate.Price)

 











    return (
        <div>
             <PercentageShow  lenGth={donatePrice.length} donatePrice={donatePrice}></PercentageShow>


        </div>
    );
};

export default GetDonatePercentage;