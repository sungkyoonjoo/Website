import { useCallback, useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다.
  // ﻿이는 script가 실행되기 이전에 window.initMap이 먼저 선언되어야 하기 때문입니다.
  const loadScript = useCallback((url: String) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  const initMap = useCallback(() => {
    const { google } = window;

    const location = { lat: 37.522325, lng: 127.027085 };
    const map = new google.maps.Map(mapRef.current, {
      center: location,
      zoom: 18,
    });
    // The marker, positioned at location
    new google.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith(
      "https://maps.googleapis.com/maps/api"
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYx_uekmNrgA68gwniyWPkAYgvfmQW98A&callback=initMap&language=en"
    );
  }, [initMap, loadScript]);

  return (
    <div
      className="map"
      style={{ width: "100%", height: "100%" }}
      ref={mapRef}
    ></div>
  );
}
