import '../../layout/section-area/nav.css';


const Nav = (props) => {
    return(
        <nav className=".nav">
            <ul className='list-nav'>
                <li>{props.iten01}</li>
                <li>{props.iten02}</li>
                <li>{props.iten03}</li>
                <li>{props.iten04}</li>
            </ul>
        </nav>
    );
};

export default Nav;