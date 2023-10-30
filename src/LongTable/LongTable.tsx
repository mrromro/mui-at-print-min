import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import {
  type Table as ReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

type Sex = "female" | "male"

type Person = {
  id: number
  firstName: string
  lastName: string
  sex: Sex
  age: number
}

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

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => <NumberCell value={info.getValue()} />,
    header: "id",
  }),
  columnHelper.accessor(
    ({ firstName, lastName }) => `${firstName} ${lastName}`,
    {
      cell: (info) => <StringCell content={info.getValue()} />,
      header: "Name",
    }
  ),
  columnHelper.accessor("sex", {
    cell: (info) => <SexCell sex={info.getValue()} />,
    header: "Sex",
  }),
  columnHelper.accessor("age", {
    cell: (info) => <NumberCell value={info.getValue()} />,
    header: "Age, years",
  }),
]

const data: Person[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    sex: "male",
    age: 42,
  },
]

function LongTable() {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <Stack>
      <Table size="small">
        <Header table={table} />
        <Body table={table} />
      </Table>
      <Legend />
      <Comments />
    </Stack>
  )
}

export default LongTable

function Header({ table }: { table: ReactTable<Person> }) {
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

function Body({ table }: { table: ReactTable<Person> }) {
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

function SexCell({ sex }: { sex: keyof typeof typeMap }) {
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

function NumberCell({ value }: { value: number }) {
  return <Typography>{value}</Typography>
}

function StringCell({ content }: { content: string }) {
  return <Typography>{content}</Typography>
}

function LegendItem({
  description,
  sex,
}: {
  description: string
  sex: keyof typeof typeMap
}) {
  return (
    <Stack direction="row" gap={1}>
      <SexCell sex={sex} />
      <Typography>{description}</Typography>
    </Stack>
  )
}

function Legend() {
  return (
    <Stack direction="row">
      <LegendItem description="male" sex="male" />
      <LegendItem description="female" sex="female" />
    </Stack>
  )
}

function Comments() {
  return <Typography>This table is to represent a list of people. </Typography>
}
