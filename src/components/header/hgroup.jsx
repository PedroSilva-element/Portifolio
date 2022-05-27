import '../../layout/section-area/hgroup.css';
import Nav from "./nav";

const Hgroup = (props) => {
    return(
        <hgroup className="hgroup">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h2>{props.subtitle02}</h2>
        </hgroup>
    );
};

export default Hgroup;