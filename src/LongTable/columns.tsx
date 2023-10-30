import { NumberCell, StringCell, SexCell } from "./cells"
import { Person } from "./types"
import { createColumnHelper } from "@tanstack/react-table"

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

export default columns
