export var func = {

	getParameterByName: function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},

	removeURLParameter: function(url, parameter) {
		var urlparts = url.split('?');
		if (urlparts.length >= 2) {
			var prefix = encodeURIComponent(parameter) + '=';
			var pars = urlparts[1].split(/[&;]/g);
			for (var i = pars.length; i-- > 0;) {
				if (pars[i].lastIndexOf(prefix, 0) !== -1) {
					pars.splice(i, 1);
				}
			}
			url = urlparts[0] + '?' + pars.join('&');
			return url;
		} else {
			return url;
		}
	},

	preload: function(arrayOfImages) {
		$(arrayOfImages).each(function() {
			$('<img/>')[0].src = this;
		});
	},

	setCookie: function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + '; ' + expires;
	},

	getCookie: function(cname) {
		var name = cname + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return '';
	}

}

export function sendEvent(category, action, label) {

	if (typeof(gtag) != 'undefined') {

		gtag('event', action, {
			'event_category' : category,
			'event_label' : label
		});

		echo('event: ' + category + ', ' + action + ', ' + label);
		
	}

}

export function sendEventRdr(category, action, label, link) {

	if (typeof(gtag) != 'undefined') {

		gtag('event', action, {
			'event_category' : category,
			'event_label' : label
		});

		echo('event: ' + category + ', ' + action + ', ' + label + ', ' + link);
		
	}

	setTimeout(function() {
		top.location.href = link;
	}, 100);

}

export function sendPage(page, title) {

	if (typeof(gtag) != 'undefined') {

		gtag('config', 'UA-15575589-2', {
			// 'page_title' : title,
			'page_path': page
		});

		echo('pageview: ' + page/* + ', ' + title*/);

	}

}

export function echo(msg) { console.log(msg); }
