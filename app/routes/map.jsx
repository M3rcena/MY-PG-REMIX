import React, { useEffect, useRef, useState } from "react";

import { Links } from "@remix-run/react";

import { Helmet } from 'react-helmet';
import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import SimpleClickControl from "../components/map/click/SimpleClickControl";

import mapboxgl from "mapbox-gl";
import controlStyles from "../components/map/click/styles.css";

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

export const links = () => {
    return [
        { rel: "stylesheet", href: "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css" },
        { rel: "stylesheet", href: controlStyles },
    ];
};

export default function loadMap() {
    const loaderData = useLoaderData();
    mapboxgl.accessToken = loaderData.MAPBOX_TOKEN;
    const mapContainer = useRef();
    const coords = loaderData.locations;

    var currentMarker;
    var currentPopup;

    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

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
        const map = new mapboxgl.Map({
            container: mapContainer.current ,
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [coords[0].coordinates[0], coords[0].coordinates[1]],
            zoom: 15,
        });

        currentMarker = new mapboxgl.Marker()
            .setLngLat(coords[0].coordinates)
            .addTo(map);

        currentPopup = new mapboxgl.Popup({ offset: 25 })
            .setLngLat(coords[0].coordinates)
            .setHTML(`<p>${coords[0].name}</p>`)
            .addTo(map);

        // const testControl = new mapboxgl.NavigationControl();

        // map.addControl(testControl, 'top-right');
          
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
        
        const nextButton = new SimpleClickControl(nextButtonOptions);
        map.addControl(nextButton, 'top-right');
        const prevButton = new SimpleClickControl(precButtonOptions);
        map.addControl(prevButton, 'top-right');
          

        return() => map.remove()
    }, []);

    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
}