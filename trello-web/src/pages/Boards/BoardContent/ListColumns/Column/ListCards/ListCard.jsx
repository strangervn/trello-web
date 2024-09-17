import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCard() {
  return (
    <Box sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${theme.trelloCustom.COLUMN_HEADER.HEIGHT} -
            ${theme.trelloCustom.COLUMN_FOOTER.HEIGHT}
            )`,
            
            '&::-webkit-scrollbar-thumb':{
                backgroundColor: '#ced0da'
            
            },
            '&::-webkit-scrollbar-thumb:hover':{
                backgroundColor: '#bfc2cf'
            } 


    }}>
        

            <Card/>
            <Card TemporaryHideMedia />
    </Box>
  )
}

export default ListCard