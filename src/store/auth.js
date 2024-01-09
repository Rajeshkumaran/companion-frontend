import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = { userLoginType: 'patient',userIsInMeeting:false,recovery:{mail:null,password:null,confirmPassword:null} };

const authSlice = createSlice({
  name: 'authSliceReducer',
  initialState,
  reducers: {
    setLoggedInUserAsDoctor(state) {
      return {
        ...state,
        userLoginType: 'doctor'
      }
    },
    setLoggedInUserAsPatient(state) {
      return {
        ...state,
        userLoginType: 'patient'
      };
    },
    setUserIsInMeeting(state,action){
      return {
        ...state,
        userIsInMeeting:action.payload
      };
    },
    setRecoveryMail(state,action){
      return {
        ...state,
        recovery:{
          ...state.recovery,
          mail:action.payload,
        }
      }
    },
    setRecoveryPassword(state,action){
      return{
        ...state,
        recovery:{
          ...state.recovery,
          password:action.payload.password,
          confirmPassword:action.payload.confirmPassword
        }
      }
    }
  },
});

const authSelector = createSelector(
  (state) => state,
  (state) => state.auth,
);
const selectUserLoginType = createSelector(authSelector, (auth) => auth.userLoginType);
const selectIsUserInMeeting = createSelector(authSelector, (auth) => auth.userIsInMeeting);
const selectRecoveryDetails = createSelector(authSelector, (auth) => auth.recovery)
export const { setLoggedInUserAsDoctor, setLoggedInUserAsPatient ,setUserIsInMeeting,setRecoveryMail,setRecoveryPassword} = authSlice.actions;
export default authSlice.reducer;
export { selectUserLoginType,selectIsUserInMeeting,selectRecoveryDetails};
