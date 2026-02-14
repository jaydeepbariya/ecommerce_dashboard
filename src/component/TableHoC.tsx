import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
} from "react-table";

function TableHoC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const {
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(options, useSortBy);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>

        <table className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted ? (
                      <span>
                        <IoArrowDown />
                      </span>
                    ) : (
                      <span>
                        <IoArrowUp />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <p>Showing {rows.length} items</p>
          </div>
        )}
      </div>
    );
  };
}

export default TableHoC;
