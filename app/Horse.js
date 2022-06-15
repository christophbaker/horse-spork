const PaginatedTable = require("./PaginatedTable");

exports.filterSortPaginateTable = function filterSortPaginateTable(
  headers,
  tableData,
  filters,
  sortMetadata,
  paginationMetadata
) {
  return new PaginatedTable([], [], 0);
};
