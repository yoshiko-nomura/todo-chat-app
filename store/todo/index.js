export const state = () => ({
  todos: [],
})

export const getters = {
  todos: state => {
    return state.todos
  },
}

export const actions = {
  submitTodo ({ dispatch }, todo) {
    this.$fire.firestore.collection('todo').add({})
      .then((res) => {
        console.log(res)
        this.$fire.firestore.collection('todo').doc(res.id)
          .set({
            todo: todo,
            id: res.id,
          })
          .then(() => {
            dispatch('getTodos')
          })
      })
  },
  getTodos({ commit }) {
    this.$fire.firestore.collection('todo').get()
      .then(function(querySnapshot) {
        const todos = []
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          todos.push(doc.data())
        })
        commit('getTodos', todos)
      })
  },
  deleteTodo({ dispatch }, id) {
    this.$fire.firestore.collection('todo').doc(id).delete()
    dispatch('getTodos')
  },
}

export const mutations = {
  getTodos (state, todos) {
    state.todos = todos
  },
  // deleteTodo (state, index) {
  //   state.todos.splice(index, 1)
  // },
}