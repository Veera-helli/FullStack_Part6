import { createSlice } from '@reduxjs/toolkit';

const getId = () => (100000 * Math.random()).toFixed(0);

export const newAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload.id;
      return state
        .map((anecdote) =>
          anecdote.id !== id ? anecdote : action.payload.changedAnecdote
        )
        .sort((a, b) => b.votes - a.votes);
    },
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export default anecdoteSlice.reducer;

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = [];

// const anecdoteReducer = (state = initialState, action) => {
//   console.log('state now: ', state);
//   console.log('action', action);
//   switch (action.type) {
//     case 'VOTE': {
//       const id = action.data.id;
//       const anecdoteToChange = state.find((n) => n.id === id);
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1,
//       };
//       return state
//         .map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote))
//         .sort((a, b) => b.votes - a.votes);
//     }
//     case 'NEW_ANECDOTE':
//       return state.push(action.data);
//     default:
//       return state;
//   }
// };

// export const voteAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id },
//   };
// };
