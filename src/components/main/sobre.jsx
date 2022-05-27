import '../../layout/section-area/sobre.css';
import Perfil from '../../image/icons/perfil.png'

const Sobre = (props) => {
    return(
        <article className="sobre">
            <img src={Perfil} alt="" />
            <hgroup>
                <h1>{props.nome}</h1>
                <h3>{props.skill}</h3>
            </hgroup>
        </article>
    );
};
export default Sobre;