import { productsApi } from './products.api';

export const products = {
  middleware: [productsApi.middleware],
  reducers: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  slices: {}
};
