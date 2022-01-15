import axios from "axios";
const todos={
    state:{
        todos:[
          
        ],
       
    },
    getters:{
        todos:state=>state.todos,
        doneTodos:state=>state.todos.filter(todo=>todo.completed),
        progress:(state,getters)=>{
            const doneTodos=getters.doneTodos;
            return ((doneTodos.length / state.todos.length)*100).toFixed(0)
        }
    },
    actions:{
        deleteTodo(context,todoId){
            context.commit('DELETE_TODO',todoId);
        },
        addtodo({commit},newTodo){
            commit('ADD_TODO',newTodo)            
        },
        async getTodos({commit}){
            try{
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                commit('SET_TODO',res.data);
            }
            catch(e){
                console.log(e)
            }
        }
    },
    mutations:{
        TOGGLE_AUTH(state){
            state.auth.isAuthenticated=!state.auth.isAuthenticated;
        },
        MARK_COMPLETE(state,todoId){
            state.todos.map(todo=>{
                if(todo.id==todoId){
                    todo.completed=!todo.completed;
                }
                return todo
            })
        },
        DELETE_TODO(state,todoId){
            state.todos= state.todos.filter(todo=>todo.id!==todoId);
        },
        ADD_TODO(state,newTodo){
            state.todos.unshift(newTodo)
        },
        SET_TODO(state,todos){
            
            state.todos=todos;
            console.log(state.todos)
        }
    }
}
export default todos