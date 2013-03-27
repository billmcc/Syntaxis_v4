
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var subSectionEvent = {};	// @dataSource
	var sectionEvent = {};	// @dataSource
	var dataGrid4 = {};	// @dataGrid
	var button3 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	subSectionEvent.onCurrentElementChange = function subSectionEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		sources.resource.query('subSectionID = :1' , sources.subSection.ID);
	};// @lock

	sectionEvent.onCurrentElementChange = function sectionEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		
		sources.subSection.query('sectionID = :1' , sources.section.ID);
	};// @lock

	dataGrid4.onCellClick = function dataGrid4_onCellClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$('#container4').html(ds.Resource.embedLink);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		resources.cancel();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("subSection", "onCurrentElementChange", subSectionEvent.onCurrentElementChange, "WAF");
	WAF.addListener("section", "onCurrentElementChange", sectionEvent.onCurrentElementChange, "WAF");
	WAF.addListener("dataGrid4", "onCellClick", dataGrid4.onCellClick, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
