// Import React and Remix packages
import React, { useEffect, useRef, useState } from "react";
import { Links } from "@remix-run/react";
import { Helmet } from 'react-helmet';
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Import Components
import SimpleClickControl from "../components/map/click/SimpleClickControl.jsx";

// Import Mapbox
import mapboxgl from "mapbox-gl";

// Import CSS
import controlStyles from "../components/map/click/styles.css?url";

// Load Mapbox Data
export async function loader() {
    const locations = [
        {
            coordinates: [23.740032943439388, 37.939448602005044],
            name: "Mall"
        },
        {
            coordinates: [23.750032943439388, 37.929448602005044],
            name: "Home"
        },
        {
            coordinates: [23.74176541352466, 37.92757523914288],
            name: "School"
        }
    ];
    return json({ 'MAPBOX_TOKEN': process.env.MAPBOX_TOKEN, 'locations': locations });
};

// Load the CSS
export const links = () => {
    return [
        { rel: "stylesheet", href: "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css?url" },
        { rel: "stylesheet", href: controlStyles },
    ];
};

export default function loadMap() {
    // Get the loader data
    const loaderData = useLoaderData();
    mapboxgl.accessToken = loaderData.MAPBOX_TOKEN;
    const mapContainer = useRef();
    const coords = loaderData.locations;

    // Set the current location index
    var currentMarker;
    var currentPopup;

    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

    // Show the location
    function showLocation (map, locationIndex) {
        const location = coords[locationIndex]
        map.flyTo({
            center: location.coordinates,
            duration: 3000,
            zoom: 15,
        });
        currentMarker.setLngLat(location.coordinates);
        currentPopup.setLngLat(location.coordinates);
        currentPopup.setHTML(`<p>${location.name}</p>`);
    };
    
    // Show the next location
    function showNextLocation (map) {
        setCurrentLocationIndex(prevIndex => {
            if (prevIndex === coords.length - 1) {
                showLocation(map, 0);
                return 0;
            }
            showLocation(map, prevIndex + 1);
            return prevIndex + 1;
        });
    };
    
    // Show the previous location
    function showPreviousLocation (map) {
        setCurrentLocationIndex(prevIndex => {
            if (prevIndex === 0) {
                showLocation(map, coords.length - 1);
                return coords.length - 1;
            }
            showLocation(map, prevIndex - 1);
            return prevIndex - 1;
        });
    };

    useEffect(() => {
        // Create the map
        const map = new mapboxgl.Map({
            container: mapContainer.current ,
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [coords[0].coordinates[0], coords[0].coordinates[1]],
            zoom: 15,
        });

        // Add the navigation control
        currentMarker = new mapboxgl.Marker()
            .setLngLat(coords[0].coordinates)
            .addTo(map);

        currentPopup = new mapboxgl.Popup({ offset: 25 })
            .setLngLat(coords[0].coordinates)
            .setHTML(`<p>${coords[0].name}</p>`)
            .addTo(map);
          
        // Modify navigation control
        const nextButtonOptions = {
            divClassName: 'mapboxgl-ctrl mapboxgl-ctrl-group',
            className: 'mapboxgl-ctrl-icon mapboxgl-ctrl-nextloc',
            callback: () => showNextLocation(map),
            scale: 1.5,
        };

        const precButtonOptions = {
            divClassName: 'mapboxgl-ctrl mapboxgl-ctrl-group',
            className: 'mapboxgl-ctrl-icon mapboxgl-ctrl-prevloc',
            callback: () => showPreviousLocation(map),
            scale: 1.5,
        };
        
        // Load the navigation control
        const nextButton = new SimpleClickControl(nextButtonOptions);
        map.addControl(nextButton, 'top-right');
        const prevButton = new SimpleClickControl(precButtonOptions);
        map.addControl(prevButton, 'top-right');
          

        return() => map.remove()
    }, []);

    // Return the map container
    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
}