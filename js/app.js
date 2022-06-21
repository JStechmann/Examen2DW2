// Init App
var app = new Framework7({
  	root: '#app',
	name:"Examen",
	id: "com.examen",
	panel:{
		swipe:"left",
	},
	routes:[
		{
			path:"/home/",
			url:"index.html",
		},
		{
			path:"/hamburguesas/",
			url:"categoria1.html",
		},
		{
			path:"/pastas/",
			url:"categoria2.html",
		},
		{
			path:"/sandwich/",
			url:"categoria3.html",
		},
		{
			path:"/perfil/",
			url:"perfil.html",
		},
	],
});

var mainView= app.views.create('.view-main');
