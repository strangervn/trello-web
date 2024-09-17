
import { BorderColor, Widgets } from '@mui/icons-material'
import { teal,deepOrange,cyan,orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

const APP_BAR_HEIGHT = '60px'
const BOARD_BAR_HEIGHT = '60px'
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const BOARD_CONTENT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`


const theme = extendTheme({
      trelloCustom:{
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT,
        columnHeaderHeight: COLUMN_HEADER_HEIGHT,
        columnFooterHeight: COLUMN_FOOTER_HEIGHT

      },
     colorSchemes: {
      //  light: {
      //    palette: {
      //      primary:teal,
      //       secondary:deepOrange
           
      //    }
      //  },
      //  dark: {
      //    palette: {
      //      primary:cyan,
      //     secondary:orange
           
      //    }
        
      //  }
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
              backgroundColor: '#dcdde1',
              borderRadius: '8px'
            },
            '*::-webkit-scrollbar-thumb:hover':{
              backgroundColor: 'white',
            } 
          }

        }
      },

      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform:'none',
            borderWidth: '0.5px',
            '&:hover': { borderWidth: '0.5px'}
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
              // color: theme.palette.primary.main,
              fontSize:'0.875rem',
            //   '.MuiOutlinedInput-notchedOutline':{

            //     borderColor:theme.palette.primary.light
            //   },
            //   '&:hover':{
            //     '.MuiOutlinedInput-notchedOutline':{
            //       borderColor:theme.palette.primary.main
            //   }
            // },
            '& fieldset':{
              borderWidth:'0.5px !important'
            },
            '&:hover fieldset': {
              borderWidth: '1px !important'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px !important'
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
            // color:theme.palette.primary.main,
            fontSize: '0.875 rem'
          
        })
      }
      },
      MuiTypography: {
        styleOverrides: {
          // Name of the slot
          root:({theme}) =>({
            // Some CSS
            // color:theme.palette.primary.main,
            '&.MuiTypography-body1': { fontSize: '0.875 rem'}
          
        })
      }
      }
    }
     })
export default theme