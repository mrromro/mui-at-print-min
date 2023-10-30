import { TableCell, TableHead, TableRow } from "@mui/material"
import { type Table, flexRender } from "@tanstack/react-table"
import { type Person } from "./types"

export function Header({ table }: { table: Table<Person> }) {
  return (
    <TableHead sx={{ bgcolor: "lightgrey" }}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  )
}
