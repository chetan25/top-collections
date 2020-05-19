import { addItemToCart, removeItem } from 'redux/cart/cart-util';

const cartItems = [
    {
        id: 1,
        quantity: 1
    },
    {
        id: 2,
        quantity: 2
    }
]
describe('test CartUtil functions addItemToCart', () => {
   it('test adding new item ', () => {
       const newState = addItemToCart(cartItems, {
           id: 3
       })
       expect(newState).toEqual(
           [...cartItems, {id: 3, quantity: 1}]
       )
   });

    it('test adding one more of an existing item ', () => {
        const newState = addItemToCart(cartItems, {
            id: 2
        })
        expect(newState).toEqual(
            [{id: 1, quantity: 1}, {id: 2, quantity: 3}]
        )
    });
});

describe('test CartUtil function removeItem', () => {
   it('decrease the quantity of item by 1', () => {
       const newState = removeItem(cartItems, {id: 2});
       expect(newState).toEqual([
           {id: 1, quantity: 1},
           {id: 2, quantity: 1}
       ]);
   });

    it('decrease the quantity of single item', () => {
        const newState = removeItem(cartItems, {id: 1});
        expect(newState).toEqual([
            {id: 2, quantity: 2}
        ]);
    })
});