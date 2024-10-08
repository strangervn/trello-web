import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder} from './utils/sort'


function BoardContent({ board }) {
   const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    return (
        <Box sx={{
            bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#34495e' : '#1976d2'),
            width: '100%',
            height: (theme) => theme.trelloCustom.boardContentHeight,
            p: '10px 0',
            '&::-webkit-scrollbar-track': { m: 2}
            // alignItems: 'center'
        }}>
            
            {/* Column 01 */}
            <ListColumns columns={orderedCoulmns}/>

            
            
        </Box>
    )
}
export default BoardContent