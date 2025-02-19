import Card from "@mui/material/Card";

export default function ProductCard(props) {
  return <Card className="productCard" style={{backgroundColor: props.style}}>
    <div>
        {props.name}
        <p className="categoryText">Category: {props.category}</p>
    </div>
    </Card>;
}