export default {
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
}