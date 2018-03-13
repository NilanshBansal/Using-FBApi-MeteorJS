import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Pages=new Mongo.Collection("Pages");

Meteor.methods({
    "Pages.insert"(searchQuery,pagesList){
        /* let pageArray=[];
        pagesList.data.forEach(eachPage=>{
            
        }); */
        // console.log(pagesList.data);
       return Pages.insert({
            searchQuery:searchQuery,
            data:pagesList
        });
    },
    "Pages.find"(searchQuery){
        return Pages.findOne({searchQuery});
    }
})