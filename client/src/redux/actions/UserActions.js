// redux/actions/userActions.js
import { setCurrentUser } from '../slices/userSlice';
import { setError, clearError } from '../slices/errorSlice';

export const login = ({ username, password }) => async (dispatch) => {
  dispatch(clearError());

  try {
   
    await new Promise((resolve) => setTimeout(resolve, 1000)); // סימולציה

    const fakeServerResponse = [
      { id: '1', username: 'dan', password: '1234', role: 'club', location: 'TLV' },
      { id: '2', username: 'dan2', password: '5678', role: 'client', location: 'Haifa' },
    ];
        alert(username +" " + password)
    const foundUser = fakeServerResponse.find(
      (u) =>
        u.username.toLowerCase().trim() === username.toLowerCase().trim() &&
        u.password === password
    );

    if (foundUser) {
      dispatch(setCurrentUser(foundUser));
    } else {
      dispatch(setError('שם משתמש או סיסמה שגויים'));
    }
  } catch (err) {
    dispatch(setError('שגיאה בעת ההתחברות'));
  }
};
