import { createAction } from '@reduxjs/toolkit';
import { Subscription } from '../utils/data.ts';


export const addAvailableSubscriptions = createAction<Subscription[], 'ADD_AVAILABLE_SUBSCRIPTIONS'>('ADD_AVAILABLE_SUBSCRIPTIONS');
export const removeAvailableSubscriptions = createAction<string, 'REMOVE_AVAILABLE_SUBSCRIPTIONS'>('REMOVE_AVAILABLE_SUBSCRIPTIONS');
