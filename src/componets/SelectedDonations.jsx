import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi"
const SelectedDonations = ({donateData}) => {
          const{Picture,Title,Category,Category_bg,Text_bg,Price,Card_bg}=donateData



          const cardBackColor={
            backgroundColor:Card_bg
          }

          const textStyle = {
            color: Text_bg
           
        };
      
      const buttonBackcolor={
        backgroundColor:Text_bg




      };
        
  const Categorystyle={
    color:Category_bg
  };







    return (
        <div className=''>
            
            
  <div style={cardBackColor} className=" lg:flex mx-6  gap-2 my-5">
    <div className="">
    <img src={Picture} className="lg:w-[250px] w-full" />
    </div>
        <div className="">
      <h1 style={Categorystyle} className="font-bold ">{Category}</h1>
      <p style={textStyle} className='text-xl font-bold'>{Title}</p>
      <div style={Categorystyle} className="flex items-center">
     <BiDollar  className='text-xl'></BiDollar>
       <h2 className='text-xl font-bold'><span>{Price}</span></h2>
       </div>
      <button style={buttonBackcolor} className="btn text-white font-bold">View Details</button>
      </div>
</div>






        </div>
    );
};






SelectedDonations.propTypes ={

    donateData:PropTypes.object
   
   
    }
   



export default SelectedDonations;