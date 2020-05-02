export const addItemToCart = (cartItems: any, newItem: any) => {
  const existingItem = cartItems.find((cartItem: any) => cartItem.id === newItem.id);
  if (existingItem) {
      return cartItems.map((cartItem: any) => {
         return cartItem.id === newItem.id ?
             {...cartItem, quantity: cartItem.quantity + 1} :
             cartItem;
      });
  }

  return [...cartItems, {...newItem, quantity: 1}];
};

export const removeItemFromCart = (cartItems: any, itemToRemove: any) => {
   return cartItems.filter((item: any) => item.id !== itemToRemove.id);
};

export const removeItem = (cartItems: any, itemToRemove: any) => {
  const existing = cartItems.find((item: any) => item.id === itemToRemove.id);

  if(existing) {
      if(existing.quantity === 1) {
          return cartItems.filte((item: any) => item.id !== existing.id);
      }
      return cartItems.map((item: any) => {
          return item.id !== existing.id ? item : {
              ...item,
              quantity: item.quantity -1
          }
      });
  }

  return cartItems;
};