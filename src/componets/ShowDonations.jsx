import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const ShowDonations = ({donateInfo}) => {


    const{Picture,id,Title,Category,Category_bg,Card_bg,Text_bg }=donateInfo;


  
    const textStyle = {
      color: Text_bg
  };

  const Categorystyle={
    color:Category_bg
  };

  const cardBackColor={
    backgroundColor:Card_bg
  }


    





    

    return (
        <div>
           <Link to={`/detail/${id}`}><div style={cardBackColor} className="card my-4">
  <figure><img src={Picture}alt="Food/Healt" /></figure>
  <div className="card-body">
    <h2 className="card-title"><button className=' px-2 border border-green-200' style={Categorystyle}>{Category}</button></h2>
    <p className='text-xl  font-bold'><span style={textStyle}>{Title}</span></p>
  
    
  </div>
</div>
</Link>







        </div>
    );
};

 ShowDonations.propTypes ={

 donateInfo:PropTypes.object


 }







export default ShowDonations;