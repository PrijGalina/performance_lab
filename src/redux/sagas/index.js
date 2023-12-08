import { takeEvery, select, put, call, fork, all } from 'redux-saga/effects';
import { ACTION_TYPE, CATALOG_SECTIONS, SORT_TYPES } from '../../constants';
import { ProductsService } from '../../api';
import { fetchDataSuccess, fetchDataRequest, fetchDataFailure } from '../slices/data/dataSlice.js';
import { setQuantityOfItem, setNumberPage, setSortParam, setSortValue } from '../slices/main/mainSlice.js';

function* fetchDataFromApi(action) {
  let currentSection = yield select(({main}) => main.catalogSection);
  let apiFunction;
  switch(currentSection){
    case CATALOG_SECTIONS.Food:
      apiFunction = ProductsService.getFood;
      break;
    case CATALOG_SECTIONS.Cloth:
      apiFunction = ProductsService.getCloth;
      break;
    case CATALOG_SECTIONS.Electronic:
      apiFunction = ProductsService.getElectronics;
      break;
    default:
      break;
  }

  try {
    yield put(fetchDataRequest());
    const data = yield call(apiFunction, action.payload);
    yield put(fetchDataSuccess(data.data.record));
    yield put(setQuantityOfItem(data.data.record.length));
  } 
  catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* resetData(){
  yield put(fetchDataSuccess([]));
  yield put(setNumberPage(1));
  yield put(setSortParam(SORT_TYPES.ByPrice));
  yield put(setSortValue(SORT_TYPES.ByAsc));
}

function* watchChangePageSaga() {
  yield takeEvery(ACTION_TYPE.SetCatalogSection,resetData);
  yield takeEvery(ACTION_TYPE.SetCatalogSection, fetchDataFromApi);
}

export function* watchInitSaga() {
  yield takeEvery("INIT_SAGA", fetchDataFromApi);
}

export function* rootSaga() {
  yield all([
    fork(watchInitSaga),
    fork(watchChangePageSaga),
  ]);
}