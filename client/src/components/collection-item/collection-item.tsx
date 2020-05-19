import React from "react";
import './collection-item.styles.scss';
import Button from "components/button/button";
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from 'redux/cart/cart-actions';
import { userIdSelector } from 'redux/user/user-selectors';
import  { IItem } from 'interfaces/cart.interface'

interface IProps {
    item: IItem;
}

const CollectionItem = (props: IProps) => {
    const { name, imageUrl, price } = props.item;
    const uid = useSelector(userIdSelector);
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(addCartItem({
            item: props.item,
            uid
        }));
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
