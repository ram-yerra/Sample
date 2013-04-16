Ext.define("Navigator.model.SearchListDetailsModel", {
    extend: "Ext.data.Model",
    config: {
        fields: ['steps','duration','distance','start_location','end_location','start_address','end_address'],
    }
});