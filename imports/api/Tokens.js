import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Tokens=new Mongo.Collection("tokens");

Meteor.methods({
    "tokens.insert"(token,type){
        return Tokens.insert({token,type});
    },
    "token.getLongToken"(type){
        return Tokens.findOne({type});
    },
})