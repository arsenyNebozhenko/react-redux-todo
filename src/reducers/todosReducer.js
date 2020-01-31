const initialState = [
  {
    id: 1,
    title: 'test 1',
    status: 'active'
  },
  {
    id: 2,
    title: 'test 2',
    status: 'completed'
  },
  {
    id: 3,
    title: 'test 3',
    status: 'failed'
  }
]

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default todosReducer
