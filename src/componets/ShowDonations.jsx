import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ShowDonations = ({donateInfo}) => {

console.log(donateInfo)
    const{Picture,id,Title,Category,Category_bg,Card_bg,Text_bg }=donateInfo;
      
// STYLING IS UNFINISHED IN BG,TEXT DYMIC


    

    return (
        <div>
           <Link to={`/detail/${id}`}><div className={`card  bg-base-100 shadow-xl ${Card_bg}`}>
  <figure><img src={Picture}alt="Food/Healt" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className={`${Category_bg}`}>{Category}</span></h2>
    <p className='text-xl font-bold'><span className={`${Text_bg}`}>{Title}</span></p>
  
    
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