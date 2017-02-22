const users = ( state = [], action ) => {
  let index;
  switch(action.type){
    case 'ALL_USERS':
      return action.users;
      break;
    case 'CREATE_USER':
      return [action.user, ...state]
      break;
    case 'DELETE_USER':
      index = state.findIndex( o => o.id === action.id)
      return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default users;
