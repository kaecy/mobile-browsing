function checked(nodes) {
	var nNode = 0
	for (let node of nodes) {
		if (node.checked) {
			return nNode
		}
		nNode += 1
	}
}
addEventListener("DOMContentLoaded", function() {
	var backgroundPage = browser.extension.getBackgroundPage()
	var nodes = document.getElementsByName("mode")
	
	for (let node of nodes) {
		node.addEventListener("click", function(event) {
			var checkedNode = checked(document.getElementsByName("mode"))
			
			backgroundPage.setUaMode(checkedNode)
		})
	}
	
	
	nodes[backgroundPage.mode].checked = true
})
