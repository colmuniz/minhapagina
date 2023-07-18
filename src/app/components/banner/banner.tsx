import { Fragment, ReactNode } from "react";
import './style.css'
export const Banner = (props: {
    title: string;
    children: ReactNode;
    image: string;
}) => {

    return <Fragment>
        <div className="elemento-principal">
            <div className="elemento-interno celula1">
                <div className="circle">  
                    <img src={props.image} />  
                </div>  
            </div>
            <div className="elemento-interno">
                <h1 className="titulo-banner"> {props.title} 
                </h1>
                <p className="descricao-banner"> {props.children}
                </p>
            </div>
        </div>
    </Fragment>
    
}