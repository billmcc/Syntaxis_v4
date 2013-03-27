
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var login2 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		window.location = '/index.html';
	};// @lock

	login2.logout = function login2_logout (event)// @startlock
	{// @endlock
		window.location = '/index.html';
	};// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		window.location = '/index.html';
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() = null){
			$$('main').loadComponent('app.waComponent');
		} else {
			$$('main').loadComponent('app.waComponent');
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("login2", "logout", login2.logout, "WAF");
	WAF.addListener("login2", "login", login2.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
