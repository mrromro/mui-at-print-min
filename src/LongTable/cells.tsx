import { Box, Typography } from "@mui/material"

import { Sex } from "./types"

const typeMap: {
  [key in Sex]: {
    color: string
    label: string
  }
} = {
  male: {
    color: "lightblue",
    label: "♂︎",
  },
  female: {
    color: "pink",
    label: "♀︎",
  },
}

export function SexCell({ sex }: { sex: keyof typeof typeMap }) {
  const { color, label } = typeMap[sex]
  return (
    <Box
      sx={{
        alignItems: "center",
        bgcolor: color,
        borderRadius: "50%",
        display: "flex",
        height: 12,
        width: 12,
      }}
    >
      <Typography>{label}</Typography>
    </Box>
  )
}

export function NumberCell({ value }: { value: number }) {
  return <Typography>{value}</Typography>
}

export function StringCell({ content }: { content: string }) {
  return <Typography>{content}</Typography>
}
