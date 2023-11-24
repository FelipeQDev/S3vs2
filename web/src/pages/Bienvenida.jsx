import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faAws,
  faJs
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export function Bienvenida() {
  return (
    <div>
      <div className="descripcion">
        <h4>Bienvenido 👋</h4>
        <p className="titulo">Almacenamiento en Amazon AWS S3</p>
        <p className="parrafo">
          Esta Web fue diseñada con el fin, de poder alamacenar todo tipo de
          archivos, utilizando los servicios que nos brinda<b> Amazon AWS S3</b>
          .
        </p>
        <img src="https://dbalchemist.com/images/5ae50a2347f7b5515661a6009dde969f.png" />
      </div>
      <h5 className="separador">Tecnolgías</h5>
      <div className="tecnologias">
        <div className="izquierda">
          <div className="informacion">
            <h3>¿Que tecnologias se ocuparán?</h3>
            <p>
              En esta ocación se ocuparán las siguientes tecnolgias, en el
              Backend ocuparemos: <b>Python Django-Restframework</b>, en el
              Frontend ocuparemos: <b>React y Vite</b>. A su vez, haremos uso de
              Tecnolgía como los Bucket que nos proporciona <b>AWS S3</b>.
            </p>
          </div>
        </div>
        <div className="derecha">
          <div className="item">
            <FontAwesomeIcon icon={faPython} className="i" />
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faReact} className="i" />
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faAws} className="i" />
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faJs} className="i" />
          </div>
        </div>
      </div>
      <div>
      <footer>
        <div className="inicio">
          <h2>Sobre Nosotros</h2>
          <p><span>13</span> Años de Experiencia</p>
          <p><span>150</span> Proyectos Realizados</p>
        </div>
        <div className="cols">
          <div className="about-col">
            <h2>Felipe Quelín</h2>
            <p>Junior Developer</p>
          </div>
          <div className="links-col">
            <h2>Contactanos</h2>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} className="i" />
              <h4>Email </h4>
              <p>contacto@polodev.cl</p>
            </div>
            <div className="phone">
            <FontAwesomeIcon icon={faPhone} className="i" />
              <h4>Teléfono </h4>
              <p>+56992167354</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
