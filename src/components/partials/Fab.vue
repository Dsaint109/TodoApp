<template>
	<div class="fixed-action-btn">
		<a class="btn-floating btn-large waves-effect waves-light">
			<i class="material-icons">add</i>
		</a>
		<ul>
			<li>
				<a href="#addNote"
					class="btn-floating purple lighten-3 waves-effect tooltipped modal-trigger" 
					data-tooltip="Add New Task" 
					data-position="left">

					<i class="material-icons">note_add</i>
				</a>
			</li>
			<li>
				<a href="#addTaskList"
					class="btn-floating pink lighten-2 waves-effect tooltipped modal-trigger" 
					data-tooltip="Add New Task List" 
					data-position="left"
					@click="sendAdd">
					
					<i class="material-icons">queue</i>
				</a>
			</li>
		</ul>
	</div>
</template>


<script>
	import { bus } from '../../main'

	export default {
		methods: {
			sendAdd(){
				bus.$emit('addList');
			}
		}
	}
</script>