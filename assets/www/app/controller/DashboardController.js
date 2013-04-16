Ext.define('Navigator.controller.DashboardController',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			idDashboard:'dashboard'
		},
		control:{
			'button[action=goToSearch]' : {tap:'goToSearch'},
			'button[action=goToNearby]' : {tap:'goToNearby'},
			'button[action=goToFavourites]' : {tap:'goToFavourites'},
			'button[action=goToAbout]' : {tap:'goToAbout'}
		}
	},
	goToSearch : function(){
		Ext.getCmp('idMain').setActiveItem(1,{type:'slide',direction:'right'});
	},
	goToNearby : function(){
		Ext.getCmp('idMain').setActiveItem(1,{type:'slide',direction:'right'});
	},
	goToFavourites : function(){
		Ext.getCmp('idMain').setActiveItem(1,{type:'slide',direction:'right'});
	},
	goToAbout : function(){
		Ext.getCmp('idMain').setActiveItem(1,{type:'slide',direction:'right'});
	}
});