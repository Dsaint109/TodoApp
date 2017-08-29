<template>
	<div id="addNote" class="modal bottom-sheet">
		<div class="modal-content">
			<h2 class="center">Add a Task</h2>
			<div class="container">
				<div class="row">
					<div class="input-field col s8 offset-s2">
						<input type="text" name="name" id="tagName_a" class="validate" v-model="tagName" required>
						<label for="tagName_a">Task Name</label>
					</div>
					<div class="col s6 offset-s3">
						<select class="browser-default" v-model="listVal">
							<option value="" disabled selected>Choose a Task List</option>
							<option :value="list" v-for="list in lists">{{ list }}</option>
						</select>
					</div>
					<a class="modal-action modal-close waves-effect btn-flat" @click="addNewTask">Create</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			lists() {
				return this.$store.getters.lists;
			}
		},
		data() {
			return {
				tagName: '',
				listVal: ''
			}
		},
		methods: {
			addNewTask() {
				let val = {
					name: this.tagName,
					list: this.listVal
				}
				console.log(val)
				this.$store.dispatch('add_new_task', val)
			}
		}
	}
</script>