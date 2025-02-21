
import Alert from "@mui/material/Alert";

export default function AlertFailure(props) {
  return (
    <Alert severity="error">{props.message}</Alert>
  )
  
}
