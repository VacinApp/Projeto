"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./map.module.css";

export default function Map({ postos }) {
  console.log(postos )
  return (
    <MapContainer
      preferCanvas={true}
      center={[-23.5489, -46.6388]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "calc(100vh - 72.38px)", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {postos.map((posto) => (
        <Marker key={posto.id} position={[posto.latitude, posto.longitude]}>
          <Popup>
            <img className={styles.imagem} src={ posto.imagem } alt={ posto.nome } />
            <h1 className={styles.titulo}>{ posto.nome }</h1>
            <em className={styles.sobre}>{ posto.sobre }</em>
            <strong className={styles.label}>Endereço: </strong>
            <span className={styles.infos}>{ posto.local }</span>
            <strong className={styles.label}>CEP: </strong> 
            <span className={styles.infos}>{ posto.cep }</span>
            <strong className={styles.label}>Telefone: </strong> 
            <span className={styles.infos}>{ posto.tel }</span>
            <strong className={styles.label}>Funcionamento: </strong> 
            <span className={styles.infos}>{ posto.funcionamento }</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}