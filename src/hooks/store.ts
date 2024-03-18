import { useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import {store} from '../services/store';
import type { TypedUseSelectorHook } from 'react-redux';

export const useDispatch: () => typeof store.dispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = selectorHook
