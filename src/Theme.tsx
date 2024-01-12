import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
          main:'#ff9100',
        },
        secondary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
       
        },
        background: {
            default: "#47008F",
            paper:'white'
            
          }
      },
      components:{ 
        MuiSelect:{
            
            styleOverrides:{
                root:{
                    minWidth:'200px',
                    borderRadius:'10px',
                    backgroundColor:'transparent',
                    fontSize:'18px',
                    color:'black',
                }
            }
        },  
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    '& .MenuItem.Mui-selected': {
                        backgroundColor: 'red'
                      },
                    color:'black',
                    fontSize:'12px',
                  
                    fontWeight:'bolder',

                }
            }
        },
        MuiFormHelperText:{
            styleOverrides:{
                root:{
                    color:'red',
                  
                }
            }
        },
        
      }
  });

export default theme