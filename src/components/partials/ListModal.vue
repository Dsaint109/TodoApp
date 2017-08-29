<template>
	<div id="addTaskList" class="modal bottom-sheet">
		<div class="modal-content">
			<h2 class="center" v-if="type == 'add'">Add a Task List</h2>
			<h2 class="center" v-else>Edit {{ name }} Task List</h2>
			<div class="container">
				<div class="row">
					<div class="input-field col s8 offset-s2">
						<input 
							type="text" 
							name="name" 
							id="listName_a" 
							class="validate" 
							v-model="listName" 
							:value="name" 
							:placeholder="name" 
							@keyup.enter="createList"
							autocomplete="off" 
							autofocus="on" 
							required>
						<label for="listName_a">Name of Task List</label>
					</div>
					<a class="modal-action modal-close waves-effect btn-flat" @click.prevent="createList">Create</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			type() {
				if (this.name.length >=1) {
					return 'edit'
				}else{
					return 'add'
				}
			}
		},
		data() {
			return {
				listName: ''
			}
		},
		methods: {
			createList() {
				$('#addTaskList').modal('close')
				if (this.type == 'add') {
					this.$store.commit('create_list', this.listName);
				}else if(this.type == 'edit'){
					let val = {
						old: this.name,
						new: this.listName
					}
					this.$store.dispatch('edit_list', val)
				}
				this.listName = ''
			}
		},
		props: ['name'],
	}
</script>