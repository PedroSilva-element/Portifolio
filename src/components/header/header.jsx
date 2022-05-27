import '../../layout/section-area/header.css';
import Nav from "./nav";
import Hgroup from './hgroup';

const Header = () => {
    return(
        <header className="header">
            <Nav 
            iten01="Inicio"
            iten02="Formation"
            iten03="Projects"
            iten04="Contact"
            />
            <Hgroup 
            title="Pedro VS Ferreira"
            subtitle="Analista de Sistemas"
            subtitle02="Desenvolvedor Front-End"
            />
        </header>
    );
};

export default Header;