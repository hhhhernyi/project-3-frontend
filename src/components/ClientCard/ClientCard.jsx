import Card from "@mui/material/Card";

export default function ClientCard(props) {
  const existingPlans = props.existingPlans || [];
 

  return (
    <Card
      className="clientListCard"
      style={{
        backgroundColor: props.style,
        width: "300px", // Set a fixed width for the card
        minHeight: "200px", // Set a minimum height for the card
        padding: "16px", // Add padding to ensure content doesn't touch the edges
        margin: "8px", // Add margin to space out cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribute space evenly inside the card
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 8px 0" }}>{props.name}</h3>
        <p className="priorityText" style={{ margin: "0 0 8px 0", fontSize: "0.875rem" }}>
          Priority: {props.priority}
        </p>
        <p className="date" style={{ margin: "0 0 8px 0", fontSize: "0.875rem" }}>
          Date Last Met: {props.lastmet}
        </p>
      </div>
      <div>
        <p className="existingProtection" style={{ margin: "0", fontSize: "0.875rem" }}>
          Existing Protection:
          {existingPlans.length > 0 ? (
            <ul
              style={{
                fontSize: "0.875rem",
                margin: "8px 0 0 0",
                paddingLeft: "1.5rem",
              }}
            >
              {existingPlans.map((plan, index) => (
                <li key={index}>{plan}</li>
              ))}
            </ul>
          ) : (
            <span> No Coverage</span>
          )}
        </p>
      </div>
    </Card>
  );
}