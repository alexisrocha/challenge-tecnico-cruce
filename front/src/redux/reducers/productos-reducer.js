const initialState = {
  productos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, productos: action.TodosLosProductos };
    default:
      return state;
  }
};
