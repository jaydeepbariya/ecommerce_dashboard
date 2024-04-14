import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
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
      initialState: {
        pageSize: 4,
      },
    };

    const {
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = useTable(options, useSortBy, usePagination);

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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{pageIndex + 1}</span>
            <span>of</span>
            <span>{pageCount}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHoC;
