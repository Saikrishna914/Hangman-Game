import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted");
    }
    
    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
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