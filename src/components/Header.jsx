// components/Header.jsx
const Header = (props) => {
    return (
        <div>
           
            <h1 className="header"> {props.title} </h1>
            <hr></hr>
        </div>


    );
};
export default Header;