// const ADD_NOTEBOOK = {
//   type: "ADD_NOTEBOOK", payload: { title: "Redux!!!" }
// }

// export default ADD_NOTEBOOK;

export function addNotebook(title) {
  return {
    type: "ADD_NOTEBOOK", payload: { title }
  }
}
