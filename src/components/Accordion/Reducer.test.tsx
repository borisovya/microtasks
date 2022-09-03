import {reducer, StateType} from "./Reducer";


test('reducer should change value to opposite', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    expect(newState.collapsed).toBe(true)
})

test('reducer should change value', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})

test('reducer test fake type', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError();
})