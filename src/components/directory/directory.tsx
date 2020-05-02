import React from "react";
import MenuItem from "components/menu-item/menu-item";
import './directory.styles.scss';
import { useSelector } from "react-redux";
import { directorySelector } from 'redux/directory/directory-selector';

interface IProps {

}
const Directory = (props: IProps) => {
    const sections = useSelector(directorySelector);

    return (
        <div className='directory-menu'>
            {
                sections.map(({title, imageUrl, id, size, linkUrl}: {title: string; imageUrl: string; id: string; size: string; linkUrl: string}) => {
                   return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                })
            }
        </div>
    );
};

export default Directory;