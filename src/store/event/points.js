import { uCheck } from '@dbetka/utils';

export default {
  getters: {
    numberOfCollectedPointsByCategoryId: (state, getters, rootState, rootGetters) => categoryId => {
      const listOfPoints = rootGetters['event/points'].filter(point => {
        const sameCategory = point.pointCategory === categoryId;
        const isNotNull = uCheck.isNotNull(point.pointCollectionTime);
        return isNotNull && sameCategory;
      });
      return (listOfPoints || []).length;
    },
    numberOfPointsByCategoryId: (state, getters, rootState, rootGetters) => categoryId => {
      const listOfPoints = rootGetters['event/points'].filter(point => {
        return point.pointCategory === categoryId;
      });
      return (listOfPoints || []).length;
    },
    pointValueByPointCategory: (state, getters, rootState, rootGetters) => pointCategory => {
      const category = rootGetters['event/getCategoryById'](pointCategory);
      return (category || {}).pointValue;
    },
    checkTemporaryPointIsVisible: () => ({ pointAppearanceTime, pointExpirationTime }) => {
      const now = (new Date()).getTime();
      return pointAppearanceTime < now && now < pointExpirationTime;
    },
  },
};
