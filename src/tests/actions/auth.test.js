import {login,logout} from '../../actions/auth';

test('should generate login action',() => {
    const uid='asd2342412124';
    const action=login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action',() => {
    const action=logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});