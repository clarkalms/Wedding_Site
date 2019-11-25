import React, { Component } from "react";
import RSVPForm from '../components/RSVPForm';
class RSVP extends Component {
    
    render(){
        return (
            
            <div style={{ 
                backgroundColor: 'green',
                height: '740px'
                }}>
            
                <RSVPForm />
            </div>
        )
    }
}


export default RSVP;