import authReducer from '../../reducers/auth';

test('should login and set user id', () => {
    const action = {
        type: 'LOGIN',
        uid: 'ajsdfsak2342411'
    };
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid);
});

test('should logout and clear uid', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'ajsdfsak2342411'},action);
    expect(state).toEqual({});
});