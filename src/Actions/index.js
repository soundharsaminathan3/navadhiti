const setJSON = (myJson) => ({
  type: 'SET_JSON',
  myJson,
});
const actions = {
  setJSON: setJSON,
};
export default actions;
