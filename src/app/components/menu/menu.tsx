import { Fragment, ReactNode } from "react";
import './style.css'
import { MenuItem } from "../menuItem/menuItem";
export const Menu = () => {
    return <Fragment>
        <div className= "tabela">
                <div className="menu">
                    <div className="item">            
                        <MenuItem url="https://www.linkedin.com/in/carolina-muniz-84923190/">
                            Blog
                        </MenuItem>
                    </div>
                    <div className="item">            
                        <MenuItem url="https://www.linkedin.com/in/carolina-muniz-84923190/">
                            Sobre
                        </MenuItem>
                    </div>
                    <div className="item">            
                        <MenuItem url="https://www.linkedin.com/in/carolina-muniz-84923190/">
                            Descrição
                        </MenuItem>
                    </div>  
                </div>
        </div>  
       </Fragment>
}