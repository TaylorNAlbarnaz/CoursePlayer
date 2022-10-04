import React from 'react';
import "./styles/CoursePage.css";

function CoursePage() {
    return (
        <>
            <div className='Container_wrapper workspace'>
            <div className='Container__course'>
                <h1>Título do Modulo</h1>
                <section className='Container__play'>
                    <div className='Videoplayer'></div>
                    <div className='Videolist'>
                        <header className='Videolist__info'>
                            <div className='Videolist__icon'>
                                <div className='Videolist__icon__outer'>
                                    <div className='Videolist__icon__inner'>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='Videolist__coursedetails'>
                                <h2>Título extendido do Modulo</h2>
                                <p>10 aulas <span>*</span> 24:02</p>
                            </div>
                        </header>
                        <section className='Videolist__list'></section>
                    </div>
                </section>
            </div>
            </div>
        </>
    )
}

export default CoursePage;