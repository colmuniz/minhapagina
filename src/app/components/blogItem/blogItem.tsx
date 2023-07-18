import { Fragment, ReactNode } from "react";
import './style.css'
export const BlogItem = (props: {
    title: string;
    children: ReactNode
}) => {

    return <Fragment>
        <div className="titulo">
            <h3 > {props.title} 
            </h3>
        </div>
        <div className="espaco">
            <p className="descricao"> {props.children}
            </p>
        </div>
       
    </Fragment>
}