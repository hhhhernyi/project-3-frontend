import { useState } from "react";
import { useNavigate } from "react-router";
import ResponsiveAppBar from "./Navbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AlertSuccess from "./AlertComponent/alertSuccess";
import AlertFailure from "./AlertComponent/AlertFailure";
import Button from '@mui/material/Button';

const ClientForm = () => {
  const [form, setForm] = useState({
    name: "",
    handphoneNumber: "",
    priority: "",
    comments: "",
    dateOfBirth: "",
    occupation: "",
    address: "",
    annualIncome:'',
    existingPlans: [],
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(value);
  };

  function handleChangeExisting(event) {
    console.log(form.existingPlans, event.target.name, event.target.value);
    setForm({
      ...form,
      [form.existingPlans]: form.existingPlans.push(event.target.value),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.handphoneNumber ||
      !form.occupation ||
      !form.address ||
      !form.priority ||
      !form.dateOfBirth
    ) {
      setError("Please fill in all required fields.");
      setShowFailureAlert(true);
      setTimeout(() => {
        setShowFailureAlert(false);
      }, 1000);
      return; // Don't proceed with the fetch request if validation fails
    }
    console.log(form);

    try {
      const response = await fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(form), // Send the form state as the request body
      });

      if (response.ok) {
        setMessage("Client added successfully");
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
          navigate("/clients");
        }, 1000);

        // Optionally reset the form fields here
        setForm({
          name: "",
          handphoneNumber: "",
          priority: "High",
          comments: "",
          dateOfBirth: "",
        });
      } else {
        const data = await response.json();
        console.log(data);
        setError(data.message || "An error occurred while adding the client");
      }
    } catch (err) {
      setError("An error occurred while sending the request");
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="createClientAlerts">
        {showSuccessAlert ? (
          <AlertSuccess message={"Client Created Successfully"} />
        ) : null}
        {showFailureAlert ? (
          <AlertFailure message={"Please fill in all required fields"} />
        ) : null}
      </div>

      <div className="createClientForm">
        <h2>Create New Client</h2>
        <form onSubmit={handleSubmit} className="formDetails">
          <div className="oneRowOfInput">
            <label className="createClientLabel">Name: </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="oneRowOfInput">
            <label className="createClientLabel">Date Of Birth: </label>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="oneRowOfInput">
            <label className="createClientLabel">H/P Number: </label>
            <input
              type="text"
              name="handphoneNumber"
              value={form.handphoneNumber}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="oneRowOfInput">
            <label className="createClientLabel">Occupation: </label>
            <input
              type="text"
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="oneRowOfInput">
            <label className="createClientLabel">Annual Income: </label>
            <input
              type="number"
              name="annualIncome"
              value={form.annualIncome}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="oneRowOfInput">
            <label className="createClientLabel">Address: </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="createClientInput"
            />
          </div>

          <div className="commentSection oneRowOfInput">
            <label className="createClientLabel commentsLabel">Comments:</label>
            <textarea
              type="text"
              name="comments"
              value={form.comments}
              onChange={handleChange}
              className="createClientCommentsInput"
            />
          </div>

          <div className="oneRowOfInput existingProductInput">
            <fieldset
              type="text"
              name="existingPlans"
              value={form.existingPlans}
              onChange={handleChangeExisting}
              className="createClientExistingProduct"
            >
              <legend>Existing Plans: </legend>

              <div>
                <input type="checkbox" id="life" name="life" value="Life" />
                <label htmlFor="life">Life</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="accident"
                  name="accident"
                  value="Accident"
                />
                <label htmlFor="accident">Accident</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="investment"
                  name="investment"
                  value="Investment"
                />
                <label htmlFor="investment">Investment</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="Hospitalization"
                  name="Hospitalization"
                  value="Hospitalization"
                />
                <label htmlFor="Hospitalization">Hospitalization</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="Endowment"
                  name="Endowment"
                  value="Endowment"
                />
                <label htmlFor="Endowment">Endowment</label>
              </div>
            </fieldset>
          </div>

          <div className="oneRowOfInput priorityInput">
            <FormControl className="priorityForm">
              <InputLabel id="priorityLabel">Priority</InputLabel>
              <Select
                labelId="priorityLabel"
                id="prioritySelect"
                name="priority"
                value={form.priority}
                label="priority"
                onChange={handleChange}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="createClientFormButtons">
            <div className="oneButtonDiv">
              <Button className='oneButton' variant="outlined" type="submit">Add Client</Button>
            </div>
            <div className="oneButtonDiv">
              <Button className='oneButton' variant="outlined" onClick={() => navigate("/clients")}>
                Back 
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
