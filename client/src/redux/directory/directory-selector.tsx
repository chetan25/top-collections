import { createSelector } from "reselect";
import  { IStore, IDirectoryState } from 'interfaces/store.interface';

const selectDirectory = (state: IStore): IDirectoryState => {
    return state.directory;
};

export const directorySelector = createSelector(
    [selectDirectory],
    (directory: any) => directory.sections
);