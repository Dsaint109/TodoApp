<template>
	<div id="app">
		<init></init>
		<preloader></preloader>
		<header>
			<header-tag></header-tag>
			<side-nav></side-nav>
		</header>
		<div class="divider"></div>
		<main>
			<div class="container">
				<div class="row">

					<add-list></add-list>

					<add-task></add-task>

					<modals></modals>
				</div>
			</div>
		</main>
		<mobile-task></mobile-task>
	</div>
</template>


<script>
import Init from './components/Init.vue'
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import SideNav from './components/SideNav.vue'
import Modals from './components/Modals.vue'
import AddList from './components/AddList.vue'
import AddTask from './components/AddTask.vue'
import MobileTask from './components/MobileTask.vue'

export default {
	name: 'app',
	data () {
		return {

    	}
  	},
  	components: {
  		'init': Init,
  		'preloader': Preloader,
  		'header-tag': Header,
  		'side-nav': SideNav,
  		'modals': Modals,
  		'add-list': AddList,
  		'add-task': AddTask,
  		'mobile-task': MobileTask
  	}
}
</script>