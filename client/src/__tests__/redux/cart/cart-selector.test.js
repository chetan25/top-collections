import { selectCartTotal, selectCartQuantity } from 'redux/cart/cart-selector';

const cartItems = [
    {
        quantity: 1,
        price: 20,
    },
    {
        quantity: 2,
        price: 10,
    }
];

describe('Test Cart Selectors ', () => {
   it('test the selectCartTotal selector', () => {
       const total = selectCartTotal.resultFunc(cartItems);
       expect(total).toEqual(40);
   });

   it('test selectCartQuantity selector', () => {
      const quantity = selectCartQuantity.resultFunc(cartItems);
      expect(quantity).toEqual(3);
   });
});