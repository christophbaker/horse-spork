const app = require("../app/Horse");
const FilterMetadata = require("../app/FilterMetadata");
const SortMetadata = require("../app/SortMetadata");
const PaginationMetadata = require("../app/PaginationMetadata");
const PaginatedTable = require("../app/PaginatedTable");

describe("Horse kata test", () => {
  const sampleHeaders = ["Breed", "Colour", "Height", "Age", "Shoes"];

  /**
   * Sample Horse data which you could adapt for your tests. Horses
   * may have more or less parameters than this and there may be more or less rows
   * in the table.
   */
  const sampleTableData = [
    ["Thoroughbred", "Bay", "1.6", "3", "true"],
    ["Thoroughbred", "Grey", "1.55", "3", "true"],
    ["Arabian horse", "Bay", "1.51", "5", "true"],
    ["Shetland Pony", "Black", "1.01", "2", "false"],
    ["Shire horse", "Black", "1.71", "4", "true"],
  ];

  /**
   * Sample filter metadata that filters on two fields
   * Breed must equal 'Thoroughbred' and age must equal 3
   */
  const sampleFilters = [
    new FilterMetadata("Breed", "Thoroughbred"),
    new FilterMetadata("Age", "3"),
  ];

  /**
   * Sample sort metadata. You only ever sort on one field.
   * In this example you should sort by horse height ascending
   */
  const sampleSortMetadata = new SortMetadata("Height", "Ascending");

  const samplePaginationMetadata = new PaginationMetadata(1, 3);

  // it("does everything -- filter, sort, and paginate", () => {
  //   const table = app.filterSortPaginateTable(
  //     sampleHeaders,
  //     sampleTableData,
  //     sampleFilters,
  //     sampleSortMetadata,
  //     samplePaginationMetadata
  //   );

  //   // TODO: assert something.
  // });

  describe("filterSortPaginateTable", () => {
    
    it("given all null data returns empty table", () => {
      const expectedTable = new PaginatedTable([], [], 0);
  
      const table = app.filterSortPaginateTable(
        null,
        null,
        null,
        null,
        null
      );
  
      expect(table).toEqual(expectedTable);
    });
  });

  it("given only header data the header should be set", () => {
    const expectedTable = new PaginatedTable(sampleHeaders, [], 0);

    const table = app.filterSortPaginateTable(
      sampleHeaders, null, null, null, null
    );

    expect(table).toEqual(expectedTable);
  });

  it("given only table data the table data should be set", () => {
    const expectedTable = new PaginatedTable([], sampleTableData, 5);

    const table = app.filterSortPaginateTable(null, sampleTableData, null, null, null);

    expect(table).toEqual(expectedTable);
  });

    // Step 1: Determine index of filter's header
    //         Breed = 0
    //         Age = 3
    // Step 2: Iterate through the data getting value from index location
    // Step 3: Verify that the value is equel to filter value
    // Step 3: Only return values that match
  it("given a table with data and a filter it should only return the filtered data", () => {
    const filter = [
      new FilterMetadata("Breed", "Thoroughbred"),
    ];
    const expectedFilteredData = [
      ["Thoroughbred", "Bay", "1.6", "3", "true"],
      ["Thoroughbred", "Grey", "1.55", "3", "true"],
    ];
    const expectedTable = new PaginatedTable(sampleHeaders, expectedFilteredData, 2);

    const table = app.filterSortPaginateTable(sampleHeaders, sampleTableData, filter, null, null);

    expect(table).toEqual(expectedTable);
  });
});
