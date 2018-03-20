import React from "react";
import { Component } from "react";
class Fblogin extends Component {
    constructor(props) {
        super(props);
        this.state = { auth: false, token: "" };
    }
    getLongToken() {
        Meteor.call("get_fb_long_token", this.state.token, (err, res) => {
            if (err) {
                console.log("err : ", err);
            }
            else {
                console.log("res : ", res);
                this.saveToken(res.data.access_token, "long");
            }
        })
    }
    saveToken(token, tokenType) {
        Meteor.call("tokens.insert", token, tokenType, (err, res) => {
            if (err) {
                console.log("err : ", err);
            }
            else {
                console.log("res : ", res);
                if (tokenType == "short") {
                    this.getLongToken();
                }
            }
        })
    }

    login() {
        // let that=this;

        window.FB.login(function (response) {

            console.log(response);
            if (response.authResponse) {
                this.setState({ auth: true, token: response.authResponse.accessToken });
                console.log('Welcome!  Fetching your information.... ');
                this.saveToken(this.state.token, "short");
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }.bind(this),{
            scope: 'manage_pages, read_insights,instagram_basic,instagram_manage_insights',
            return_scopes: true
          });
    }
    logout() {
        window.FB.logout(function (response) {
            console.log("Successfully logged out!");
        });
    }
    render() {
        return (<div><button className="btn btn-lg btn-primary" onClick={this.login.bind(this)}>FB Login</button><button className="btn btn-lg btn-danger" onClick={this.logout.bind(this)}>FB Logout</button></div>)
    }
}

export default Fblogin;