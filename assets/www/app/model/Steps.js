Ext.define("Navigator.model.Steps", {
    extend: "Ext.data.Model",
    config: {
        fields: ['travel_mode','start_location','end_location','polyline','duration','html_instructions','distance'],
        belongsTo: 'Navigator.model.SearchListDetailsModel'
    }
});