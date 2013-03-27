
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Load the combo popup
	
		
		if(WAF.directory.currentUser() == null) {
		
			$$('main').loadComponent('/components/public.waComponent');
		} else {
		
			$$('main').loadComponent('/components/app.waComponent');
		}
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = '/admin';
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		window.location = '/admin';
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
