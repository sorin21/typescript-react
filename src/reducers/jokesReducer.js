const jokesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOKE':
      return [
        ...state,
        action.jokes
      ];
  
    default:
      return state;
  }
};

export default jokesReducer;