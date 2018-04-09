import { ProductsCollection } from '../shared/collections/ProductsCollection';

export default function() {

  if (ProductsCollection.find().count() > 0) {
    return;
  }
  const products = JSON.parse(Assets.getText('products.json'));
  _.each(products, function(product) {
    ProductsCollection.insert(product);
  });
}
