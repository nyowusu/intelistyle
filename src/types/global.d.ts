export interface IProducts {
  product_categories_mapped: any;
  product_id: string;
  url: string;
  gender: string;
  brand: string;
  product_description: string;
  image_urls: string[];
  product_imgs_src: string[];
  source: string;
  product_categories: string[];
  images: IImages[];

  price: string;
  product_title: string;
}

export interface IProduct {
  productId: string;
  url: string;
  brand: string;
  gender: string;
  images: IImages[];
  prices: string;
  title: string;
  productTypes: string[];
}

export interface IImages {
  url: string;
  path: string;
  checksum: string;
}
