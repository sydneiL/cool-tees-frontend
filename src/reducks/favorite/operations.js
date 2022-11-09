import API from '../../API';
import { addFavoriteAction, fetchFavoriteAction, deleteFavoriteAction, errorFavoriteAction } from './actions';
import { getFavorites } from './selectors';
const api = new API();

export const fetchFavorites = () => {
    return async dispatch => {
        return api.getFavorites().then(favorites => {
            dispatch(fetchFavoriteAction(favorites));
        });
    };
};
export const addFavorites = addFavoriteBody => {
    return async dispatch => {
        return api
            .FavoriteAdd(addFavoriteBody)
            .then(home => {
                dispatch(addFavoriteAction(home));
            })
            .catch(errors => {
                dispatch(errorFavoriteAction(errors));
            });
    };
};
export const deleteFavorites = id => {
    return async dispatch => {
        return api
            .FavoriteDelete(id)
            .then(favourites => {
                dispatch(deleteFavoriteAction(id));
            })
            .catch(errors => {
                dispatch(errorFavoriteAction(errors));
            });
    };
};