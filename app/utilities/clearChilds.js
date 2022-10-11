export const clearChilds = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}