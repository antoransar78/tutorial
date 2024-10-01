import React from 'react'
import Proptypes from "prop-types"

const UserGreeting = (props) => {
    
    const welcomeMessage = <h2 className='welcome-message'>
                            welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className='login-prompt'>
                        Please login to continue
                        </h2>

    return (props.isLoggedIn? welcomeMessage : loginPrompt );
    
  
}
UserGreeting.proptypes ={
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,

}
UserGreeting.DefaultProps ={
    isLoggedIn: false,
    username: "Hello Bro",
}
export default UserGreeting
