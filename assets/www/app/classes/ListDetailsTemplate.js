Ext.define('Navigator.classes.ListDetailsTemplate', {
    statics: {
        /*
        * A template for rendering a details of a place.
        */
    //startDate: vmlabs.classes.utils.ConvertJsonDateToDDMMYYFormat('{StartDate}'),
    //endDate: vmlabs.classes.utils.ConvertJsonDateToDDMMYYFormat('{EndDate}'),
    listDetails: Ext.create('Ext.XTemplate',
    		'<div class="clsDivWrapper">',
    		'<tpl for="steps">',
            	'<div class="clsContentWrapper"><div class="clsDirections">{html_instructions}</div><div class="clsDistance">{distance.text}</div></div>',
            '</tpl><br/>',
            '</div>'
         )
    }
});