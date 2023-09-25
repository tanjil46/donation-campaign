
import { useState } from "react";
import { Link } from "react-router-dom";




const Banner = () => {

    const [searchItems,setSerachItems]=useState([])
    const[searchValue,setSerachValue]=useState('')
   

const searchHandler=()=>{







 fetch('donation.json')
 .then(res=>res.json())
 .then(data=>setSerachItems(data))
 




}
console.log(searchValue)







    return (
        <div>
            

            <div className="pt-24 space-y-7">


<p className="lg:text-6xl md:text-3xl text-xl text-center font-bold">I Grow By Helping People In Need</p>
      
     <div  className="text-center">
     <input onChange={(e)=>setSerachValue(e.target.value)} value={searchValue} className="py-2 px-5 outline-none border-b  border-blue-500" type="text"  placeholder="Search Here"></input>
     <button onClick={searchHandler} className="btn btn-error">Search</button>

          {

          
         searchItems.map(item=><Link key={item.id} to={`item/${item.id}`}></Link>)

          }




     </div>

</div>
















        </div>
    );
};

export default Banner;