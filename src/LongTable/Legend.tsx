import { Stack, Typography } from "@mui/material"
import { SexCell } from "./cells"
import { Sex } from "./types"

function LegendItem({ description, sex }: { description: string; sex: Sex }) {
  return (
    <Stack direction="row" gap={1}>
      <SexCell sex={sex} />
      <Typography>{description}</Typography>
    </Stack>
  )
}

export function Legend() {
  return (
    <Stack direction="row">
      <LegendItem description="male" sex="male" />
      <LegendItem description="female" sex="female" />
    </Stack>
  )
}
