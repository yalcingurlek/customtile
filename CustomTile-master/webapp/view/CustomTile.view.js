// Copyright (c) 2009-2014 SAP SE, All Rights Reserved

(function () {
	"use strict";
	/*global jQuery, sap */
	/*jslint nomen: true */

	sap.ui.jsview("view.CustomTile", {
		getControllerName: function () {
			return "view.CustomTile";
		},
		createContent: function (oController) {
			this.setHeight('100%');
			this.setWidth('100%');
		},
		getTileControl: function () {
			jQuery.sap.require('sap.m.GenericTile');
			var oController = this.getController();
			/*		var itemTemplate = new sap.m.StandardListItem({
						icon: "{Icon}",
						title: "{Naam}"
						{
									path: "/data/emp",
									template: itemTemplate
								}
					});*/
			return new sap.m.CustomTile({
				content: [new sap.m.VBox({
					items: [
						new sap.m.Slider({
							value: 30,
							width: "90%"
						}),
						new sap.m.Slider({
							value: 20,
							width: "90%"
						})

						/*new sap.m.List({
							headerText: '{/data/display_title_text}',
							width: "175px",
							items: [
								new sap.m.StandardListItem({
									description:"5 days",
									title: "Sick Leave"
								}),
								new sap.m.StandardListItem({
									description:"3 hours",
									title: "Early Leave"
								}),
								new sap.m.StandardListItem({
									description:"15 days",
									title: "Annual Leave"
								})
							]
						})*/
						/*	new sap.m.RatingIndicator({
								maxValue : 5,
								value : 4,
								iconSize : "32px",
								tooltip :"Rating Tooltip"
							})*/
					]
				})],
				press: [oController.onPress, oController]
			});
			// return new sap.m.VBox({
			// 	content: [new sap.m.Label({text:'{/data/display_title_text}'})],
			// 	press: [oController.onPress, oController]
			// });
			// return new sap.m.GenericTile({
			// 	header: '{/data/display_title_text} - {/data/ztest}',
			// 	subheader: '{/data/display_subtitle_text}',
			// 	size: "Auto",
			// 	tileContent: [new sap.m.TileContent({
			// 		size: "Auto",
			// 		footer: '{/data/display_info_text}',
			// 		unit: '{/data/display_number_unit}',
			// 		//We'll utilize NumericContent for the "Dynamic" content.
			// 		content: [
			// new sap.m.NumericContent({
			// 	scale: '{/data/display_number_factor}',
			// 	value: '{/data/display_number_value}',
			// 	truncateValueTo: 5, //Otherwise, The default value is 4.
			// 	indicator: '{/data/display_state_arrow}',
			// 	valueColor: '{/data/display_number_state}',
			// 	icon: '{/data/display_icon_url}',
			// 	width: '100%'
			// })
			// ]
			// 	})],
			// 	press: [oController.onPress, oController]
			// });
		},
		getLinkControl: function () {
			jQuery.sap.require('sap.m.Link');

			return new sap.m.Link({
				text: "{/config/display_title_text}",
				href: "{/nav/navigation_target_url}"
			});
		}
	});
}());