export interface ICartItems {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
}

export interface IDirectoryItem {
    id: number;
    imageUrl: string;
    linkUrl: string;
    title: string;
}

export interface IItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

// type RouteTypes = 'hats' | 'jackets' | 'men' | 'women' | 'sneakers';

export interface ICollectionItem {
    id: string;
    routeName: string;
    title: string;
    items: IItem[];
}
export interface IShop {
    hats: ICollectionItem;
    jackets: ICollectionItem;
    men: ICollectionItem;
    women: ICollectionItem;
    sneakers: ICollectionItem;
}

export interface ICollectionreview  {
    id: string;
    title: string;
    routeName: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}