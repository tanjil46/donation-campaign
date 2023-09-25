import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BiDollar } from "react-icons/bi"

const Donatedetails = () => {
 
    const donateDetail=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)

    const deTailIs=donateDetail.find(detail=>detail.id===idInt)
  


    const{Picture,Price,Description,Title,Text_bg}=deTailIs

    const donateBtnColor={
      backgroundColor:Text_bg
    }

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
        toast.success('Successfully Donated')
      }
        else{

             toast.error('Already Donated')

        }
     



    }





 }



      
    return (
        
            
         
<div className="">
                 <div className="relative mt-10 mb-10 mx-auto w-[80%] ">


                    <img className=" w-full mx-auto h-auto" src={Picture}></img>

             <div className="w-full h-[18%] absolute text-center bottom-0  opacity-50   flex  justify-center  items-center bg-black">
             <button onClick={donateHandler} style={donateBtnColor} className='btn text-xl font-bold text-white'>Donate<BiDollar/><span>{Price}</span></button>
             <ToastContainer/>
           </div>
 </div>




                <div className=" text-center p-4">
                    <p className="text-xl font-bold">{Title}</p>
                    <p>{Description}</p>
                </div>
           




                 </div>



             











  
    );
};

export default Donatedetails;