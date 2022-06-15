const { filter } = require("minimatch");
const PaginatedTable = require("./PaginatedTable");

exports.filterSortPaginateTable = function filterSortPaginateTable(
  headers,
  tableData,
  filters,
  sortMetadata,
  paginationMetadata
) {

  if (headers === null) {
    headers = [];
  }

  tableData = filterFromHeaders(headers, tableData, filters);

  return new PaginatedTable(headers, tableData, tableData.length);
};

function filterFromHeaders(
  headers,
  tableData,
  filters,
){
  if (tableData === null) {
    tableData = [];
  }

  let filteredData = tableData;

  for (let filter in filters) {
    let headerIndex = headers.indexOf(filter.columnHeader);
    filteredData = tableData.filter(row => row[headerIndex] === filter.Value);
  }

  return filteredData;
}
