import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };

      return { ...state, persons: state.persons.concat(newPerson) };
    case actionTypes.DELETE_PERSON:
      return { ...state, persons: state.persons.filter((person) => person.id !== payload) };

    default:
      return state;
  }
};
