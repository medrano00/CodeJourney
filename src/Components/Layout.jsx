import React from 'react'
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <div className='title'>
                    <h1>CodeJourney!</h1>
            </div>
            <div className="under-title">
                    <h1>La manera más lúdica de aprender a programar. ¡Estudia con nosotros!</h1>
            </div>
            <div className="button-start">
                    <button className="btn btn-primary">¡Comienza tu aventura!</button>
            </div>
        </div>
    )
}

export default Layout