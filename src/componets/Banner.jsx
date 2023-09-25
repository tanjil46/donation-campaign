
import { useEffect, useState } from "react";

import BannerSearch from "./BannerSearch";






const Banner = () => {

    const [searchItems,setSerachItems]=useState([])
   
    const[submitValue,setSubmitValue]=useState('')



 
    useEffect(()=>{


        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setSerachItems(data))
    
    
    
    },[])



    const mathingId = searchItems.filter(items=>items.Category.includes(submitValue))







const searchHandler=(e)=>{
    e.preventDefault();



    
  
  }
 return (
        <div>
            

            <div className="pt-24 space-y-7">


<p className="lg:text-6xl md:text-3xl text-xl text-center font-bold">I Grow By Helping People In Need</p>
      
     <div  className="text-center">
        <form onSubmit={searchHandler}>
     <input onChange={(e)=>setSubmitValue(e.target.value)} value={submitValue}  className="py-2 px-5 outline-none border-b  border-blue-500" type="text"  placeholder="Search Here"></input>
     <button type="submit"  className="btn btn-error">Search</button>
     </form>
         
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mt-7 px-6">




            {

            mathingId.map(match=><BannerSearch match={match} key={match.id}></BannerSearch>)


          
           }
          </div>



     </div>

</div>




 </div>
    );
};

export default Banner;