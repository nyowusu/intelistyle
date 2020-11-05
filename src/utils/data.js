const data = require("../data/data.json");

const p = data.map((d) => {
  return {
    productId: d.product_id,
    url: d.url,
    brand: d.brand,
    gender: d.gender,
    images: d.images,
    prices: d.price,
    title: d.product_title,
    productTypes: d.product_title.split("-").map((title) => title.trim()),
  };
});

console.log(p);
