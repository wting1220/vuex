const state = {
    todos: [
        { id: 1, title: "todo item 1", completed: false },
        { id: 2, title: "todo item 2", completed: true },
        { id: 3, title: "todo item 3", completed: true },
    ]
};
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosId: state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos
};
const actions = {
    // ES9
    async fetchDataAsync(context) {
        // 解决异步出现混乱的情况
        const res = await Axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10");
        console.log(res);
        context.commit("setTodos", res.data);
    }
};




export default {
    state, getters, mutations, actions
}