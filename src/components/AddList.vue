<template>
	<div class="col s12 m3 tl">
		<section class="task-lists-section">
			<div class="row">
				<h2>Hi David</h2>
				<h5>your task Lists</h5>
			</div>
			<div class="row task-lists">

				<div class="card col s6 task-list" @click="makeActive('all')">
					<h5>All</h5>
					<h6>{{ all_count }} items</h6>
				</div>

				<div class="card col s6 task-list" v-for="list in lists" @click="makeActive(list)">
					<i class="material-icons right grey-text text-lighten-1" @click.prevent="showMore">more_vert</i>
					<h5>{{ list }}</h5>
					<h6>{{ get_list_count(list)}} items</h6>
					<div class="action hide animated slideInUp">
						<div class="col s4 offset-s1 circle">
							<i class="material-icons action-close" @click="deleteTaskList(list)">close</i>
						</div>
						<div class="col s4 offset-s1 circle">
							<i class="material-icons action-edit" @click="sendEdit(list)">edit</i>
						</div>
					</div>
				</div>

				<div class="task-list add col s6 center">
					<a href="#addTaskList" class="modal-trigger" @click="sendAdd">+</a>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import { bus } from '../main'

	export default {
		mounted() {
			this.$store.commit('set_loading', false);
		},
		data() {
			return {

			}
		},
		methods: {
			get_list_count(list) {
				let ltasks =  this.$store.getters.tasks.filter( task =>{
					return task.list.match(list);
				});
				return ltasks.length
			},
			sendEdit(list) {
				bus.$emit('editList', list)
			},
			sendAdd() {
				bus.$emit('addList')
			},
			makeActive(list){
				this.$store.commit('set_active_list', list)
			},
			deleteTaskList(list) {
				this.$store.dispatch('delete_task_list', list)
			},
			showMore() {
				$(this).siblings('.action').toggleClass('hide');
			}
		},
		computed: {
			lists() {
				return this.$store.getters.lists;
			},
			all_count() {
				return this.$store.getters.total_tasks;
			}
		}
	}
</script>