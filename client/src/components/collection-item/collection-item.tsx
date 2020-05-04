import React from "react";
import './collection-item.styles.scss';
import Button from "components/button/button";
import { useDispatch } from 'react-redux';
import { addCartItem } from 'redux/cart/cart-actions';

interface IProps {
    item: {
        name: string;
        imageUrl: string;
        price: number;
        id: number;
    }
}

const CollectionItem = (props: IProps) => {
    const { name, imageUrl, price } = props.item;
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(addCartItem(props.item));
    };

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button inverted={true} onClick={addItem}>Add to cart</Button>
        </div>
    )
};

export default CollectionItem;
