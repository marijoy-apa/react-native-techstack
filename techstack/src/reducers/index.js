import { combineReducers } from 'redux';
import libraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: libraryReducer,
    selectedlibraryId: SelectionReducer
});