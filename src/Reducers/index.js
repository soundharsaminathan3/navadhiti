const initial_state = {
  myJson: {},
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case 'SET_JSON':
      // console.log('reducer');
      // console.log(action.myJson);

      return {
        myJson: action.myJson,
      };

    default:
      return state;
  }
};
