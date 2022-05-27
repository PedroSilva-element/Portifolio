import Contact from "./contact";
import Formation from "./formation";
import Sobre from "./sobre";
import Projects from "./projects";


const Main = () => {
    return(
        <main>
            <Sobre 
            nome="Pedro Venancio Da Silva Ferreira"
            skill="Desenvolvedor Front end"
            />
            <Formation />
            <Projects />
            <Contact />
        </main>
    );
};
export default Main;