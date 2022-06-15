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

  if (tableData === null) {
    tableData = [];
  }

  return new PaginatedTable(headers, tableData, 0);
};
