
import { BorderColor, Widgets } from '@mui/icons-material'
import { teal,deepOrange,cyan,orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

const theme = extendTheme({
      trelloCustom:{
        appBarHeight:'58px',
        boardBarHeight:'60px'

      },
     colorSchemes: {
       light: {
         palette: {
           primary:teal,
            secondary:deepOrange
           
         }
       },
       dark: {
         palette: {
           primary:cyan,
          secondary:orange
           
         }
        
       }
     },
     components: {
      // Name of the component
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '*::-webkit-scrollbar':{
              width: '8px',
              height: '8px'
            },
            '*::-webkit-scrollbar-thumb':{
              backgroundColor: '#bdc3c7',
              borderRadius: '8px'
            },
            '*::-webkit-scrollbar-thumb:hover':{
              backgroundColor: '#00b894',
            }
          }

        }
      },

      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform:'none'
          }
        }
      },
      
      MuiOutlinedInput: {
        styleOverrides: {
          // Name of the slot
          root: ({theme})=>
          {
            // Some CSS
            return{
              color: theme.palette.primary.main,
              fontSize:'0.875rem',
              '.MuiOutlinedInput-notchedOutline':{

                borderColor:theme.palette.primary.light
              },
              '&:hover':{
                '.MuiOutlinedInput-notchedOutline':{
                  borderColor:theme.palette.primary.main
              }
            },
            '& fieldset':{
              borderWidth:'1px !important'
            }
          }
            
          }
        
      }
    
},
      MuiInputLabel: {
        styleOverrides: {
          // Name of the slot
          root:({theme}) =>({
            // Some CSS
            color:theme.palette.primary.main,
            fontSize: '0.875 rem'
          
        })
      }
      }
    }
     })
export default theme