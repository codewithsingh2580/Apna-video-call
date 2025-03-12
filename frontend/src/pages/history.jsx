import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import "../App.css";

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
                
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
        <div className='historyMnPage'>

            <IconButton className='homeicon' onClick={() => {
                routeTo("/home")
            }}>
              <h3 className='Content'>Click here go to home page</h3> <ArrowForwardIcon sx={{ color: "yellow", marginLeft: 1 }} /> <HomeIcon  sx={{ fontSize: 50 , color: "orange"}} />  
            </IconButton >
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                    return (

                        <div className='history' >


                            <Card key={i} variant="outlined" sx={{ 
                                background: "linear-gradient(135deg, #1E3A8A, #9333EA)", 
                                color: "white", 
                                padding: 2,
                                borderRadius: 1 
                            }}>


                                <CardContent className='div'>
                                    <Typography sx={{ fontSize: 20 , color : "red" , paddingLeft:20}} color="text.secondary" gutterBottom>
                                        Code: {e.meetingCode}
                                    </Typography>

                                    <Typography sx={{ mb: 1.5 , fontSize: 20 ,paddingLeft:20  }} color="text.secondary">
                                        Date: {formatDate(e.date)}
                                    </Typography>

                                </CardContent>


                            </Card>


                        </div>
                    )
                }) : <></>

            }

        </div>
    )
}