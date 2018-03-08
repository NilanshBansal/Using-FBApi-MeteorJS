import React from "react";
import {Component} from "react";

class Fblogin extends Component{
    constructor(props){
        super(props);
        this.state={auth:false,token:""};
    }
    login(){
        // this.setState({auth:,token:});
        let that=this;
        
        FB.login(function(response) {
        
            console.log(response);
            if (response.authResponse) {
                that.setState({auth:true,token:response.authResponse.accessToken});
             console.log('Welcome!  Fetching your information.... ');
            
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
    render(){
        return (<button className="fb-login-button btn btn-lg" onClick={this.login.bind(this)}>FB Login</button>)
    }
}

export default Fblogin;