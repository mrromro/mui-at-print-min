import { TableBody } from "@mui/material"
import { type Table, flexRender } from "@tanstack/react-table"
import { type Person } from "./types"
import { StyledTableCell, StyledTableRow } from "./styled"

export function Body({ table }: { table: Table<Person> }) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <StyledTableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <StyledTableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  )
}
