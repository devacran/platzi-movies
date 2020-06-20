export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return { ...state, myList: [...state.myList, action.payload] };
    case 'DELETE_FAVORITE':
      //Va a retornar una lista con todos los elementos excepto el que elejimos
      return { ...state, myList: state.myList.filter(items => items.id !== action.payload) };
    case 'LOGIN_REQUEST':
      return { ...state, user: action.payload };
    case 'LOGOUT_REQUEST':
      return { ...state, user: action.payload };
    case 'REGISTER_REQUEST':
      return { ...state, user: action.payload };
    case 'GET_VIDEO_SOURCE':
      return { ...state, playing: state.trends.find(item => item.id === Number(action.payload)) || state.originals.find(items => item.id === Number(action.payload)) || [] };
    default:
      return state;
  }
};

//payload es quien trae la informacion
