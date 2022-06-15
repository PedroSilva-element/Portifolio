import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import Footer from './footer.jsx';
import Hgroup from './hgroup.jsx';

const Aside = (props) => {

	return (
		<>
			<aside>
				<Hgroup Title="Pedro Silva" subTitle="Desenvolvedor Front-End" />
				<nav>
					<Link to={'/about'}><Button variant="contained">Home Page</Button></Link>
					<Link to={'/formation'}><Button variant="contained">Formation</Button></Link>
					<Link to={'/project'}><Button variant="contained" >Projects</Button></Link>
					<Link to={'/contact'}><Button variant="contained" >Contact</Button></Link>
				</nav>
				<Footer
					pFooter="Picos-Pi"
					dateFooter={new Date().toLocaleTimeString()}
				/>
			</aside>

		</>
	);
};
export default Aside;