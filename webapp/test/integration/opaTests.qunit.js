/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["newproject/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
