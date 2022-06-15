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

  return new PaginatedTable(headers, [], 0);
};
