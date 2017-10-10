import React from 'react';
import axios from 'axios';
import {Link } from 'react-router'
import moment from 'moment';




class Activities extends React.Component {

  constructor(props) {
    super(props);
   this.state={
      Active_data:''
   }
    this.getActivities=this.getActivities.bind(this)
  }


getActivities(){
    axios.get(`https://nuvi-challenge.herokuapp.com/activities`)
    .then(res => {
     
     console.log(res.data.slice(0, 50))

      const {status, data} = res;
      console.log(data)
      
      if (status === 200) {
          this.setState({ Active_data : data.slice(0, 50)})
      }

    }).catch(err => console.log(err))

  }

  componentWillMount() {
    this.getActivities()
  }

   render() {
    const {Active_data} = this.state
    console.log(this.state.Active_data+'render')
      return (
         <div className='container'>
       
      
       
        
            <ul>
              { Active_data && Active_data.length && Active_data.map((elem,index) =>              
             <li key={index}>

                <div className='content'>
                      <div className='top-content'>
                          <div className='image'>
                            <a target="_blank" href={elem.actor_url}>
                              <img className="activity-avator" height={45} width={45} src={elem.actor_avator || '/img/default.png'} />
                            </a>
                          </div>
                          <div className='imageSide'>
                              <a target="_blank" href={elem.actor_url}>@{elem.actor_username}</a>
                              <a className='provider' target="_blank" href={elem.actor_url}>{elem.provider}</a>
                              <br />
                              <span>{elem.actor_description}</span>
                              <br/>
                              <a target="_blank" href={elem.activity_url}>
                                {moment(elem.activity_date).format('DD MMM')}
                              </a>  
                          </div>

                      </div>

                      <div className='middle_content'>
                        {elem.activity_attachment_type == 'image/jpeg' ?
                          <img className="img-responsive" src={elem.activity_attachment} /> : elem.activity_message && elem.activity_message}
                      </div>

                      <div className='bottom_content'>
                         likes:{elem.activity_likes}&ensp;&ensp;reply:{elem.activity_shares}
                         <a className='comment' href='&&&'>
                         comments:{elem.activity_comments}
                         </a>
                      </div>

                    

                </div>  

            </li>
              )}
          </ul>
       
       
      
         
        </div>
      )
   }
}

export default Activities;








