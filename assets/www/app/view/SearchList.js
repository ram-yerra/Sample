Ext.define("Navigator.view.SearchList", {
    extend: "Ext.Container",
    id: 'idSearchList',
    xtype: 'searchList',
    config: {
		iconCls:'search',
		title:'Search List',
        layout:'fit',
        items: [
	                {
	                    xtype:'toolbar',
	                    docked:'top',
	                    ui:'light',
	                    items: [
									{
										xtype:'button',
										iconCls:'home',
										iconMask:true,
										ui:'plain',
										action:'goToHome'
									},
		                            {xtype: 'spacer'},
		                            {   
		                            	xtype: 'title' ,
		                            	id:'idPlaceName',
		                                title:"Search List",  
		                            },
		                            {xtype: 'spacer'},
		                            {
		                            	xtype:'button',
		                            	iconCls:'reply',
		                            	iconMask:true,
		                            	id:'idBtnBackToSearch',
		                            	ui:'plain',
		                            	action:'goToSearch'
		                            }
	                           ]
	                },
	                {
	                    xtype: 'navigationview',
	                    id:'idSearchListNavView',
	                    navigationBar: false,
	                    items: [
	                            {
	                                xtype:'list',
	                                onItemDisclosure:true,
	                                loadingText: "Searching ...",
	                                emptyText: "<div class=\"empty-text\">No Places Found.</div>",
	                                id:'idSearchNavList',
	                                store:'searchListStore',
	                                itemTpl:'<div class="clsPlaceImage"><img class="clsImg" src="{icon}" alt="ICON" /></div><div class="clsPlaceName"><span class="clsName">{name}</span><br/><span class="clsAddr">{vicinity}</span></div><div class="clsPlaceRating">'+
	                                /*'<tpl if="rating == undefined"><span>{rating}</span></tpl>'+
	                                '<tpl if="rating != undefined"><span class="stars">{rating}</span></tpl>'+*/
	                                '</div>',
	                            },
	                        ],  
	                }
          ]
    }
});
