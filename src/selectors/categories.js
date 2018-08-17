import { createSelector } from 'reselect';
import { get } from 'lodash';

const categorySelector = state => state.categories;

export const getCategories = createSelector(categorySelector, categories => get(categories, 'categories'));
export const isCreateModalOpenSelector = createSelector(categorySelector, isCreateModalOpen => get(isCreateModalOpen, 'isCreateModalOpen'));
