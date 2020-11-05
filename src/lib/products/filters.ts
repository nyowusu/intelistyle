import { IProduct } from "../../types/global";

function handleSearch(data: IProduct, search: string) {
  const types = data.productTypes.filter((type) =>
    type.toLowerCase().includes(search)
  );

  return !!types.length;
}

interface IMatchingGarments {
  products: IProduct[];

  search?: string;
}

export function getGarmentsThatMarch({
  products,
  search,
}: IMatchingGarments): IProduct[] {
  if (search?.trim()) {
    const searchValues = search.split(" ");

    let filteredData = products;

    console.log(searchValues);

    searchValues.forEach((search) => {
      filteredData = filteredData?.filter((data) =>
        handleSearch(data, search.trim().toLowerCase())
      );
    });

    return filteredData;
  }

  return products;
}
