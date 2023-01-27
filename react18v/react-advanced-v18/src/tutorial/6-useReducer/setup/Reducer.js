export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      ismodalopen: true,
      modalcontent: "item added",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      ismodalopen: true,
      modalcontent: "please enter value",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      ismodalopen: false,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("no matching type");
};
