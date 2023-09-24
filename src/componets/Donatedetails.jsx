import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Donatedetails = () => {
 
    const donateDetail=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)

    const deTailIs=donateDetail.find(detail=>detail.id===idInt)
  


    const{Picture,Price,Description,Title,Text_bg}=deTailIs

    const donateHandler=()=>{

     const doNations=[];


     const donationStrorage=JSON.parse(localStorage.getItem('donate'))

     if(!donationStrorage){
       doNations.push(deTailIs)
       localStorage.setItem('donate',JSON.stringify(doNations));
       toast.success('Successfully Donated')



     }else{
       
        const isThereDonations=donationStrorage.find(storage=>storage.id===idInt)

         if(!isThereDonations){
        
        doNations.push(...donationStrorage,deTailIs)
        localStorage.setItem('donate',JSON.stringify(doNations))
      }
        else{

             toast.error('Already Donated')

        }
     



    }















       











    }



      




















    return (
        
            
         
<div className="">
                 <div className="relative mt-10 mb-10">


                    <img className=" w-[60%] mx-auto" src={Picture}></img>

             <p className="w-[60%] absolute opacity-50 h-[18%] ml-18 -mt-24 text-center bg-green-400">
             <button onClick={donateHandler} className={`btn bg-${Text_bg}`}>Donate<span>{Price}</span></button>
             <ToastContainer/>
           </p>
 </div>




                <div className=" text-center p-4">
                    <p className="text-xl font-bold">{Title}</p>
                    <p>{Description}</p>
                </div>





                 </div>



             











  
    );
};

export default Donatedetails;