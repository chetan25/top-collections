import { createSelector } from "reselect";

const selectShop = (state: any) => state.shop;

export const shopSelector = createSelector(
    [selectShop],
    (shop: any) => shop.collections
);

export const selectCollectionPreview = createSelector(
    [shopSelector],
    (collection: any) => Object.keys(collection).map(key => collection[key])
);

export const selectCollection = (collectionParam: string) => createSelector(
    [shopSelector],
    (collections: any) => collections[collectionParam]
);