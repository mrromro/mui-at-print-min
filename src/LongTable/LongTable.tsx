import { Stack, Table } from "@mui/material"
import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Header } from "./Header"
import { Body } from "./Body"
import { Legend } from "./Legend"
import { Comments } from "./Comments"
import columns from "./columns"
import data from "./data"

function LongTable() {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <Stack>
      <Table stickyHeader size="small">
        <Header table={table} />
        <Body table={table} />
      </Table>
      <Legend />
      <Comments />
    </Stack>
  )
}

export default LongTable
