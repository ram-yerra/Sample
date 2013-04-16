Ext.define('Navigator.view.SearchListDetails',{
	extend:'Ext.Panel',
	id:'idSearchListDetails',
	xtype:'searchListDetails',
	config:{
		iconCls:'compose',
		title:'Search List Details',
		cls:'clsSearchListDetails',
		layout:'fit',
		items:[
	               {
			    	   xtype:'label',
			    	   html:'Name',
			    	   id:'idPlaceAddress',
	                   docked:'top'
			       },		
			       {
			    	   xtype:'dataview',
                       store:'searchListDetailsStore',
                       itemTpl:'<div class="clsTimeDuration">{duration.text} , {distance.text}</div>'
			       },
		       	   {
                       xtype:'dataview',
                       scrollable:'vertical',
                       id:'idSearchDetailsNavList',
                       store:'searchListDetailsStore',
                       itemTpl:Navigator.classes.ListDetailsTemplate.listDetails
		       	   }
		      ]
	},
	
});