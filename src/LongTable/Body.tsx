import { TableBody, TableCell, TableRow } from "@mui/material"
import { type Table, flexRender } from "@tanstack/react-table"
import { type Person } from "./types"

export function Body({ table }: { table: Table<Person> }) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
