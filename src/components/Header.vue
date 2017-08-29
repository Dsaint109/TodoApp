<template>
	<div class="navbar-fixed">
		<nav class="white z-depth-0">
			<div class="nav-wrapper container">
				<a class="grey-text text-darken-1">Tuesday, 29th of August</a>
				<ul class="right">
					<li><a href="#" class="sidenav-a" data-activates="settings-sidenav"><i class="material-icons grey-text text-lighten-2">settings</i></a></li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				date: new Date()
			}
		}
	}
</script>