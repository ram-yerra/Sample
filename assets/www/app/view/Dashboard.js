Ext.define("Navigator.view.Dashboard", {
    extend:'Ext.Container',
    id:'idDashboard',
    xtype: 'dashboard',
    config: {
    	iconCls:'home',
    	title:'Dashboard',
    	layout:'fit',
    	items: [
                {
                    xtype:'panel',
                    layout: 'vbox',
                    scrollable:true,
                    cls:'clsDashboardPanel',
                    items : [
	          	                {
	        	                    xtype:'toolbar',
	        	                    docked:'top',
	        	                    ui:'light',
	        	                    items: [
	        		                            {xtype: 'spacer'},
	        		                            {   
	        		                            	xtype: 'title' ,
	        		                                title:"Navigator",  
	        		                            },
	        		                            {xtype: 'spacer'},
	        	                           ]
	        	                },
                                {
                                    xtype: 'panel',
                                    cls:'clsTopPanel',
                                    id:'idTopPanel',
                                    layout: {
                                        type: 'hbox',
                                    },
                                    items: [
	                                            { 
	                                                xtype: 'button',
	                                                cls: 'btnDashboard',
	                                                html: '<div class="image"><img class="imgStyle" alt="SEARCH" src="images/Search.png" align="center"></div><div class="title">Search</div>',
	                                                width:'50%',
	                                                action:'goToSearch'
	                                            },
	                                            { 
	                                                xtype: 'button',
	                                                cls: 'btnDashboard',
	                                                html: '<div class="image"><img class="imgStyle" alt="NEARBY" src="images/nearby.png"></div><div class="title">Nearby</div>',
	                                                width:'50%',
	                                                action:'goToNearby'
	                                            },
                                            ],
                                },
                                {
                                    xtype: 'panel',
                                    cls:'clsBottomPanel',
                                    id:'idBottomPanel',
                                    layout: 'hbox',
                                    items: [
												{ 
												    xtype: 'button',
												    cls: 'btnDashboard',
												    html: '<div class="image"><img class="imgStyle" alt="FAVOURITES" src="images/star_full.png"></div><div class="title">Favourites</div>',
												    width:'50%',
												    action:'goToFavourites'
												},
	                                            { 
	                                                xtype: 'button',
	                                                cls: 'btnDashboard',
	                                                html: '<div class="image"><img class="imgStyle" alt="ABOUT" src="images/info.png"></div><div class="title">About</div>',
	                                                width:'50%',
	                                                action:'goToAbout'
	                                            }
                                            ],
                                },
                        ]
                        
                },
           ]
    }
});

