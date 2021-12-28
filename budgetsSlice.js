import {createSlice} from '@reduxjs/toolkit'

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))




//Creating Budget slice
const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
   editBudget:(state, action) => {
     const amount = action.payload.amount;
     const category = action.payload.category;

     state.find(budget => budget.category === category).amount = amount;
   } 
  }
})


export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;

export const selectBudgets = (state) => state.budgets;

