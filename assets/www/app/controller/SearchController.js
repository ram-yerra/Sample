Ext.define('Navigator.controller.SearchController',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			idSearch:'search',
		},
		control:{
			'button[action=searchPlaces]' : {tap:'searchPlaces'},
			'button[action=goToHome]' : {tap:'goToHome'}
		}
	},
	searchPlaces:function(button, e, options){
		var lat,lng;
		var msg = new Ext.MessageBox();
		var form =  this.getIdSearch();
		var values = form.getValues();
		var errMsg = '';
		if(values.location == ""){
            errMsg+='Please enter location to search';
            msg.show({
                title: 'SEARCH ERROR',
                message: errMsg,
                ui:'light',
                cls: 'vm_error',
                showAnimation: 'fadeIn',
                hideAnimation: 'fadeOut',
                buttons: [{text:'OK',itemId:'ok'}],
                fn:function(){
                    Ext.emptyFn();
                }
            });
        }
		else{
			form.setMasked({
	            xtype:'loadmask',
	            message:'Loading...'
	        });
			var geoQuery = "address="+values.location+"&sensor=false";
			Ext.Ajax.request({
	            url: Navigator.app.baseGoogleGeocodeAPIUrl+"json?"+geoQuery,
	            type:'json',
	            success:function(response){
	            	response = JSON.parse(response.responseText);
	            	lat = response.results[0].geometry.location.lat;
	            	lng = response.results[0].geometry.location.lng;
	            	if(values.sortBy == "distance"){
	            		Navigator.app.searchQuery = "location="+lat+","+lng+"&types="+values.type+"&rankby="+values.sortBy+"&sensor=false&key=AIzaSyDOfSbNjRUx0OJwLaeko-5leMe57PuN2nw";
	            	}
	            	else {
	            		Navigator.app.searchQuery = "location="+lat+","+lng+"&radius="+values.radius+"&types="+values.type+"&rankby="+values.sortBy+"&sensor=false&key=AIzaSyDOfSbNjRUx0OJwLaeko-5leMe57PuN2nw";
	            	}
            		var searchListStore = Ext.getStore('searchListStore'); 
            		searchListStore.getProxy().setUrl(Navigator.app.baseGooglePlacesAPIUrl+"json?"+Navigator.app.searchQuery);
            		searchListStore.load();
            		Ext.getCmp('idMain').setActiveItem(2,{type:'slide',direction:'right'});
            		form.unmask();
	            },
	            failure:function(){
	            	console.log('Failed to get lat lng');
	            	form.unmask();
	            }
	        });
		}
	},
	
	goToHome : function(){
		Ext.getCmp('idMain').setActiveItem(0,{type:'slide',direction:'left'});
	}	
});
