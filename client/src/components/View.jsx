import React, { useState ,useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import {newMessage ,getmessages } from './Axios';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';

import "./view.css"







  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function View() {

  let [select , setselect]  =useState(false);
  let [messages , setmessages] = useState([]);
   const [input , setinput] = useState('');
   const [num , setnum] = useState('');
   const [email , setemail] = useState('');
   const [hob , sethob] = useState('');

   const getmessagedetails = async()=>{
    let data = await getmessages();
   setmessages(data);
}

   useEffect(() => {
      const getmessagedetails = async()=>{
     let data = await getmessages();
    setmessages(data);
}
getmessagedetails();
}
,[])

const sendmessage = async (e) => {
  e.preventDefault();
   messages =  {
    Name : input  ,
    Phone_number : num ,
    Email : email ,
    Hobbies  : hob
 } 
   await newMessage(messages);
}
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 240,
      editable: true,
    },
    {
      field: 'Phone_Number',
      headerName: 'Phone Number',
      type: 'Number',
      width: 130,
      editable: true,
    },
    {
      field: 'Hobbies',
      headerName: 'Hobbies',
      description: 'This column has a text and is not sortable.',
      editable: true,
      sortable: false,
      width: 290,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }
  ];
  const rows = 
  messages.map((message , i )=> ({ id: i+1, Email: message.Email, Name: message.Name, Phone_Number: message.Phone_number
       , Hobbies: message.Hobbies})) 
      //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //  ];


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const [back, setback] = React.useState(false);
  const handleback = () => {
    setback(false);
  };
  const handleToggle = () => {
    setback(!open);
  };

  
    


   

  return (
    <div className='view'>
      <div className='buttons'>
  <Button sx={{margin: '0px 0px 50px 0px'}} onClick={handleToggle} variant="contained">+ Add User</Button>
  <Button sx={{margin: '0px 0px 50px 0px'}} onClick={getmessagedetails} variant="contained">Refresh List</Button>

</div>

        <Backdrop
        sx={{  backGroundcolor: 'rgba(75, 74, 74, 0.514)' , color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={back}
        
      >
       <div className='boarder' >
          <ClearIcon onClick={handleback} />
        <form className='form' method='POST'>
          <label>Name</label>
          <input type="text" placeholder='Type the name' value={input} onChange = {(e)=> setinput(e.target.value) } />
          <label>Phone number </label>
          <input type="Number" placeholder='Type the Phone number' value={num} onChange = {(e)=> setnum(e.target.value) } />
          <label>Email</label>
          <input type="email" placeholder='Type the email' value={email} onChange = {(e)=> setemail(e.target.value) } />
          <label>Hobbies</label>
          <input type="text" placeholder='Type the hobbies' value={hob} onChange = {(e)=> sethob(e.target.value) } />
        </form>
        <Button type="submit" onClick = {sendmessage} sx={{margin: '50px 35px 0px 140px'}}  variant="contained"> save</Button>
       </div>
       {/* onClick={handleClick}   */}
       <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Details are saved successfully!!!
        </Alert>
      </Snackbar>

      </Backdrop>

   <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection 
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    <div className='buttons'>
    
  <Button sx={{margin: '35px 0px 50px 0px'}} onClick={handleToggle} variant="contained" disabled> <SendIcon sx={{marginRight: '10px'}}  />send</Button>
  <Button sx={{margin: '35px 0px 50px 0px'}} onClick={getmessagedetails} variant="contained" disabled > < DeleteIcon sx={{marginRight: '10px'}} />delete</Button>

</div>
    </div>
  )
}

export default View