import React from "react";
import MenuItem from "components/menu-item/menu-item";
import './directory.styles.scss';
import { IDirectoryItem } from "interfaces/cart.interface";

interface IProps {
    sections: IDirectoryItem[]
}
const Directory = (props: IProps) => {
    const { sections } = props;

    return (
        <div className='directory-menu'>
            {
                sections.map(({title, imageUrl, id, size, linkUrl}: IDirectoryItem) => {
                   return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                })
            }
        </div>
    );
};

export default Directory;