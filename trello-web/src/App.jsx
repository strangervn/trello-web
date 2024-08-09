import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button'
import {useColorScheme} from '@mui/material/styles'
import  Typography  from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import  Container  from '@mui/material/Container'
function ModeSelect() {
  
  const { mode, setMode } = useColorScheme();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode=event.target.value
    setMode(selectedMode)
    // setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode"><Mode></Mode></InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        
        <MenuItem value="light">
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <LightModeIcon fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
        <Box sx={{display:'flex', alignItems:'center', gap:1}}>
        <DarkModeIcon fontSize='small'/> Dark
        </Box>
        </MenuItem>
        <MenuItem value="system">
        <Box  sx={{display:'flex', alignItems:'center', gap:1}}>
        <SettingsBrightnessIcon/> System
        </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh', backgroundColor:'primary.main'}}>
      <Box sx={{
        backgroundColor:'primary.light',
        width:'100%',
        height:(theme)=>theme.trelloCustom.appBarHeight,
        display:'flex',
        alignItems:'center'
      }}>
         <ModeSelect/>
      </Box>
      
      <Box sx={{
         backgroundColor:'primary.dark',
         width:'100%',
         height:(theme)=>theme.trelloCustom.boardBarHeight,
         display:'flex',
         alignItems:'center'
      }}>
        Board Bar
      </Box>
      <Box sx={{
         backgroundColor:'primary.main',
         width:'100%',
         height:(theme)=> `calc(100vh - ${theme.trelloCustom.appBarHeight}-${theme.trelloCustom.boardBarHeight})`,
         display:'flex',
         alignItems:'center'
      }}>

      </Box>
     
      
    </Container>
  )
}

export default App
