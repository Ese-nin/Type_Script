import {reducer, TOGGLE_COLLAPSED} from "./reducer";

test("reducer should change value to opposite", () => {
    const state = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
    expect(state.collapsed).toBe(false)


})

test("reducer should return Error", () => {
    const state = {
        collapsed: false
    }

    /*const newState = reducer(state, {type: "FAKE_TYPE"})*/

    expect( () => { reducer(state, {type: "FAKE_TYPE"}) } ).toThrowError();


})