import React from "react";

export default List = (props) => {
    let data = props.data || [];
    console.log(data);
    const renderListItems = (data) => {
        
        return data.map((e, i) => {

            return <tr key={i}><td>{e.name}</td><td>{e.id}</td></tr>;

        });
        console.log(data);

    }
        return (
            // <ul>{renderListItems(data)}</ul>
             <table><tbody>{renderListItems(data)}</tbody></table>
        )
    


    }