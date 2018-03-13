import React from "react";
import { Component } from "react";
import List from "../ui/List";

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={search:""};
        this.onChange=this.onChange.bind(this);
        this.getPages=this.getPages.bind(this);
    }
    onChange(event){
        console.log(event.target.value);
        this.setState({search:event.target.value})
    }
    getLongToken(){
        Meteor.call("token.getLongToken","long",(err,res)=>{
            if(err){
                console.log(err);
                // return null;
            }
            else{
                console.log(res.token);
                let tokenName=res.token;
                //return res.token;
                Meteor.call("Pages.find",this.state.search,(err,res)=>{
                    if(!res){
                        console.log(err);
                        Meteor.call("get_pages",this.state.search,tokenName,(err,response)=>{
                            if(err){
                                console.log(err);
                            }
                            if(response){
                                console.log("res: ",response);
                                this.setState({data:response.data.data});
                                Meteor.call("Pages.insert",this.state.search,this.state.data,(err,res)=>{
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        console.log(res);
                                    }
                                })
                            }
                        })
                    }
                    else{
                        this.setState({data:res.data})
                        // console.log(res);
                    }
                })


                
            }
        })
    }
    getPages(){
        console.log(this.state.search);
        // let longToken= await this.getLongToken();
        // console.log(longToken);
        // if(longToken){
        //     console.log(longToken);
            // Meteor.call("get_pages",this.state.search,longToken,(err,res)=>{
            //     if(err){
            //         console.log(err);
            //     }
            //     else{
            //         console.log(res);
            //     }
            // })
        this.getLongToken();
        }

    

    render(){
        return(
        <div className="container"><br />
            <label>SEARCH</label>
            <input type="text" className="form-control" value={this.state.search} placeholder="search string" onChange={this.onChange}/>
            <button className="btn btn-primary btn-lg" onClick={this.getPages}>Search</button>
            <List data={this.state.data}/>
        </div>);
        
    }

}

