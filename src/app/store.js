import { configureStore } from '@reduxjs/toolkit';
import addSlice from '../firestoreRedux/addSlice';
import  infoSlice  from '../firestoreRedux/Getdata';
import firestoreSlice from '../firestoreRedux/EditSlice'
import dataSlice from '../firestoreRedux/Data'


 const store = configureStore({
    reducer:{
        addData:addSlice,
        data:dataSlice,
        deleteitems:addSlice,
        getItem:infoSlice,
        updatefirestoreDocument :firestoreSlice

    }

})
 
export default store;