Ext.application({
	//Navigator App Name Space
	name:"Navigator",
	models:["SearchListModel","SearchListDetailsModel","Steps"],
	views:["Main","Dashboard","Search","SearchList","SearchListDetails"],
	controllers:["DashboardController","SearchController","SearchListController","SearchListDetailsController"],
	stores:["SearchListStore","SearchListDetailsStore"],
	//Global Variables
	baseGoogleGeocodeAPIUrl:'http://maps.googleapis.com/maps/api/geocode/',
	baseGooglePlacesAPIUrl:'https://maps.googleapis.com/maps/api/place/nearbysearch/',
	baseGoogleDirectionsAPIUrl:'http://maps.googleapis.com/maps/api/directions/',
	searchQuery:'',
	dirQuery:'',
	launch : function(){
		Ext.fly('appLoadingIndicator').destroy();
		window.localStorage.setItem('locationFlag',0);
		var mainPageView = {
				xtype:"mainView"
		};
		Ext.Viewport.add([mainPageView]);
	}
});