import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const store = new Vuex.Store({
	state: {
		loading: true,
		tasks: [
			{id:1, name:'This example demonstrates how to create an object', complete:true, list:'personal'},
			{id:2, name:'Here this keyword is used to refer to the object that has been passed to a function', complete:true, list:'personal'},
			{id:3, name:'The previous examples demonstrate how the constructor creates the object', complete:false, list:'personal'},
			{id:4, name:'But we need to complete the definition of an object by assigning methods to it', complete:false, list:'personal'},
			{id:5, name:'Try the following example; it shows how to add a function along with an object', complete:true, list:'grocery'},
			{id:6, name:'The ‘with’ keyword is used as a kind of shorthand for referencing', complete:false, list:'grocery'},
			{id:7, name:'The object specified as an argument to with becomes the default object', complete:true, list:'object'},
			{id:8, name:'The properties and methods for the object can be used without naming the object', complete:false, list:'personal'},
			{id:9, name:'The syntax for with object is as follows', complete:true, list:'personal'},
			{id:10, name:'Properties used without the object name and dot', complete:false, list:'personal'},
			{id:11, name:'The Number object represents numerical date, either integers or floating-point numbers', complete:true, list:'object'},
			{id:12, name:'In general, you do not need to worry about Number objects', complete:true, list:'object'},
			{id:13, name:'The syntax for creating a number object is as follows', complete:false, list:'personal'},
			{id:14, name:'Here is a list of each property and their description', complete:true, list:'three'},
			{id:15, name:'Equal to a value that is not a number', complete:true, list:'three'},
			{id:16, name:'A static property of the Number object. Use the prototype property to assign new properties', complete:true, list:'personal'},
			{id:17, name:'Returns the function that created this object\'s instance', complete:false, list:'three'}
		],
		lists: [],
		activeList: 'all'
	},
	getters,
	mutations,
	actions
});