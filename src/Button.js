import React from "react"

const Button = (props) =>{
    // const [data, setData] = useState({
    //     username : "prajakta",
    //     email : "abc@gmail.com"
    // });
    const user = {
        username : "prajakta",
        email : "abc@gmail.com"
    }
    const onClick = ()=>{
        props.sendData(user)
    }
    console.log("props1",props)
    return(
        <div>
            <button onClick= {onClick}></button>
        </div>
    );
}

export default Button;
