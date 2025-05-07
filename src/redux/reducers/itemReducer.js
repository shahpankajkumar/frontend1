import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
} from '../actions/itemActions';

const initialState = {
  items: [],
  loading: false, // Add a loading property
  error: null,    // Add an error property to track failures
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Items
    case FETCH_ITEMS_REQUEST:
      return { ...state, loading: true, error: null }; // Start loading
    case FETCH_ITEMS_SUCCESS:
      return { ...state, items: action.payload, loading: false }; // Stop loading on success
    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload }; // Stop loading on failure

    // Add Item
    case ADD_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_SUCCESS:
      return { ...state, items: [...state.items, action.payload], loading: false };
    case ADD_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Delete Item
    case DELETE_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        loading: false,
      };
    case DELETE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Update Item
    case UPDATE_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
        loading: false,
      };
    case UPDATE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}