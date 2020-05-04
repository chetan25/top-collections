import React from "react";
import './collection.styles.scss';
import { RouteComponentProps } from "react-router";
import CollectionItem from "components/collection-item/collection-item";
import { useSelector } from "react-redux";
import { selectCollection } from 'redux/shop/shop-selectors';

interface IProps extends RouteComponentProps {
}
const Collection = (props: IProps) => {
    const params: any = props.match.params;
    const collectionId = params['collectionId'];
    const collectionItem = useSelector(selectCollection(collectionId));
    const {title, items } = collectionItem;

    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map((item: any) => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    );
};

export default Collection;