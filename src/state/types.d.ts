import { IProducts } from "../types/global";

export interface IGarments {
  apiError: any;

  loading: boolean;
  data: IProducts[];

  searchValue: string;
}
