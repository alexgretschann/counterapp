Ext.define('counter.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Counter',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                html: [
                    "Counter App erlaubt dir Dinge zu zahlen. </br> +1 oder -1. "
                ].join("")
            }
        ]
    }
});