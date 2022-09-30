import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Module() {
    return (
        <>
            <div className="Module">
                <div className="Module__progress">
                    <section className="Module__progress__outer">
                        <section className="Module__progress__inner">
                            <span className="Module__progress__number">1</span>
                            <FontAwesomeIcon className="Module__progress__icon hidden" icon={faPlay}/>
                        </section>
                    </section>
                </div>

                <div className="Module__info">
                    <section className="Module__info__top">
                        <h2>Título do Módulo</h2>
                        <span className="Module__info__time">21min em 4 aulas</span>
                    </section>
                    <section className="Module__info__bottom">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum 
                            velit vitae libero aliquet, et gravida erat fringilla. Fusce consequat tincidunt 
                            diam a venenatis. Donec euismod neque in enim gravida, vitae iaculis nisi aliquam. 
                            Etiam tristique sit amet ipsum et eleifend.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Module;