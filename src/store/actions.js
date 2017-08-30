export default  {
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