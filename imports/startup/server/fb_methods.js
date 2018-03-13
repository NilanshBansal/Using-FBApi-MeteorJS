import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";

Meteor.methods({
    "get_fb_long_token"(shortToken){
        let baseURL = "https://graph.facebook.com/v2.12/";
        let path = "oauth/access_token?grant_type=fb_exchange_token";
        let clientId = "940894359404160";
        let clientSecret = "697f00701eff719586325ea931149c4c";
        let apiURL = `${baseURL}${path}&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${shortToken}`;
        let res = HTTP.call("get", apiURL);
        console.log("res : ", res);
        return res;
    },
    "get_pages"(pageName,longToken){
        let baseURL = "https://graph.facebook.com/v2.12/search?";
        let type="page";
        let clientId = "940894359404160";
        let fields="cover,name,picture,fan_count,rating_count,overall_star_rating";
        let clientSecret = "697f00701eff719586325ea931149c4c";
        let apiURL = `${baseURL}type=${type}&q=${pageName}&client_id=${clientId}&client_secret=${clientSecret}&oauth_token=${longToken}&fields=${fields}`;
        let res = HTTP.call("get", apiURL);
        console.log("res : ", res);
        return res;
    }
})