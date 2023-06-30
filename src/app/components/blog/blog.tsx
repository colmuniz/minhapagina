import { Fragment } from "react";
import './style.css'
import { BlogItem } from "../blogItem/blogItem";
export const Blog = () => {

    return <div className= "principal">
        <div className= "centralizador-blog">
        </div>
        <div className= "centralizador-blog">
            <div>
                <h2 className="titulo-blog"> Últimas do blog
                </h2>
            </div>

            <div className="espaco-blog">
            <BlogItem title= "5 dicas para sua carreira profissional"> 
            Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end
            </BlogItem>
            </div>

            <div className="espaco-blog">
            <BlogItem title= "5 dicas para sua carreira profissional">
            Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end
            </BlogItem>
            </div>

            <div className="espaco-blog">
            <BlogItem title= "5 dicas para sua carreira profissional">
            Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end        
            </BlogItem>
            </div>  
            <a href="https://www.linkedin.com/in/carolina-muniz-84923190/" className="final"> Ver Tudo</a>    
        </div>
        <div className= "centralizador-blog">
        </div>
    </div>
}