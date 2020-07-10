mode = 1
ua = "Mozilla/5.0 (Linux; Android 9; LLD-L31) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.92 Mobile Safari/537.36"

function setUaMode(m) {
	mode = m
}

function rewriteUserAgentHeader(e) {
	if (mode == 0) {
  
		for (var header of e.requestHeaders) {
			if (header.name.toLowerCase() === "user-agent") {
				header.value = ua;
			}
		}
		return {requestHeaders: e.requestHeaders};
	}
}

browser.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgentHeader,
{urls: ["<all_urls>"]}, ["blocking", "requestHeaders"]);
