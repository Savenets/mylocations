export const CategoryActionTypes = {
  showCreateModal: 'MODAL:CREATE::SHOW',
  hideCreateModal: 'MODAL:CREATE::HIDE',
  createNewCategory: 'NEW:CATEGORY::CREATE',
  removeCategory: 'NEW:CATEGORY::REMOVE',
};

export default {
  showCreateModal: () => ({ type: CategoryActionTypes.showCreateModal }),
  hideCreateModal: () => ({ type: CategoryActionTypes.hideCreateModal }),
  createNewCategory: newCategory => ({ type: CategoryActionTypes.createNewCategory, payload: newCategory }),
  removeCategory: id => ({ type: CategoryActionTypes.removeCategory, payload: id }),
};
