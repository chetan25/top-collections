import SECTIONS_DATA from "../../section-data";
import { IDirectoryState } from 'interfaces/store.interface';

const INITIAL_STATE: IDirectoryState = {
    sections: SECTIONS_DATA
};

const directoryReducer = (state = INITIAL_STATE, action: any): IDirectoryState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;