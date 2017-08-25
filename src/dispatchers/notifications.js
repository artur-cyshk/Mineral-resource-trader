import { addNotification, removeNotification } from '../actions/notifications';


export default (data, flag) => (dispatch) => dispatch(flag ? addNotification(data) : removeNotification(data));
