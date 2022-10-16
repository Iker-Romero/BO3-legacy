export const clearChilds = (id) => {
  parent = document.getElementById(id);
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
};
