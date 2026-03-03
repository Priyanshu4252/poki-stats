import React,{ useState} from "react";

function Bar(props){

    const [input,setInput]= useState("");

    function handlechange(event){
        setInput(event.target.value);
    }
    function handleclick(event){
        if(event.key === "Enter"){
            props.onSearch(input.toLowerCase().trim());
        }
    }
    return (
        <div id="input_container">
            <input 
                type="text" 
                placeholder="Search pokemon by id (1-1025) or by name.." 
                value={input} 
                onChange ={handlechange} 
                onKeyDown={handleclick} 
                id="input" />
        </div>
    );
}

export default Bar