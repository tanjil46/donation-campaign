import { useLoaderData, useParams } from "react-router-dom";


const Donatedetails = () => {
 
    const donateDetail=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)

    const deTailIs=donateDetail.find(detail=>detail.id===idInt)
    console.log(deTailIs)


    const{Picture,Price,Description,Title}=deTailIs






    return (
        <div>
            
                <div className="mt-10">

                 <div className="">

                    <img className="w-[60%] mx-auto" src={Picture}></img>

                   <p className=""></p>



                 </div>








                </div>











        </div>
    );
};

export default Donatedetails;