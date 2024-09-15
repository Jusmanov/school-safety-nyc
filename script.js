var map = L.map("map").setView([40.7729, -73.9712], 12);

var CartoDB_DarkMatter = L.tileLayer(
	"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
	{
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: "abcd",
		maxZoom: 20,
	},
).addTo(map);

var obj;
var lats = [];
var lons = [];
var crimesTotal = [];
var schoolName = "";
var comprehensive = [];

function nycApi(geo) {
	for (var i = 0; i < geo.length; i++) {
		lats.push(geo[i].latitude);
		lons.push(geo[i].longitude);
		crimesTotal.push(
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
		);
		schoolName = geo[i].schools_in_building;
		comprehensive.push([
			geo[i].latitude,
			geo[i].longitude,
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
			geo[i].schools_in_building,
		]);
	}

	for (var i = 0; i < comprehensive.length; i++) {
		if (comprehensive[i][2] <= 5) {
			console.log("Cerulean Blue point mapped");
			var circle2 = L.circle([comprehensive[i][0], comprehensive[i][1]], {
				color: "#08AEE0",
				fillColor: "#08AEE0",
				fillOpacity: 0.4,
				radius: 80,
			}).addTo(map);
			const popupContent = `<strong>${comprehensive[i][3]}</strong><br>${comprehensive[i][2]} total crimes`;
			circle2.bindPopup(popupContent);
		}
	}
}

function nycApi2(geo) {
	for (var i = 0; i < geo.length; i++) {
		lats.push(geo[i].latitude);
		lons.push(geo[i].longitude);
		crimesTotal.push(
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
		);
		schoolName = geo[i].schools_in_building;
		comprehensive.push([
			geo[i].latitude,
			geo[i].longitude,
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
			geo[i].schools_in_building,
		]);
	}

	for (var i = 0; i < comprehensive.length; i++) {
		if (comprehensive[i][2] > 5 && comprehensive[i][2] <= 15) {
			console.log("Pantone Yellow point mapped");
			var circle2 = L.circle([comprehensive[i][0], comprehensive[i][1]], {
				color: "#FFE32B",
				fillColor: "#FFE32B",
				fillOpacity: 0.4,
				radius: 80,
			}).addTo(map);
			const popupContent = `<strong>${comprehensive[i][3]}</strong><br>${comprehensive[i][2]} total crimes`;
			circle2.bindPopup(popupContent);
		}
	}
}

function nycApi3(geo) {
	for (var i = 0; i < geo.length; i++) {
		lats.push(geo[i].latitude);
		lons.push(geo[i].longitude);
		crimesTotal.push(
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
		);
		schoolName = geo[i].schools_in_building;
		comprehensive.push([
			geo[i].latitude,
			geo[i].longitude,
			Number(geo[i].major_n) + Number(geo[i].oth_n) + Number(geo[i].nocrim_n),
			geo[i].schools_in_building,
		]);
	}

	for (var i = 0; i < comprehensive.length; i++) {
		if (comprehensive[i][2] > 15) {
			console.log("Brink Pink point mapped");
			var circle2 = L.circle([comprehensive[i][0], comprehensive[i][1]], {
				color: "#fe4876",
				fillColor: "#fe4876",
				fillOpacity: 0.4,
				radius: 80,
			}).addTo(map);
			const popupContent = `<strong>${comprehensive[i][3]}</strong><br>${comprehensive[i][2]} total crimes`;
			circle2.bindPopup(popupContent);
		}
	}
}

fetch("https://data.cityofnewyork.us/resource/qybk-bjjc.json")
	.then((data) => data.json())
	.then((geo) => nycApi(geo));

fetch("https://data.cityofnewyork.us/resource/qybk-bjjc.json")
	.then((data) => data.json())
	.then((geo) => nycApi2(geo));

fetch("https://data.cityofnewyork.us/resource/qybk-bjjc.json")
	.then((data) => data.json())
	.then((geo) => nycApi3(geo));
