Ext.define("Navigator.store.SearchListDetailsStore", {
    extend: "Ext.data.Store",
    config: {
        //model: "Navigator.model.SearchListDetailsModel",
    	model: "Navigator.model.SearchListDetailsModel",
        storeId:'searchListDetailsStore',
        proxy: {
            type: 'ajax',
            url: Navigator.app.baseGoogleDirectionsAPIUrl+'json?'+Navigator.app.dirQuery,
            reader: {
                type: 'json',
                rootProperty: 'routes[0].legs[0]'
            }
        }
    }
});