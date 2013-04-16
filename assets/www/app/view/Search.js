Ext.define('Navigator.view.Search',{
	extend:'Ext.form.Panel',
	id:'idSearch',
	xtype:'search',
	config:{
		iconCls:'search',
		title:'Search',
		cls:'clsSearch',
		scrollable:'vertical',
		items:[
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
		                            {   xtype: 'title' ,
		                                title:"Search",  
		                            },
		                            {xtype: 'spacer'}
	                           ]
	               },
	               {
			    	   xtype:'textfield',
			    	   label:'Enter Location',
			    	   name:'location',
			    	   labelWidth:'35%',
			    	   id:'idSearchLocation',
			    	   cls:'clsSearchLocation'
			       },
			       {
		       			xtype:'selectfield',
		       			label:'Radius',
		       			name:'radius',
		       			labelWidth:'35%',
		       			id:'idSearchRadius',
		       			cls:'clsSearchRadius',
		       			options: [
									{
										text: '1 Km',
										value: '1000',
									},
									{
										text: '2.5 Km',
										value: '2500',
									},
									{
										text: '5 Km',
										value: '5000',
									},
									{
										text: '10 Km',
										value: '10000',
									},
									{
										text: '15 Km',
										value: '15000',
									},
									{
										text: '20 Km',
										value: '20000',
									}
								]
		       		},
				    {
		       			xtype:'selectfield',
		       			label:'Type',
		       			name:'type',
		       			labelWidth:'35%',
		       			id:'idSearchType',
		       			cls:'clsSearchType',
		       			options: [
									{
										text: 'Restaurant',
										value: 'restaurant',
									},
									{
										text: 'Bar',
										value: 'bar',
									},
									{
										text: 'ATM',
										value: 'atm',
									},
									{
										text: 'Gas Station',
										value: 'gas_station',
									},
									{
										text: 'Liquor Store',
										value: 'liquor_store',
									},
									{
										text: 'Movie Theater',
										value: 'movie_theater',
									}
								]
		       		},
		       		{
		       			xtype:'selectfield',
		       			label:'Sort By',
		       			name:'sortBy',
		       			labelWidth:'35%',
		       			id:'idSearchSortBy',
		       			cls:'clsSearchSortBy',
		       			options: [
									{
										text: 'Distance',
										value: 'distance',
									},
									{
										text: 'Prominence',
										value: 'prominence',
									}
								]
		       		},
		       		{
						xtype:'button',
						text:'Search',
						id:'idSearchPlaces',
						cls:'clsSearchPlaces',
						width:'50%',
						ui:'confirm',
						action:'searchPlaces'
					}
		      ]
	},
	initialize:function(){
		this.down('#idSearchLocation').setValue('koramangala');
	}
	
});