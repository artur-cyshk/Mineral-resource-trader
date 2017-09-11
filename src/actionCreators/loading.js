import { startLoading, endLoading } from '../actions/loading';

export default (flag, dispatch) => {
	dispatch(flag ? startLoading() : endLoading());
}