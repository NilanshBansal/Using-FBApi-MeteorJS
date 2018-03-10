import React from "react";

export default List = (props) => {
    let data = props.data || [];
    console.log(data);
    const renderListItems = (data) => {
        
        return data.map((e, i) => {

            return <tr key={i}><td>{e.id}</td><td>{e.name}</td></tr>;

        });
        console.log(data);

    }
        return (
            // <ul>{renderListItems(data)}</ul>
             <div className="container">
                 <table className="table table-hover table-bordered">
                     <thead><tr><th>Id</th><th>Page Name</th></tr></thead>
                     <tbody>{renderListItems(data)}</tbody>
                </table>
            </div>
        )
    


    }