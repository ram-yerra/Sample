Ext.define('Navigator.controller.SearchListController',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			idSearchList:'searchList',
			navSearchList:'#idSearchListNavView',
			idSearchListDetails:'searchListDetails',
			placeAddr:'#idPlaceAddress',
			viewTitle:'#idPlaceName',
			btnBack:'#idBtnBackToSearch'
		},
		control:{
			'#idSearchNavList' : {itemtap:'showSearchDetails'},
			'button[action=goToSearch]' : {tap:'goToSearch'},
			'button[action=goToSearchList]' : {tap:'goToSearchList'}
		}
	},
	showSearchDetails:function(list,index,target,record){
		var navSearchList = this.getNavSearchList();
		this.getViewTitle().setTitle(record.data.name);
		this.getBtnBack().config.action = "goToSearchList";
		Navigator.app.dirQuery = "origin="+lat+","+lng+"&destination="+record.data.geometry.location.lat+","+record.data.geometry.location.lng+"&sensor=false";
		navSearchList.push({
            xtype: 'searchListDetails'
		});
		if(record.data.rating == undefined){
			record.data.rating = "Not Available";
		}
		this.getPlaceAddr().setHtml('<br><div class="dvContainer">'+
                '<div class="dvNameWrapper"><div class="placeNameStyle">'+record.data.name+'</div>'+
                '<div class="placeAddrStyle">'+record.data.vicinity+'</div></div>'+
                '<div class="dvRatingWrapper"> Rating : '+record.data.rating+'</div>'+
                '</div><br>');
		var searchListDetailsStore = Ext.getStore('searchListDetailsStore'); 
		searchListDetailsStore.getProxy().setUrl(Navigator.app.baseGoogleDirectionsAPIUrl+"json?"+Navigator.app.dirQuery);
		searchListDetailsStore.load();
	},
	goToSearch : function(){
		var navSearchList = this.getNavSearchList();
		navSearchList.pop();
		this.getViewTitle().setTitle("Search List");
		this.getBtnBack().config.action = "goToSearch";
		Ext.getCmp('idMain').setActiveItem(1,{type:'slide',direction:'left'});
	},
	goToSearchList : function(){
		var navSearchList = this.getNavSearchList();
		this.getViewTitle().setTitle("Search List");
		this.getBtnBack().config.action = "goToSearch";
		navSearchList.pop();
	},
    init:function(){
		console.log('Inside Search List Controller Init');
		if(Ext.os.name != "Windows"){
			document.addEventListener("deviceready",onDeviceReady,true);	
		}
		else{
			onDeviceReady();
			console.log('Write Something');
		}
	}
});

var lat, lng;
var geoLocationOptions = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

function onDeviceReady(){
	console.log('deviceready');
	navigator.geolocation.getCurrentPosition(geoLocationSuccess,geoLocationError,geoLocationOptions);
}

function geoLocationSuccess(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("Geolocation","Latitude:"+ lat +", Longitude:"+ lng); 
}

function geoLocationError() {
	console.log('Error','Error while getting geolocation');
}
