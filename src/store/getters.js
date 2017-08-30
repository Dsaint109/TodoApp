export default {
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
}