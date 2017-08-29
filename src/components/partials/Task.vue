<template>
	<div>
		<div class="heading row white">
			<a><i class="material-icons left hide-on-med-and-up mkl2">close</i></a>
			<h4 class="center">
				{{ activeList }}
			</h4>
		</div>

		<div class="divider"></div>
		
		<div class="list-tasks container">
			<br>
			<!-- Incomplete tasks Group -->
			<div class="list-task-group">
				<div class="group-title">
					<h5>Incomplete <a href="#addNote" class="right modal-trigger"><i class="material-icons">add</i></a></h5>
				</div>
				
				<div class="group-list">
					<ul class="group-list-ul">
						<span  v-for="task in incompleteActiveListTasks">
							<li>
								<span>{{ task.name }}</span>
								<a class="right" @click.prevent="markAsDone(task)"><i class="material-icons">done</i></a>
								<a class="right" @click.prevent="deleteTask(task)"><i class="material-icons">delete</i></a>
							</li>
							<div class="divider"></div>
						</span>
					</ul>
				</div>
			</div>

			<br>
			<!-- Complete tasks Group -->
			<div class="list-task-group">
				<div class="group-title">
					<h5>Completed</h5>
				</div>

				<div class="group-list">
					<ul class="group-list-ul">
						<span v-for="task in completedActiveListTasks">
							<li>
								<span style="text-decoration: line-through">{{ task.name }}</span>
								<a class="right" @click.prevent="deleteTask(task)"><i class="material-icons">delete</i></a>
							</li>
							<div class="divider"></div>
						</span>
					</ul>
				</div>
			</div>
		</div>


		<!-- Fixed Action Buttons -->
		<fab></fab>
	</div>
</template>

<script>
	import Fab from './Fab.vue'

	export default {
		components: {
			Fab
		},
		computed: {
			activeList() {
				return this.$store.getters.active_list
			},
			completedActiveListTasks() {
				return this.$store.getters.active_tasks.filter(task => {
					return task.complete
				});
			},
			incompleteActiveListTasks() {
				return this.$store.getters.active_tasks.filter(task => {
					return !task.complete
				});
			}
		},
		methods: {
			markAsDone(task){
				this.$store.dispatch('mark_as_done', task)
			},
			deleteTask(task) {
				this.$store.dispatch('delete_task', task)
			}
		}
	}
</script>