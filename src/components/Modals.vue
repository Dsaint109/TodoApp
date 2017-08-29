<template>
	<div>
		<list-modal :name="list"></list-modal>
		<task-modal></task-modal>
	</div>
</template>

<script>
	import ListModal from './partials/ListModal.vue'
	import TaskModal from './partials/TaskModal.vue'
	import { bus } from '../main'

	export default {
		data() {
			return {
				list: '',
				task: ''
			}
		},
		components: {
			ListModal,
			TaskModal
		},
		mounted() {
			bus.$on('editList', listName => {
				this.editListAction(listName)
			});
			bus.$on('addList',()=> {
				this.addListAction()
			});
		},
		methods: {
			editListAction(listName) {
				this.list = listName
				$('#addTaskList').modal('open')
			},
			addListAction(){
				this.list = ''
			}
		}
	}
</script>