// components/Card.jsx
import {
  Card,CardBody,CardText,CardImg,CardTitle,
     
} from "reactstrap";
  
const Tarjetas = (props) => {
  return (
    <div>
      <Card class="card" style={{ width: "17rem" }}>
      <CardImg variant="top" src={props.url}/>
      <CardBody>
<CardTitle>{props.title}</CardTitle>
<CardText>
{props.description}
</CardText>

</CardBody>
        
      </Card>
      <br></br>
    </div>
  );
};
  
export default Tarjetas;