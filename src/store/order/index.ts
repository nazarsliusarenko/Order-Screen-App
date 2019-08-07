import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { OrderState } from './models';
import { RootState } from '@/models/store';

const namespaced: boolean = true;
export const namespace = 'order';

export const state: any = {

};

export const order: Module<OrderState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
