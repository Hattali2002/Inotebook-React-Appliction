import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        console.log("hello")
        console.log(props)
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return ( 
        props.alert && <div className="alert alert-success">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    )
}
