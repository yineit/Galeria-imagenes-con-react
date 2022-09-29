// components/Footer.jsx
import Button from "react-bootstrap/Button";
const Footer = (props) => {
    return (
        <div>
            <Button variant="secondary">Galeria de imagenes de Rosas</Button>
            <hr></hr>
<h1 className="footer"> {props.piepagina} </h1>

        </div> 
        );
};
export default Footer;