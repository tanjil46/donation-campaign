
import PropTypes from 'prop-types';

import { PieChart, Pie,Cell, Tooltip, Legend } from 'recharts';







const Percentagedonate = ({totalDonate,lenGth}) => {
  
      
       
       let totalDonationPercentage=100;
      let DonationPercentage=0;



      DonationPercentage=totalDonate/lenGth


       totalDonationPercentage=100-DonationPercentage

     


    
















   const data=[
      { name: 'Your Donation', value: DonationPercentage},
      { name: 'Total Donation', value:totalDonationPercentage},
      
     
    ];
    
    const COLORS = ['#4CAF50', '#F44336'];
    
  






    return (
      
            



      <div className='h-screen grid justify-center items-center lg:flex lg:justify-center lg:items-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
        <div style={{ textAlign: 'center' }}>
          {data.map((entry, index) => (
            <div key={`label-${index}`} style={{ display: 'inline-block', margin: '10px' }}>
              <div
                style={{
                  width: '100px',
                  height: '20px',
                  backgroundColor: COLORS[index % COLORS.length],
                  display: 'inline-block',
                  marginRight: '5px',
                }}
              />
              <span>{`${entry.name}: ${entry.value}%`}</span>
            </div>
          ))}
        </div>
    
      </div>
    );








  














};






Percentagedonate.propTypes = {
  totalDonate: PropTypes.number,
  lenGth:PropTypes.number
};











export default Percentagedonate;