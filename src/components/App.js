import React from 'react';
import { Link } from 'react-router'


import Activities from './Activities.js'
import Analytics from './Analytics'



class App extends React.Component {

   

   render() {
      return (
         <div >
            
            
            <ul>
            <Link to='Activities'><n className='header'>Activities</n></Link>
            &ensp;&ensp;
            <Link to='Analytics'><n className='header'>Analytics</n></Link>
        
            
            
            </ul>
            {this.props.children}
			</div>
      )
   }
}

export default App;