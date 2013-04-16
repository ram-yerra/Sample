Ext.define("Navigator.store.SearchListStore", {
    extend: "Ext.data.Store",
    config: {
        model: "Navigator.model.SearchListModel",
        storeId:'searchListStore',
        proxy: {
            type: 'ajax',
            url: Navigator.app.baseGooglePlacesAPIUrl+'json?'+Navigator.app.searchQuery,
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});