import angular from 'angular';
import template from './root.template.html';
import e from '../index.js'

angular
.module('angularJS-app')
.component('root', {
  template,
  controller:('name', function($sce){
    	this.name = e.on('name', name => {
  	    	return `<p>Hola ${name.text}</p>`
  	    });
    })
})