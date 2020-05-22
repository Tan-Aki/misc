import { TOGGLE_TOOLBAR } from "../actions/toolbar";

const initialState = {
  showToolbar: false,
};

const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOOLBAR:
      //   let updatedLanguage = state.language;

      //   if (updatedLanguage === "EN") {
      //     updatedLanguage = "FR";
      //   } else if (updatedLanguage === "FR") {
      //     updatedLanguage = "EN";
      //   }
      return {
        ...state,
        showToolbar: !state.showToolbar,
      };
    default:
      return state;
  }
};

export default toolbarReducer;
