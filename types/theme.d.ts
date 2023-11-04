import { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    ochre: PaletteColor["primary"]
  }

  interface PaletteOptions {
    ochre?: SimplePaletteColorOptions
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}
