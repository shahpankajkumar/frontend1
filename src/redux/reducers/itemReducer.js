import {
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS
} from '../actions/itemActions';

const initialState = {
  items: [],
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case ADD_ITEM_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    default:
      return state;
  }
}
