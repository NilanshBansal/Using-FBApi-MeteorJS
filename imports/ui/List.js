import React from "react";

export default List = (props) => {
    let data = props.data || [];
    data.sort(function(a,b){
        return b.fan_count-a.fan_count;
    });
    console.log(data);
    const renderListItems = (data) => {
        
        return data.map((e, i) => {

            return <tr key={i}><td><img src={e.picture.data.url} /></td><td>{e.name}</td><td>
                {(e.cover && e.cover.source)?<img src={e.cover.source} style={{width:"250px"}}/>:<div></div>
                
                }
               </td><td>{e.fan_count}</td><td>{e.rating_count}</td><td>{e.overall_star_rating}</td></tr>;

        });
        console.log(data);

    }
        return (
            // <ul>{renderListItems(data)}</ul>
             <div className="container">
                 <table className="table table-hover table-bordered">
                     <thead><tr><th>Logo</th><th>Page Name</th><th>Cover Image</th><th>Fan Count</th><th>Rating Count</th><th>Overall Star Rating</th></tr></thead>
                     <tbody>{renderListItems(data)}</tbody>
                </table>
            </div>
        )
    


    }