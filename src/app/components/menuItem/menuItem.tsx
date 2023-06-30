import { Fragment, ReactNode } from "react";
import './style.css'
export const MenuItem = (props: {
    url: string;
    children: ReactNode
}) => {

    return <Fragment>
       <a href={props.url}> {props.children}</a>
       
    </Fragment>
}