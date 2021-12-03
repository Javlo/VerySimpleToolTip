function tooltips(elem) {
	if (!elem.classList.contains("_tooltips_containier")) {
		elem.classList.add("_tooltips_containier");
		var tt = document.createElement("span");		
		tt.classList.add("_tooltips");
		tt.innerHTML = elem.getAttribute('title');
		if (elem.getAttribute("aria-label") == null) {
			elem.setAttribute("aria-label", elem.getAttribute('title'));			
		}
		elem.removeAttribute("title");
		elem.appendChild(tt);
	}
}