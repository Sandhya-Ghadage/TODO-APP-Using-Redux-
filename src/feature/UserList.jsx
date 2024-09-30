import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { remove } from './userSlic';

const styled = {
    marginLeft: "20px"
};


const columns = [
    { field: 'id', headerName: 'ID', width: '130' },
    { field: 'firstName', headerName: 'First name', width: '200' },
    { field: 'lastName', headerName: 'Last name', width: '200' },
    { field: 'email', headerName: 'Email address', width: '260' },
    {
        field: 'actions',
        headerName: 'Actions',
        width: '230',
        renderCell: (params) => {
            
            let id = params.id;
            console.log(id);

            const dispatch = useDispatch();
            const navigate = useNavigate();

            const handleDelet = (id) => {
                dispatch(remove({ id }))
                navigate("/")
            }

            return (
                <>
                    <Link to={`/updateuser/${id}`}>
                        <Button variant="contained" color="success">Edit</Button>
                    </Link>
                    <Button onClick={() => handleDelet(id)} style={styled} variant="contained" color="warning">Delete</Button>
                </>
            );
        }
    }
];
const paginationModel = { page: 0, pageSize: 5 };

export function UserList() {

    const users = useSelector(state => state.user.user);
    console.log(users);



    const rows = users.map((val, ind) => ({
        id: val.id,
        firstName: val.firstname,
        lastName: val.lastname,
        email: val.email,

    }));

    console.log(rows);


    return (
        <>
            <h1>TODO APP</h1>
            <Link to={"/adduser"}>
                <Button variant="contained" color="primary">Add user</Button>
            </Link>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>

        </>
    );
}
