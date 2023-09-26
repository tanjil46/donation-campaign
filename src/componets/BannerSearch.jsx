import { Link } from "react-router-dom";
import PropTypes from 'prop-types'




const BannerSearch = ({match}) => {
          
     

    const{Picture,id,Title,Category,Category_bg,Card_bg,Text_bg }=match;


  
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
       

       <div className="my-7">
           <Link to={`/detail/${id}`}><div style={cardBackColor} className="card my-4">
  <figure><img src={Picture}alt="Food/Healt" /></figure>
  <div className="card-body">
         <div className="  mx-auto">
    <h2 className="card-title ">
      <button className=' px-2 border  border-green-300' style={Categorystyle}>{Category}</button>

      </h2>
      </div>
    <p className='lg:text-lg md:text-sm text-xl font-bold'><span style={textStyle}>{Title}</span></p>
  
    
  </div>
</div>
</Link>



</div>


</div>
    );
};







  BannerSearch.propTypes ={

    match:PropTypes.object
   
   
    }
   









export default BannerSearch;