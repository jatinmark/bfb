import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';

import "./view.css"

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
    },
    { field: 'Button', headerName: 'Update/delete', width: 120 },
  ];
  
  const rows = [
    { id: 1, Email: 'Snow', Name: 'Jon', Phone_Number: 35 , Hobbies: "gym , anime watching , dfdsfsdsf"},
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
function View() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  return (
    <div className='view'>
        <Button sx={{margin: '0px 35px 50px 35px'}} onClick={handleToggle} variant="contained">+ Add</Button>
        <Backdrop
        sx={{  backGroundcolor: 'rgba(75, 74, 74, 0.514)' , color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
       <div className='boarder' >
          <ClearIcon onClick={handleClose} />
        <form className='form'>
          <label>Name</label>
          <input type="text" placeholder='Type the name' />
          <label>Phone number </label>
          <input type="Number" placeholder='Type the Phone number' />
          <label>Email</label>
          <input type="email" placeholder='Type the email' />
          <label>Hobbies</label>
          <input type="text" placeholder='Type the hobbies' />
        </form>
        <Button sx={{margin: '50px 35px 0px 140px'}} onClick={handleClose} variant="contained">Save</Button>
       </div>
      

      </Backdrop>

   <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  )
}

export default View