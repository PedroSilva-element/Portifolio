import Button from '@mui/material/Button';

import Footer from './footer.jsx';
import Hgroup from './hgroup.jsx';

const Aside = (props) => {

	return (
		<aside>
			<Hgroup Title="Pedro Silva" subTitle="Desenvolvedor Front-End" />

			<Button variant="contained" onClick={props.home}>Home Page</Button>
			<Button variant="contained" onClick={props.formation}>Formation</Button>
			<Button variant="contained" onClick={props.project}>Projects</Button>
			<Button variant="contained" onClick={props.contact}>Contact</Button>

			<Footer
				pFooter="Picos-Pi"
				dateFooter={new Date().toLocaleTimeString()}
			/>

		</aside>
	);
};
export default Aside;