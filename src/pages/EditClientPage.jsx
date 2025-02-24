import { useParams } from "react-router"
import { useEffect, useState } from "react";
import * as clientService from '../services/clientsService'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router";
import ResponsiveAppBar from "../components/Navbar";

export default function EditClientPage () {
    const navigate = useNavigate()
    const {clientId} = useParams()
    
    const [formData, setFormData] = useState({
        name: '',
        handphoneNumber: '',
        priority: '',
        comments: '',
        lastmet: '',
        nextAppt: ''

    })

    async function handleSubmit(event) {
        event.preventDefault();
        
        const updatedClient = await clientService.updateClient(clientId, formData);
        
        
    }
    function handleChange(event){
        
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function handleClick() {
        navigate(`/clients/${clientId}`);
    }
     useEffect(() => { 
            async function fetchClientDetails() {
                try {
                    const clientData = await clientService.showClient(clientId);
                    
                    setFormData({
                        name: clientData.name ||'',
                        handphoneNumber: clientData.handphoneNumber || '',
                        priority: clientData.priority || '',
                        comments: clientData.comments || '',
                        lastmet: clientData.lastmet || '',
                        nextAppt: clientData.nextAppt || ''

                    })
                    
                } catch (error){
                    console.error("Failed to fetch client details:", error);
                }
            } 
            fetchClientDetails();
        }, [clientId]);

  return (
    <div>
        <ResponsiveAppBar/>
        <p>Edit details for {formData.name}</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text"name="name"  value={formData.name} onChange={handleChange}/>
            </div>

            <div>
                
                <label>Handphone Number</label>
                <input type="text" name="handphoneNumber" value={formData.handphoneNumber} onChange={handleChange} />
                
            </div>

            <div>
                
                <label>Priority:</label>
                <select name="priority" value={formData.priority || ''} onChange={handleChange}>
                     <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                
            </div>

            <div>
                
                <label htmlFor="comments">Comments:</label>
                <TextField type="text" name='comments' id="comments" variant="outlined" value={formData.comments} onChange={handleChange}/>
                
            </div>

            <div>
                
                <label htmlFor="lastmet">Last Met Date:</label>
                <TextField type="date" name='lastmet' id="lastmet" variant="outlined" value={formData.lastmet} onChange={handleChange}/>
                
            </div>

            <div>
                
                <label htmlFor="nextAppt">Next Appt:</label>
                <TextField type="date" name='nextAppt' id="nextAppt" variant="outlined" value={formData.nextAppt} onChange={handleChange}/>
                
            </div>

            <div>
                <p><Button variant="outlined" type='submit' onClick={handleClick}>Confirm Changes</Button>
                <Button variant="outlined" type='submit' onClick={handleClick}>Go back</Button>
                </p>
            </div>

            
        </form>
    </div>
  )
}