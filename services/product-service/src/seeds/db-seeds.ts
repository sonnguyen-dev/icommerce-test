import axios from 'axios';
import faker from 'faker';

const products = [];
const colors = ['White', 'Black', 'Gray', 'Pink', 'Blue', 'Purple', 'Gold'];
const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];

for (let i = 0; i < 1000; i += 1) {
  products.push({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    brand: brands[faker.random.number(brands.length - 1)],
    color: colors[faker.random.number(colors.length - 1)],
  });
}
const API_URL = 'http://localhost:9090/api/v1';
axios.post(`${API_URL}/products`, products)
  .then((res) => {
    console.log(res.data.length);
  })
  .catch((e) => {
    console.error(e);
  });
