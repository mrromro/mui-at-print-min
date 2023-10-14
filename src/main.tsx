import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import theme from "./theme"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
