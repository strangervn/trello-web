import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import  SvgIcon  from '@mui/material/SvgIcon'
import Typography  from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Templates from './Menu/Templates'
import Starred from './Menu/Starred'
import Profile from './Menu/Profile'
import Button  from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
function AppBar() {
  return (
    <Box px={2} sx={{
        
        width:'100%',
        height:(theme)=>theme.trelloCustom.appBarHeight,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'

      }}>
         
         <Box sx={{display:'flex',alignItems:'center',gap:2}}>

          <AppsIcon sx={{color:'primary.main'}} />
          <Box sx={{display:'flex',alignItems:'center',gap:0.5}}>
            <SvgIcon component={TrelloIcon} inheritViewBox sx={{color:'primary.main'}} />
            <Typography variant='span'  sx={{fontSize:'1.2 rem', fontWeight:'bold', color:'primary.main'}}>Trello</Typography>
          </Box>
          <Workspaces/>
          <Recent />
          <Starred  />
          <Templates  />

          <Button variant='outlined'>Create</Button>
         </Box>

         <Box sx={{display:'flex',alignItems:'center',gap:2}}>
         <TextField id="outlined-search" label="Search" type="search" size='small' />
          <ModeSelect/>
          <Tooltip title="Delete">
            <Badge color="secondary" variant="dot" sx={{cursor:'pointer'}}>
            <NotificationsNoneIcon />
            
            </Badge>
        </Tooltip>
        <Tooltip title="Help" >
            
            <HelpOutlineIcon />
            

        </Tooltip>
        <Profile  />
         </Box>
      </Box>
  )
}

export default AppBar