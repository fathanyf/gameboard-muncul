import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { addDoc, doc, query, updateDoc, where } from "firebase/firestore";
import { async } from "@firebase/util";


export const get_profile_data = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const docRef = doc(db, 'users', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch(profileData(docSnap.data));
            }
        };
        fetchData();
    };
};

export const get_total_point = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const docRef = doc(db, 'gamepoint', id);
            const docSnap = await getDoc(docRef);
            if (doc.docSnap.exists()){
                dispatch(getPoint(docSnap.data()));
            }
        };
        fetchData() 
    };
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profle: [],
        Point: [],
        loadingProfile:true,
        loadingPoint:true,
    },
    reducers: {
        profileData(state, action) {
            state.profileData = action.payload
            state.loadingProfile = false
        },
        getPoint(state, action) {
            state.getPoint = action.payload
            state.loadingPoint = false
        },
    },
})

export const { profileData } = profileSlice.actions
export default profileSlice.reducer