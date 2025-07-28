// components/MapComponent.jsx
"use client";

import React, { useCallback } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Coordenadas para EQI Investimentos - Cuiabá, MT
const establishmentLocation = {
  lat: -15.594761057234825, // Latitude para Av. das Flores, 945 - Jardim Cuiabá
  lng: -56.119856913491454, // Longitude para Av. das Flores, 945 - Jardim Cuiabá
};

function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY as string,
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(establishmentLocation);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    // Limpeza
  }, []);

  if (loadError)
    return (
      <div className="w-full h-full bg-background-subtle flex items-center justify-center text-muted-foreground">
        Erro ao carregar os mapas. Verifique sua chave de API ou conexão.
      </div>
    );
  if (!isLoaded)
    return (
      <div className="w-full h-full bg-background-subtle flex items-center justify-center text-muted-foreground">
        Carregando mapa...
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={establishmentLocation}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
        ],
      }}
    >
      <Marker
        position={establishmentLocation}
        title="EQI Investimentos - Av. das Flores, 945, Jardim Cuiabá, CEP 78.043-172"
        icon={{
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#1E6BEB"/>
              <path d="M20 8L26.18 15.18L20 22.36L13.82 15.18L20 8Z" fill="white"/>
              <circle cx="20" cy="20" r="6" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
    </GoogleMap>
  );
}

export default React.memo(MapComponent);
