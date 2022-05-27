
import Github from '../../image/icons/github.png';
import Instagram from '../../image/icons/instagram.png';
import Linkedin from '../../image/icons/linkedin.png';
import Twitter from '../../image/icons/twitter.png';

const Contact = () => {
    return (
        <article className="contact">
            <figure className='social'>
                <img src={Github} alt="Icon github" />
                <img src={Instagram} alt="Icon github" />
                <img src={Linkedin} alt="Icon github" />
                <img src={Twitter} alt="Icon github" />
            </figure>
            <form className='form'>
                <label htmlFor="email"></label>
                <input type="email" name="" id="email" placeholder='Digite seu email...' />
                <label htmlFor="tema"></label>
                <input type="text" name="" id="tema" placeholder='Assunto...' />
                <textarea name="" id="" cols="50" rows="10"></textarea>
                <input type="button" value="Enviar" />
            </form>

        </article>
    );
};
export default Contact;