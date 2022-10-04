import React from 'react';
import "./styles/CoursePage.css";

function CoursePage() {
    return (
        <>
            <div className='Container__course workspace'>
                <h1>Título do Modulo</h1>
                <section className='Container__play'>
                    <div className='Videoplayer'></div>
                    <div className='Videolist'></div>
                </section>
            </div>
        </>
    )
}

export default CoursePage;