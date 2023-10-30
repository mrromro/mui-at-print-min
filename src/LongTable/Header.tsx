import { TableHead } from "@mui/material"
import { type Table, flexRender } from "@tanstack/react-table"
import { type Person } from "./types"
import { StyledTableCell, StyledTableRow } from "./styled"

export function Header({ table }: { table: Table<Person> }) {
  return (
    <TableHead sx={{ bgcolor: "lightgrey" }}>
      {table.getHeaderGroups().map((headerGroup) => (
        <StyledTableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <StyledTableCell key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableHead>
  )
}
