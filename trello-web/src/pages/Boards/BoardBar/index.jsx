
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/material/Dasboard'
import  VpnLockIcon  from '@mui/icons-material/VpnLock'
import  AddToDriveIcon  from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import { Tooltip } from '@mui/material'
import Button  from '@mui/material/Button'
import PersonAddIcon from '@mui/material/PersonAdd'
import HelpOutlinedIcon from '@mui/material/HelpOutlined'

const MENU_SYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      
        width:'100%',
        height:(theme)=>theme.trelloCustom.boardBarHeight,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop:'1px solid #00bfa5'
     }}>
        <Box sx={{display:'flex',alignItems:'center',gap:2}}>
        <Chip sx={MENU_SYLES}

          icon={<DashboardIcon />} 
          label="Public/Private Workspaces"
          clickable

          />
          <Chip sx={MENU_SYLES}

          icon={<VpnLockIcon />} 
          label="Public/Private Workspaces"
          clickable

          />
          <Chip sx={MENU_SYLES}

          icon={<AddToDriveIcon />} 
          label="Add to Google Drive"
          clickable

          />
          <Chip sx={MENU_SYLES}

          icon={<BoltIcon />} 
          label="Automation"
          clickable

          />
          <Chip sx={MENU_SYLES}

          icon={<FilterListIcon />} 
          label="Filters"
          clickable

          />

          
        </ Box>

        <Box sx={{display:'flex',alignItems:'center',gap:2}}>
         <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
          <AvatarGroup max={4}
            sx={{'& .MuiAvatar-root': {
          
              width: 34,
              height: 34,
              fontSize: 16
            }

            }}
          >

            <Tooltip title="">
            < Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
        </AvatarGroup>
        </ Box>
     </Box>
  )
}

export default BoardBar