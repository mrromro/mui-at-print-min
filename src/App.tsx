import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import "./styles.css"

export default function App() {
  return (
    <Box>
      <Box className="print-portrait">
        <Typography variant="h4" component="h1" gutterBottom>
          Portrait
        </Typography>
      </Box>
      <Box className="print-landscape">
        <Typography variant="h4" component="h1" gutterBottom>
          Landscape
        </Typography>
      </Box>
    </Box>
  )
}
