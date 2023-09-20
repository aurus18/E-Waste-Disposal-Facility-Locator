var map;

function initMap1() {
    map = new mappls.Map('map', {
        center: [28.61, 77.23],
        zoomControl: true,
        location: true
    });
}

function displayMarkers() {
    var locationInput = document.getElementById('locationInput').value.toLowerCase();
    var locations = getCoordinatesForLocation(locationInput);

    if (!locations) {
        alert('Unknown location.');
        return;
    }

    var geoData = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < locations.length; i++) {
        var coordinates = locations[i].coordinates;
        geoData.features.push({
            "type": "Feature",
            "properties": {
                "htmlPopup": locations[i].name
            },
            "geometry": {
                "type": "Point",
                "coordinates": coordinates
            }
        });
        var infoWindowContent;

        switch (true) {
            case coordinates[0] === 22.589181426104826 && coordinates[1] === 88.39245970922443:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">J S Pigments Pvt Ltd</h2>" + "<p>(Battery Deposits, laptop/computer components recycling)</p>" +
                    "<p>TP-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan,<br> Kankurgachi, Kolkata, West Bengal 700054.</p>" + "<img style=\"width: 200px;height: 100px;\" src=\"JS_private.png\">";
                break;

            case coordinates[0] === 22.462596264613932 && coordinates[1] === 88.17170173306356:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">OLD N FURNITURE</h2>" + "(Battery Deposits)" +
                    "<p>Canal S Rd, Beleghata, Kolkata, West Bengal 700015.</p></div>" + "<img style=\"width: 200px;height: 100px;\" src=\"old_n_furniture.png\">" ;
                break;

            // Add more cases for other coordinates as needed
            case coordinates[0] === 22.559499368901772 && coordinates[1] === 88.39641532512832:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">RCC Institute of Information Technology</h2>" +
                    "(Recycles laptop/computer parts <br> [visit old bhilding for contact])" + "<p>K. P. Mondal Road Vill. Abhirampur Purba Para Post Office:, <br /> near Maa Tara Rice Mill,Budge Budge, Kolkata,</br> West Bengal 700137.</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"rcciit.jpeg\">" ;
                break;

            default:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Default Info Window</h2>" +
                    "<p>This is the default content.</p></div>";
        }

        var window = new mappls.InfoWindow({
            map: map,
            content: infoWindowContent,
            position: {
                lat: coordinates[0],
                lng: coordinates[1]
            }
        });

    }


    var marker = mappls.Marker({
        map: map,
        position: geoData,
        icon_url: 'https://apis.mapmyindia.com/map_v3/1.png',
        fitbounds: true,
        clusters: false,
        fitboundOptions: {
            padding: 120,
            duration: 1000
        },
        popupOptions: {
            offset: {
                'bottom': [0, -20]
            }
        }
    });
}

function getCoordinatesForLocation(location) {
    switch (location.toLowerCase()) {
        case 'battery':
            return [
                { name: 'J S Pigments Pvt Ltd', coordinates: [22.589181426104826, 88.39245970922443] },
                { name: 'OLD N FURNITURE', coordinates: [22.462596264613932, 88.17170173306356] }
            ];
        case 'laptop' || 'computer':
            return [
                { name: 'J S Pigments Pvt Ltd', coordinates: [22.589181426104826, 88.39245970922443] },
                { name: 'RCC Institute of Information Technology', coordinates: [22.559499368901772, 88.39641532512832] }
            ];
        case 'kolkata':
            return [
                { name: 'J S Pigments Pvt Ltd', coordinates: [22.589181426104826, 88.39245970922443] },
                { name: 'OLD N FURNITURE', coordinates: [22.462596264613932, 88.17170173306356] },
                { name: 'RCC Institute of Information Technology', coordinates: [22.559499368901772, 88.39641532512832] }
            ];
        case 'haryana':
            return [
                { name: 'AMN Ewaste Management Pvt Ltd', coordinates: [28.308928215791585, 77.3063966099302] },
                { name: 'Ewaste Solutions', coordinates: [28.36206355962476, 77.31949803876768] }
            ];
        case 'delhi':
            return [
                { name: 'Techchef Ewaste Solutions Pvt Ltd', coordinates: [28.52772372135821, 77.27481222528023] }
            ];
        case 'kerala':
            return [
                { name: 'Kerala Enviro Infrastructure Limited', coordinates: [9.982312252820025, 76.36289606726847] }
            ];
        case 'orissa':
            return [
                { name: 'M/s Jagannath Traders', coordinates: [22.388137443242538, 84.60594628094485] },
                { name: 'Cosmic Net', coordinates: [20.29007695891573, 85.84471270973721] },
                { name: 'ECOKART TECHNOLOGY PRIVATE LIMITED', coordinates: [20.297519340225904, 85.87140625409613] }
            ];
        default:
            return null;
    }
}