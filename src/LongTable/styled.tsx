import {
  TableCell,
  TableCellProps,
  TableRow,
  TableRowProps,
  tableCellClasses,
} from "@mui/material"

function StyledTableCell(props: TableCellProps) {
  const { sx = {}, ...rest } = props
  return (
    <TableCell
      {...rest}
      sx={{
        ...sx,
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "common.black",
          color: "common.white",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }}
    />
  )
}

function StyledTableRow(props: TableRowProps) {
  const { sx = {}, ...rest } = props
  return (
    <TableRow
      {...rest}
      sx={{
        ...sx,
        "&:nth-of-type(odd)": {
          backgroundColor: "action.hover",
        },
        // hide last border
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    />
  )
}

export { StyledTableCell, StyledTableRow }
