window.onload = function() {
	links = document.getElementsByTagName("a");
	
	for(var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", prevent);
	}
	
	valikko = document.getElementById("eka_valikko");
	valikko.addEventListener("click", hide1);
	
	//Toka on valikko
	edellinen_toka = document.getElementById("toka_edellinen");
	edellinen_toka.addEventListener("click", hide1);
	
	hackmikkeli = document.getElementById("eka_hackmikkeli");
	hackmikkeli.addEventListener("click", show_hackmikkeli);
	
	//Kolmas on tapahtumanäkymä
	kolmas_edellinen = document.getElementById("kolmas_edellinen");
	kolmas_edellinen.addEventListener("click", hide2);
	
	tapahtumat = document.getElementById("eka_tapahtumat");
	tapahtumat.addEventListener("click", hide3);
	
	kmarket = document.getElementById("KMarket");
	kmarket.addEventListener("click", open_KMarket);
	
	hack_prev = document.getElementById("hackmikkeli_edellinen");
	hack_prev.addEventListener("click", openEvents);
	
	close_services = document.getElementById("lahipalvelut");
	close_services.addEventListener("click", openMap);
	
	messages = document.getElementById("ilmoitukset");
	messages.addEventListener("click", openMessages);
	
	hackathon_tappi = document.getElementById("hackathon_tappi");
	hackathon_tappi.addEventListener("click", show_hackmikkeli);
	
	hackmikkeli_prev_map = document.getElementById("takaisin_karttaan_hackmik");
	hackmikkeli_prev_map.addEventListener("click", openMap);
}

function prevent(event) {
	event.preventDefault();
}

/**
 * Valikkoa tai edellinen_toka klikattaessa (eli valikon edellinen)
 */
