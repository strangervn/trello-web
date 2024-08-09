

function ModeSelect() {
  
    const { mode, setMode } = useColorScheme();
  
    const handleChange = (event) => {
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
  

export default ModeSelect