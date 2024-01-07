import React, { useEffect, useRef } from "react";

import { Links } from "@remix-run/react";

import { Helmet } from 'react-helmet';
import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export async function loader() {
  return json({ 'MAPBOX_TOKEN': process.env.MAPBOX_TOKEN });
};


export default function map() {
    const loaderData = useLoaderData();
    mapboxgl.accessToken = loaderData.MAPBOX_TOKEN;
    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current ,
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [23.74174803678889, 37.92752697105196],
            zoom: 15,
        });

        return() => map.remove()
    }, [])

    return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
}