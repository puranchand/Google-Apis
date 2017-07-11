import React from 'react';
import Activities from './Activities'; 

import { Link } from 'react-router'


class Analytics extends React.Component {


   render() {
      return (
         <div className='Analytics'>
         		<div className='Analytics_div'><Activities /></div>
         		<div className='Analytics_div'><Activities /></div>

         </div>
      )
   }
}
 
export default Analytics;
