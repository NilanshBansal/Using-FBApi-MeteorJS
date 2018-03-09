import React from "react";
import {Component} from "react";

class Fblogin extends Component{
    constructor(props){
        super(props);
        this.state={auth:false,token:""};
    }
    saveToken(){
        Meteor.call("tokens.insert",this.state.token,"short",(err,res)=>{
            if(err){
                console.log("err : ",err);
            }
            else{
                console.log("res : ",res);
            }
        })
    }
    
    login(){
        // let that=this;
        
        FB.login(function(response) {
        
            console.log(response);
            if (response.authResponse) {
                this.setState({auth:true,token:response.authResponse.accessToken});
             console.log('Welcome!  Fetching your information.... ');
                this.saveToken();
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        }.bind(this));
    }
    logout(){
        FB.logout(function(response){
            console.log("Successfully logged out!");
        });
    }
    render(){
        return (<div><button className="btn btn-lg btn-primary" onClick={this.login.bind(this)}>FB Login</button><button className="btn btn-lg btn-danger" onClick={this.logout}>FB Logout</button></div>)
    }
}

export default Fblogin;