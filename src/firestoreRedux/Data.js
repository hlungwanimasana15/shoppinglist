import { createSlice } from "@reduxjs/toolkit";
import { collection ,addDoc, getDocs, onSnapshot  } from 'firebase/firestore'
import { db } from "../config/firestoredb";

const initialState = {
    loading:false,
    error:null,
    data:[],

}

const dataSlice =createSlice({
    name:'data',
    initialState,
    reducers:{
        fetchDataStart(state){
            state.loading = true;
            state.error = null
        },

        fetchDataSuccess(state,action){
            state.loading = false;
            state.data=action.payload;

        },

        fetchDataFailure(state,action){
            state.loading = false ;
            state.error=action.payload
        }


}
})

export const {  fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const fetchData = () => async ( dispatch ) => {
    dispatch(fetchDataStart())
    
    try {
            let q = [];
            const collectionRef = collection(db,"shoppinglist")
            onSnapshot(collectionRef,(snapshot) => {
                const docs = []
                snapshot.forEach((doc) => {
                   docs.push({id:doc.id,...doc.data()}) 
                });
                dispatch(fetchDataSuccess(docs))
                console.log(docs);
            })
           
        // const querySnapshot = await getDocs(collection(db, 'shoppinglist'));
      
        // const data = querySnapshot.docs.map((doc) => ({
        //    id: doc.id, ...doc.data() 
        // }))
        // console.log(data);
        
    }catch(error){
        dispatch(fetchDataFailure(error))
    }

}


export default dataSlice.reducer