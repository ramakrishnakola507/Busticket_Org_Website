export const initialState = {
    isSidebarOpen: false,
    showTopContent: "block" // Add this to track content visibility
  };
  
  export const sidebarReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_SIDEBAR":
        return {
          ...state,
          isSidebarOpen: !state.isSidebarOpen,
          showTopContent: state.showTopContent === "block" ? "hidden" : "block"
        };
      default:
        throw new Error(`No matching "${action.type}" action type`);
    }
  };