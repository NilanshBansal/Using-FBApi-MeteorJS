import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fblogin from "../../ui/Fblogin"

class App extends Component {
    constructor(props) {
        super(props);

    }
    setSDK(){
        window.fbAsyncInit = function () {
            FB.init({
                appId: '940894359404160',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.12'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.setSDK();
    }


    render() {
        return (<Fblogin />);
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector(".render-target"));
});