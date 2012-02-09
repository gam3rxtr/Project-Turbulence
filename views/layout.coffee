doctype 5
html ->
	head ->
		meta charset: 'utf-8'
		meta name: 'viewport', content: 'width=device-width, initial-scale=1'
		meta name: 'robots', content: "noindex,nofollow"
		title if @title then @title + ' | turbulence &alpha;' else 'turbulence &alpha;'
		### link rel: 'stylesheet', href: '/css/app.css' ###
		script src: '//code.jquery.com/jquery.min.js'
body ->
	@body