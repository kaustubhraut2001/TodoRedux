import {createSlice} from '@reduxjs/toolkit';

const Todoslice = createSlice({

	name : "todo",
	initialState : {
		todos : []
	},

	reducers : {

		addtodo : (state,action) => {
			state.todos.push(action.payload)
		},
		removetodo : (state,action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
		}
	}
});

export const {addtodo,removetodo} = Todoslice.actions;
export default Todoslice.reducer;