module.exports = class PaginatedTable {
  constructor(headers, tableData, totalRows) {
    this.headers = headers;
    this.tableData = tableData;
    this.totalRows = totalRows;
  }
};
