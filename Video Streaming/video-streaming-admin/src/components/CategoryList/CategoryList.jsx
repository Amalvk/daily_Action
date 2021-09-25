import './categoryList.css'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCategoryDetails,categorySelector} from '../Store/CategorySlice';
import axios from 'axios'

import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from '@material-ui/data-grid';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    textField: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      margin: theme.spacing(1, 0.5, 1.5),
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(0.5),
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  { defaultTheme },
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        autoFocus
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}


QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default function CategoryTable(props) {

  const dispatch=useDispatch()
  const {categories} = useSelector((state)=>state.category) 
  
  

useEffect(()=>{
    dispatch(getCategoryDetails())
  },[])
  
  
  const deleteCategory= async (params)=>{
    let Token = localStorage.getItem("Token")
        try{
          console.log("params",params)
          const response = await axios.delete(`http://localhost:3000/delete-category/${params.row._id}`,{
            headers:{
              Authorization:`Bearer ${Token}`
              
            }
          })
          console.log(response)
            if(response.status==200){
                   
              dispatch(getCategoryDetails())

            }
         
  
        }catch(e){
        }
  
  }

    const columns = [
        
        {
          
          field: 'id',
          headerName: 'No.',
          width: 100,
          editable: true,
        },
        {
          field: 'name',
          headerName: 'Category',
          width: 300,
          editable: true,
        },
        {
          field: 'total',
          headerName: 'Total',
          width: 110,
          editable: true,
        },
        {
          field: 'action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 360,
          renderCell:(params)=>{
            console.log(params) 
            return(
                <div>
                    <Button className='categoryListEdit'>Edit</Button>
                    <Button onClick={()=>deleteCategory(params)} className='deleteButton'>
                      <DeleteIcon className='userListDelete'/> 
                      
                    </Button>
                </div>

              )
          }
        }, 
      ];
      

        
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(categories);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = categories.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(rows);
  }, [categories]);


    return (
        
        <div className='categoryList'>
             <DataGrid
        rows={categories}
        columns={columns}
        pageSize={10}
        components={{Toolbar:QuickSearchToolbar}}
        checkboxSelection
        disableSelectionOnClick
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },}}
      />
        </div>
    )
}
