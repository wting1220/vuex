const state = {
    todos: []
};
const getters = {
    getAllTodos: state => state.todos
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
    updatedTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id == updatedTodo.id);
        // console.log(index);
        if (index != -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};
const actions = {
    async fetchTodos({ commit }) {
        const res = await axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10");
        commit("setTodos", res.data);
    },
    async addTodo({ commit }, title) {
        const res = await axios.post("http://jsonplaceholder.typicode.com/todos?_limit=10", {
            title,
            completed: false
        });
        commit("newTodo", res.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit("removeTodo", id);
    },
    async filterTodos({ commit }, count) {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${count}`);
        commit("setTodos", res.data);
    },
    async updateTodo({ commit }, todo) {
        const res = await axios.put(`http://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit("updatedTodo", res.data);
    },

}

export default {
    state, getters, mutations, actions
}