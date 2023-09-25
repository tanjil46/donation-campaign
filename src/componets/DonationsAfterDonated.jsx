import { useEffect, useState } from "react";
import SelectedDonations from "./SelectedDonations";




const DonationsAfterDonated = () => {
const [localData,setLocalData]=useState([])
const[dataLength,setDataLength]=useState(4)
const[dataError,setDataerror]=useState(false)


  useEffect(()=>{



    const donationStrorage=JSON.parse(localStorage.getItem('donate'))



              if(donationStrorage){
                setLocalData(donationStrorage)
              }else{
                  setDataerror("No data found")

              }


          
          
          
       
    
      





  },[])

  



     






    return (
      <div className="">

      {dataError? <p className="text-3xl h-screen flex items-center justify-center">{dataError}</p>: 

     


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  ">
            
    {
     
       localData.slice(0,dataLength).map(donateData=><SelectedDonations donateData={donateData} key={donateData.id}></SelectedDonations>)
    }


        

     <div className={dataLength===localData.length &&'hidden'}>
 <div className="text-center">
       <button onClick={()=>setDataLength(localData.length)} className="btn btn-primary ">Show All</button>
       </div>

     </div>


</div>
       
}

        </div>
    );
};

export default DonationsAfterDonated;