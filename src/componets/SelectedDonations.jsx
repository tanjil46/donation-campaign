import PropTypes from 'prop-types';

const SelectedDonations = ({donateData}) => {
          const{Picture,Title,Category,Card_bg,Text_bg,Price}=donateData











    return (
        <div>
            
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={Picture} className="" />
    <div>
      <h1 className="">{Category}</h1>
      <p className='text-xl font-bold'>{Title}</p>
      <h2 className=''>{Price}</h2>
    
      <button className="btn ">View Details</button>
    </div>
  </div>
</div>






        </div>
    );
};






SelectedDonations.propTypes ={

    donateData:PropTypes.object
   
   
    }
   



export default SelectedDonations;