function hide1(event) {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("toka_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	
	itemsToHide[6] = document.getElementById("lahipalvelut");
	itemsToHide[7] = document.getElementById("ilmoitukset");
	itemsToHide[8] = document.getElementById("kolmas_edellinen");
	
	itemsToHide[9] = document.getElementById("hackathon_tappi");
	
	if (itemsToHide[4].className === "hidden") {
		itemsToHide[4].className = "link5"
	}
	
	if (itemsToHide[0].className === "hidden" 
		&& itemsToHide[8].className !== "hidden") {
		//Vahda tausta ykköseen
		document.getElementById("bg").className = "palvelut";
		itemsToHide[0].className = "link3";	
		//Ei linkkiä palveluihin itemsToHide[1].className = "link1";	
		//Ei kosketa hackmikkeliin itemsToHide[2].className = "link4";	
		itemsToHide[3].className = "link2";
		itemsToHide[4].className = "hidden";
		itemsToHide[5].className = "link_Kesimerkki"
		itemsToHide[6].className = "hidden";
		itemsToHide[7].className = "hidden";
		itemsToHide[9].className = "hidden";
	}
	else if (itemsToHide[7].className !== "hidden") {
		//Vahda tausta ykköseen
		document.getElementById("bg").className = "palvelut";
		itemsToHide[0].className = "link3";	
		//Ei linkkiä palveluihin itemsToHide[1].className = "link1";	
		//Ei kosketa hackmikkeliin itemsToHide[2].className = "link4";	
		itemsToHide[3].className = "link2";
		itemsToHide[4].className = "hidden";
		itemsToHide[5].className = "link_Kesimerkki"
		itemsToHide[6].className = "hidden";
		itemsToHide[7].className = "hidden";
		itemsToHide[9].className = "hidden";
	}
	else {
		//Vaihda tausta kakkoseen
		document.getElementById("bg").className = "menu";
		itemsToHide[0].className = "hidden";	
		//Ei linkkiä palveluihin itemsToHide[1].className = "hidden";	
		//EI laiteta hackmikkeliä itemsToHide[2].className = "hidden";	
		itemsToHide[3].className = "hidden";
		itemsToHide[5].className = "hidden";
		
		itemsToHide[6].className = "link_lahipalvelut";
		itemsToHide[7].className = "link_ilmoitukset";
		
		itemsToHide[9].className = "hidden";
	}
}
/**
 * Tapahtumaa tai kolmas_edellista klikattaessa (eli tapahtumat edellinen)
 */
function hide2(event) {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	
	if (itemsToHide[4].className === "hidden") {
		itemsToHide[4].className = "link6"
		itemsToHide[5].className = "hidden"
	}
	
	if (itemsToHide[0].className === "hidden") {
		//Vahda tausta ykköseen
		document.getElementById("bg").className = "palvelut";
		itemsToHide[0].className = "link3";	
		itemsToHide[1].className = "hidden";	
		itemsToHide[2].className = "hidden";	
		itemsToHide[3].className = "link2";
		itemsToHide[4].className = "hidden"
		itemsToHide[5].className = "link_Kesimerkki"
	}
	else {
		//Vaihda tausta kolmoseen(tapahtumiin)
		itemsToHide[0].className = "hidden";	
		itemsToHide[1].className = "hidden";	
		itemsToHide[2].className = "hidden";	
		itemsToHide[3].className = "hidden";
	}
}

/**
 * Tapahtumaa klikattaessa
 */
function hide3(event) {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	
	if (itemsToHide[4].className === "hidden") {
		itemsToHide[4].className = "link6";
	}
	
	if (itemsToHide[0].className === "hidden") {
		//Vahda tausta ykköseen
		itemsToHide[0].className = "link3";	
		itemsToHide[1].className = "link1";	
		itemsToHide[2].className = "link4";	
		itemsToHide[3].className = "link2";
		itemsToHide[4].className = "hidden";
	}
	else {
		//Vaihda tausta kolmoseen (tapahtumiin)
		document.getElementById("bg").className = "tapahtumat";
		itemsToHide[0].className = "hidden";	
		itemsToHide[1].className = "hidden";	
		itemsToHide[2].className = "link4";	
		itemsToHide[3].className = "hidden";
		itemsToHide[5].className = "hidden"
	}
}

function show_hackmikkeli() {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	itemsToHide[6] = document.getElementById("hackmikkeli_edellinen");
	
	itemsToHide[7] = document.getElementById("hackathon_tappi");
	itemsToHide[7] = document.getElementById("hackathon_tappi");
	
	itemsToHide[8] = document.getElementById("takaisin_karttaan_hackmik");
	
	document.getElementById("bg").className = "hackmikkeli";
	
	itemsToHide[4].className = "hidden";
	itemsToHide[2].className = "hidden";
	itemsToHide[6].className = "link_hackmikkeli_prev";
	
	if (itemsToHide[7].className !== "hidden") {
		itemsToHide[7].className = "hidden";
		itemsToHide[3].className = "hidden";
		itemsToHide[6].className = "hidden";
		
		itemsToHide[8].className = "link_hackmikkeli_prevmap";
	}
}

function open_KMarket() {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	itemsToHide[6] = document.getElementById("hackmikkeli_edellinen");
	
	document.getElementById("bg").className = "kesim";
	
	itemsToHide[4].className = "link_hackmikkeli_prev";
	
	itemsToHide[3].className = "hidden";
	itemsToHide[0].className = "hidden";
	itemsToHide[5].className = "hidden";
}

function openEvents() {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	itemsToHide[6] = document.getElementById("hackmikkeli_edellinen");
	
	document.getElementById("bg").className = "tapahtumat";
	
	itemsToHide[6].className = "hidden";
	
	//itemsToHide[0].className = "link3";	
	//itemsToHide[1].className = "link1";	
	itemsToHide[2].className = "link4";	
	//itemsToHide[3].className = "link2";
	itemsToHide[4].className = "link6";
}

function openMap() {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	itemsToHide[6] = document.getElementById("hackmikkeli_edellinen");
	
	itemsToHide[7] = document.getElementById("lahipalvelut");
	itemsToHide[8] = document.getElementById("ilmoitukset");
	itemsToHide[9] = document.getElementById("toka_edellinen");
	
	itemsToHide[10] = document.getElementById("hackathon_tappi");
	
	itemsToHide[11] = document.getElementById("takaisin_karttaan_hackmik");
	
	document.getElementById("bg").className = "map";
	
	itemsToHide[9].className = "hidden";
	itemsToHide[7].className = "hidden";
	itemsToHide[8].className = "hidden";
	itemsToHide[11].className = "hidden";
	
	itemsToHide[3].className = "link_map_back"
	itemsToHide[10].className = "link_hackmikkeli_tappi";
}

function openMessages() {
	itemsToHide = [];
	itemsToHide[0] = document.getElementById("eka_tapahtumat");
	itemsToHide[1] = document.getElementById("eka_palvelut");
	itemsToHide[2] = document.getElementById("eka_hackmikkeli");
	itemsToHide[3] = document.getElementById("eka_valikko");
	
	itemsToHide[4] = document.getElementById("kolmas_edellinen");
	itemsToHide[5] = document.getElementById("KMarket");
	itemsToHide[6] = document.getElementById("hackmikkeli_edellinen");
	
	itemsToHide[7] = document.getElementById("lahipalvelut");
	itemsToHide[8] = document.getElementById("ilmoitukset");
	itemsToHide[9] = document.getElementById("toka_edellinen");
	
	
	
	document.getElementById("bg").className = "ilmoitukset";
	
	itemsToHide[9].className = "hidden";
	itemsToHide[7].className = "hidden";
	itemsToHide[8].className = "hidden";
	
	itemsToHide[3].className = "link_messages_back"
	
}