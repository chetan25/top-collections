import React from "react";
import './preview-collection.styles.scss';
import CollectionItem from "components/collection-item/collection-item";
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

interface IProps extends RouteComponentProps {
    title: string;
    routeName: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}

const PreviewCollection = (props: IProps) => {
    const { title, items, history, routeName, match } = props;

    const navigateTo = () => {
        history.push(`${match.path}/${routeName}`);
    };

    return (
       <div className='collection-preview'>
           <h1 className='title' onClick={navigateTo}>{title.toUpperCase()}</h1>
           <div className='preview'>
               {
                   items.filter((item, index) => index < 4)
                       .map(item => {
                          return (
                              <CollectionItem  key={item.id} item={item}/>
                          );
                       })
               }
           </div>
       </div>
   );
};

export default withRouter(PreviewCollection);