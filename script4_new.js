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
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">J S Pigments Pvt Ltd</h2>" + "<p>(Battery Deposits,mobile/laptop/computer components recycling)</p>" +
                    "<p>TP-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan,<br> Kankurgachi, Kolkata, West Bengal 700054.</p>" + "<img style=\"width: 200px;height: 100px;\" src=\"JS_private.png\">";
                break;

            case coordinates[0] === 22.462596264613932 && coordinates[1] === 88.17170173306356:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">OLD N FURNITURE</h2>" + "Consumer Electronics and Appliances Recycling" +
                    "<p>K. P. Mondal Road Vill. Abhirampur Purba Para Post Office:, <br>near Maa Tara Rice Mill, Budge Budge, Kolkata, West Bengal 700137</p></div>" + "<img style=\"width: 200px;height: 100px;\" src=\"old_n_furniture.png\">";
                break;

            // Add more cases for other coordinates as needed
            case coordinates[0] === 22.559499368901772 && coordinates[1] === 88.39641532512832:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">RCC Institute of Information Technology</h2>" +
                    "(Battery Recycling <br> [visit old bhilding for contact])" + "<p>Canal S Rd, Beleghata, Kolkata, West Bengal 700015</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"rcciit.jpeg\">";
                break;
            case coordinates[0] === 28.308928215791585 && coordinates[1] === 77.3063966099302:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">AMN Ewaste Management Pvt Ltd</h2>" +
                    "(laptop/computer/consumer-electronics/appliances recycling)" + "<p>Plot no. 171, Sector 59, Faridabad, Haryana 121004.</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"AMN_Ewaste_Private_limted.png\">";
                break;
            case coordinates[0] === 28.36206355962476 && coordinates[1] === 77.31949803876768:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Ewaste Solutions</h2>" +
                    "(Battery recycling)" + "<p>plot no 1 A, Sector 6, Faridabad, Haryana 121006</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"E_Waste_Sol_Haryana.png\">";
                break;
            case coordinates[0] === 28.527836835773535  && coordinates[1] === 77.27497315781939:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Techchef Ewaste Solutions Pvt Ltd</h2>" +
                    "(Consumer-electronics/appliances/mobile recycling)" + "<p>TJ Block, Street Number 8, Chauhan Bangur, Delhi 110053</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"techchef.png\">";
                break;
            case coordinates[0] === 28.67668599856007  && coordinates[1] === 77.2595539816758:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Fozia Traders</h2>" +
                    "(Consumer-electronics/appliances recycling)" + "<p>Top Floor, C-61, DDA Sheds, Pocket A, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"fzia_traders.png\">";
                break;
            case coordinates[0] === 9.982312252820025 && coordinates[1] === 76.36289606726847:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Kerala Enviro Infrastructure Limited</h2>" +
                    "(battery/laptop/computer recycling)" + "<p>Common TSDF Project Indise FACT CD Campus, Ambalamedu, Kochi, Kerala 682303</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"kerala_environ_infra.png\">";
                break;
            case coordinates[0] === 20.29007695891573 && coordinates[1] === 85.84471270973721:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Cosmic Net</h2>" +
                    "(Mobile Recycling)" + "<p>Plot No- B-25, Sahid Nagar, Bhubaneswar, Odisha 751007</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"cosmic_net.png\">";
                break;
            case coordinates[0] === 20.297519340225904 && coordinates[1] === 85.87140625409613:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">ECOKART TECHNOLOGY PRIVATE LIMITED</h2>" +
                    "(Consumer-electronics/appliances/mobile recycling)" + "<p>No 630, 6th Floor, Esplanade One Mall, Rasulgarh, Bhubaneswar, Odisha 751010</p></div>" + "<img style=\"width: 200px;height: 250px;\" src=\"\" alt =\"image not provided by owner\">";
                break;
            default:
                infoWindowContent = "<div><h2 style=\"font: bold 16px arial helvetica\">Ylocation is currently not available</h2>" +
                    "<p>If you think this is wrong you can mail us the location coordinates and details</p></div>";
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
                { name: 'Kerala Enviro Infrastructure Limited', coordinates: [9.982312252820025, 76.36289606726847] },
                { name: 'Ewaste Solutions', coordinates: [28.36206355962476, 77.31949803876768] },
                { name: 'RCC Institute of Information Technology', coordinates: [22.559499368901772, 88.39641532512832] }
            ];
        case 'mobile':
            return [
                { name: 'J S Pigments Pvt Ltd', coordinates: [22.589181426104826, 88.39245970922443] },
                { name: 'Techchef Ewaste Solutions Pvt Ltd', coordinates: [28.527836835773535, 77.27497315781939] },
                { name: 'Cosmic Net', coordinates: [20.29007695891573, 85.84471270973721] },
                { name: 'ECOKART TECHNOLOGY PRIVATE LIMITED', coordinates: [20.297519340225904, 85.87140625409613] }
            ];
        case 'consumer-electronics':
            return [
                { name: 'Fozia Traders', coordinates: [28.67668599856007, 77.2595539816758] },
                { name: 'AMN Ewaste Management Pvt Ltd', coordinates: [28.308928215791585, 77.3063966099302] },
                { name: 'OLD N FURNITURE', coordinates: [22.462596264613932, 88.17170173306356] },
                { name: 'Techchef Ewaste Solutions Pvt Ltd', coordinates: [28.527836835773535, 77.27497315781939] },
                { name: 'ECOKART TECHNOLOGY PRIVATE LIMITED', coordinates: [20.297519340225904, 85.87140625409613] }
            ];
        case 'laptop':
            return [
                { name: 'J S Pigments Pvt Ltd', coordinates: [22.589181426104826, 88.39245970922443] },
                { name: 'RCC Institute of Information Technology', coordinates: [22.559499368901772, 88.39641532512832] },
                { name: 'AMN Ewaste Management Pvt Ltd', coordinates: [28.308928215791585, 77.3063966099302] },
                { name: 'Kerala Enviro Infrastructure Limited', coordinates: [9.982312252820025, 76.36289606726847] }
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
                { name: 'Techchef Ewaste Solutions Pvt Ltd', coordinates: [28.527836835773535, 77.27497315781939] },
                { name: 'Fozia Traders', coordinates: [28.67668599856007, 77.2595539816758] }
            ];
        case 'kerala':
            return [
                { name: 'Kerala Enviro Infrastructure Limited', coordinates: [9.982312252820025, 76.36289606726847] }
            ];
        case 'orissa':
            return [
                { name: 'Cosmic Net', coordinates: [20.29007695891573, 85.84471270973721] },
                { name: 'ECOKART TECHNOLOGY PRIVATE LIMITED', coordinates: [20.297519340225904, 85.87140625409613] }
            ];
        default:
            return null;
    }
}