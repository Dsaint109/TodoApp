import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loading: true,
		tasks: [
			{id:1, name:'This example demonstrates how to create an object', complete:true, list:'personal'},
			{id:2, name:'Here this keyword is used to refer to the object that has been passed to a function', complete:true, list:'personal'},
			{id:3, name:'The previous examples demonstrate how the constructor creates the object', complete:false, list:'personal'},
			{id:4, name:'But we need to complete the definition of an object by assigning methods to it', complete:false, list:'personal'},
			{id:5, name:'Try the following example; it shows how to add a function along with an object', complete:true, list:'grocery'},
			{id:6, name:'The ‘with’ keyword is used as a kind of shorthand for referencing', complete:false, list:'grocery'},
			{id:7, name:'The object specified as an argument to with becomes the default object', complete:true, list:'object'},
			{id:8, name:'The properties and methods for the object can be used without naming the object', complete:false, list:'personal'},
			{id:9, name:'The syntax for with object is as follows', complete:true, list:'personal'},
			{id:10, name:'Properties used without the object name and dot', complete:false, list:'personal'},
			{id:11, name:'The Number object represents numerical date, either integers or floating-point numbers', complete:true, list:'object'},
			{id:12, name:'In general, you do not need to worry about Number objects', complete:true, list:'object'},
			{id:13, name:'The syntax for creating a number object is as follows', complete:false, list:'personal'},
			{id:14, name:'Here is a list of each property and their description', complete:true, list:'three'},
			{id:15, name:'Equal to a value that is not a number', complete:true, list:'three'},
			{id:16, name:'A static property of the Number object. Use the prototype property to assign new properties', complete:true, list:'personal'},
			{id:17, name:'Returns the function that created this object\'s instance', complete:false, list:'three'}
		],
		lists: [],
		activeList: 'all'
	},
	getters: {
		loading(state) {
            return state.loading
        },
        tasks(state) {
        	return state.tasks
        },
        active_tasks(state) {
        	if(state.activeList == 'all'){
				return state.tasks
			}else {
				return state.tasks.filter( task =>{
					return task.list.match(state.activeList);
				});
			}
        },
        total_tasks(state){
        	return state.tasks.length
        },
        lists(state) {
        	for (var i = state.tasks.length - 1; i >= 0; i--) {
        		if(state.lists.lastIndexOf(state.tasks[i].list) >= 0){
        			
        		}else {
        			state.lists.push(state.tasks[i].list);
        		}
        	}
        	return state.lists
        },
        active_list(state) {
        	return state.activeList;
        }
	},
	mutations: {
		set_loading(state, value) {
            state.loading = value
        },
        get_all_tasks(state, value) {
        	state.tasks = value
        },
        set_active_list(state, listname){
			state.activeList = listname
		},
		mark_as_done(state, tsk){
			const task = state.tasks.find( t => {
				return t.id == tsk.id
			});
			task.complete = true;
		},
		delete_task(state, tsk) {
			const task =  state.tasks.find( t => {
				return t.id == tsk.id
			});
			state.tasks.splice(state.tasks.lastIndexOf(task), 1)
			state.activeList = 'all'
		},
		delete_task_list(state, tasklist) {
			let tlist = state.tasks.filter( task =>{
				return task.list.match(tasklist);
			});
			for (var i = tlist.length - 1; i >= 0; i--) {
				let task = state.tasks.find( t => {
					return t.id == tlist[i].id
				});
				state.tasks.splice(state.tasks.lastIndexOf(task), 1)
			}
			state.lists.splice(state.lists.lastIndexOf(tasklist), 1)
			state.activeList = 'all'
		},
		create_list(state, listname) {
			state.lists.push(listname);
		},
		edit_list(state, value) {
			let tlist = state.tasks.filter( task =>{
				return task.list.match(value.old);
			});
			for (var i = tlist.length - 1; i >= 0; i--) {
				let task = state.tasks.find( t => {
					return t.id == tlist[i].id
				});
				task.list = value.new
			}
			state.lists.splice(state.lists.lastIndexOf(value.old), 1)
			state.lists.push(value.new)
			state.activeList = value.new
		},
		add_new_task(state, value) {
			let a = state.tasks.length
			let b = state.tasks[a-1].id
			let task = {
				id: b+1,
				name: value.name,
				complete: false,
				list: value.list
			}
			state.tasks.push(task)
			console.log(task)
		}
	},
	actions: {
		get_all_tasks({ commit }, user) {
			commit('get_all_tasks', value)
		},
		mark_as_done({ commit }, task){
			//Do something in the server then do this on success
			commit('mark_as_done', task)
		},
		delete_task({ commit }, task) {
			//Do something on the server then do this on success
			commit('delete_task', task)
		},
		delete_task_list({ commit }, tasklist) {
			//do something on the server then do this on success
			commit('delete_task_list', tasklist)
		},
		edit_list({ commit }, value) {
			//Do something in the server then do this on success
			commit('edit_list', value)
		},
		add_new_task({ commit }, value) {
			//Do something on the server then do this on success
			commit('add_new_task', value)
		}
	}
});