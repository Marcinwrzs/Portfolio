// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "OPEN_CLOSE_MENU":
      return {
        ...state,
        isOpen: !state.isOpen
        }
    case "GO_PAGE":
      return {
        ...state,
        isOpen: false
      }
    case "CHANGE_MODE":
      return {
        ...state,
        darkMode: !state.darkMode
     }
    default:
      return {
      state
    };
  } 
};