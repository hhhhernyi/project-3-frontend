import Card from "@mui/material/Card";

export default function ClientCard(props) {
  return <Card className="clientListCard" style={{backgroundColor: props.style}}>
    <div>
        {props.name}
        <p className="priorityText">Priority: {props.priority}</p>
    </div>
    </Card>;
}
