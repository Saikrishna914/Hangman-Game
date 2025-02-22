import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");
    const [value,setValue]=useState("");
    
    const navigate = useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted", value);
        if(value){
            navigate("/play");
        }
    }
    
    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick(event){
        console.log("Show/Hide button clicked");
        if(inputType==="password"){
            setInputType("text");
        }
        else{
            setInputType("password");
        }
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;