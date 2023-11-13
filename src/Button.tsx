// import { useState } from "react"
import './Button.css'
import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
    label: String;
    isClicked: boolean;
    onClick?: () => void;
} & PropsWithChildren;

const Button: FunctionComponent<Props> = (props: Props)=>{


    return(
        <>
        <div className="button" >
            <button onClick={props.onClick}>button</button>
        </div>
        <p>{props.isClicked}</p>
        </>
    )
}


export default Button;
