import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./styles/Module.css";

function Module(props) {
    return (
        <>
            <div className="Module">
                <div className="Module__progress">
                    <section className="Module__progress__outer">
                        <section className="Module__progress__inner">
                            <span className="Module__progress__number">{props.id}</span>
                            <FontAwesomeIcon className="Module__progress__icon hidden" icon={faPlay}/>
                        </section>
                    </section>
                </div>

                <div className="Module__info">
                    <section className="Module__info__top">
                        <h2>{props.title}</h2>
                        <span className="Module__info__time">{props.time}</span>
                    </section>
                    <section className="Module__info__bottom">
                        <p>{props.info}</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Module;