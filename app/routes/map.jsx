import React, { useEffect, useRef, useState } from "react";

import { Links } from "@remix-run/react";

import { Helmet } from 'react-helmet';
import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import mapboxgl from "mapbox-gl";

export async function loader() {
    const locations = [
        {
            coordinates: [23.740032943439388, 37.939448602005044],
            name: "Mall"
        },
        {
            coordinates: [28.74176541352466, 17.92757523914288],
            name: "Test"
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
    ];
};

export default function loadMap() {
    const loaderData = useLoaderData();
    mapboxgl.accessToken = loaderData.MAPBOX_TOKEN;
    const mapContainer = useRef();
    const coords = loaderData.locations;

    // let currentLocationIndex = 0;
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

    function showLocation (map, currentLocationIndex) {
        console.log('showing location ' + currentLocationIndex);
        const location = coords[currentLocationIndex]
        map.flyTo({
            center: location.coordinates,
            duration: 3000,
            zoom: 15,
        });
    };
    
    function showNextLocation (map, currentLocationIndex) {
        // currentLocationIndex++;
        if (currentLocationIndex >= coords.length - 1) {
            // currentLocationIndex = 0
            console.log('setting index to 0');
            setCurrentLocationIndex(0);
        } else {
            console.log('setting index to ' + (currentLocationIndex + 1));
            setCurrentLocationIndex(currentLocationIndex + 1);
            showLocation(map, currentLocationIndex);
        }
    };
    
    function showPreviousLocation (map, currentLocationIndex) {
        // currentLocationIndex--;
        if (currentLocationIndex <= 0) {
            // currentLocationIndex = coords.length -1;
            console.log('setting index to ' + (coords.length - 1));
            setCurrentLocationIndex(coords.length - 1);
        } else {
            console.log('setting index to ' + (currentLocationIndex - 1));
            setCurrentLocationIndex(currentLocationIndex - 1);
            showLocation(map, currentLocationIndex)
        }
    };

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current ,
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [coords[0].coordinates[0], coords[0].coordinates[1]],
            zoom: 15,
        });

        // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        const nextButton = document.createElement('button');
        nextButton.textContent = 'New Location';
        nextButton.addEventListener('click', () => showNextLocation(map, currentLocationIndex));
    
        const previousButton = document.createElement('button');
        previousButton.textContent = 'Previous Location';
        previousButton.addEventListener('click', () => showPreviousLocation(map, currentLocationIndex));

        // const testControl = new mapboxgl.NavigationControl();

        // map.addControl(testControl, 'top-right');

        // map.addControl(mapboxgl.Control({
        //     position: 'top-right',
        //     element: nextButton
        // }));
    
        // map.addControl(mapboxgl.Control({
        //     position: 'top-left',
        //     element: previousButton
        // }));

        setTimeout(() => {
            console.log('timeout fired');
            setCurrentLocationIndex((prevIndex) => {
                const newIndex = prevIndex >= coords.length - 1 ? 0 : prevIndex + 1;
                showLocation(map, newIndex);
                return newIndex;
            });
        }, 3000);

        setTimeout(() => {
            console.log("current location index: " + currentLocationIndex);
        }, 5000);

        map.on('load', () => {
            console.log('map loaded');
            const marker = new mapboxgl.Marker()
                .setLngLat([coords[0].coordinates[0], coords[0].coordinates[1]])
                .addTo(map);
            console.log(marker);
        });

        // map.on('style.load', () => {
        //     console.log('style loaded');
        // });

        // map.on('click', 'countries', (e) => {
        //     new mapboxgl.Popup()
        //     .setLngLat(e.lngLat)
        //     .setHTML(`Country name: ${e.features[0].properties.name}`)
        //     .addTo(map);
        // });

        return() => map.remove()
    }, []);

    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
}