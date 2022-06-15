const app = require("../app/Horse");
const FilterMetadata = require("../app/FilterMetadata");
const SortMetadata = require("../app/SortMetadata");
const PaginationMetadata = require("../app/PaginationMetadata");

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

  it("does everything -- filter, sort, and paginate", () => {
    const table = app.filterSortPaginateTable(
      sampleHeaders,
      sampleTableData,
      sampleFilters,
      sampleSortMetadata,
      samplePaginationMetadata
    );

    // TODO: assert something.
  });
});
