import { SWITCH_LANGUAGE } from "../actions/language";

const initialState = {
  language: "EN",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      //   let updatedLanguage = state.language;

      //   if (updatedLanguage === "EN") {
      //     updatedLanguage = "FR";
      //   } else if (updatedLanguage === "FR") {
      //     updatedLanguage = "EN";
      //   }
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default languageReducer;
