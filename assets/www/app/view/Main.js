Ext.define('Navigator.view.Main',{
	extend:'Ext.TabPanel',
	xtype:'mainView',
	id:'idMain',
	config:{
		tabBar:{
			docked:'bottom',
			hidden:true
		},
		items:[
		       	   {xtype:'dashboard'},//0
			       {xtype:'search'},//1
			       {xtype:'searchList'},//2
			       //{xtype:'searchListDetails'}
		      ]
	}
});