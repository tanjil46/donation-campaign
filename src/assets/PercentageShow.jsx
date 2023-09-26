import PropTypes from 'prop-types';

import Percentagedonate from "../componets/Percentagedonate";


const PercentageShow = ({donatePrice,lenGth}) => {



    

 

    const totalDonate = donatePrice.reduce((preValue, currentValue) => preValue + currentValue, 0)
    


  
    




  








    return (
        <div>
           
          
            <Percentagedonate  lenGth={lenGth}  totalDonate={totalDonate}></Percentagedonate>



            



           
            
        </div>
    );
};





PercentageShow.propTypes = {
    donatePrice: PropTypes.array,
    lenGth:PropTypes.number
  };





export default PercentageShow;