import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import "./styles.css"
import { Button, Stack } from "@mui/material"
import LongTable from "./LongTable"

export default function App() {
  return (
    <Stack gap={2} alignItems="center" sx={{ displayPrint: "contents" }}>
      <Button variant="contained" color="ochre" sx={{ displayPrint: "none" }}>
        Won't be printed
      </Button>
      <Box className="print-portrait">
        <LongTable />
      </Box>
      <Box className="print-portrait">
        <Typography variant="h4" component="h1" gutterBottom>
          Portrait
        </Typography>
      </Box>
      <Box className="print-landscape" bgcolor="black" color="white">
        <Typography variant="h4" component="h1" gutterBottom>
          Landscape
        </Typography>
      </Box>
    </Stack>
  )
}
