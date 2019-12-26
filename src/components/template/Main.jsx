import './Main.css'
import React from 'react'


export default props =>
    <React.Fragment>        
        <main className="content-gender">
            Select your gender:
        </main>
        <div className="gender-button">
            <button className="btn btn-female" data-gender="female">
                <span className = "icon">
                  <i className="female"></i>
                </span>
                Womem Click here
                <i className="fa fa-female "></i>
            </button>

            <button className="btn btn-male" data-gender="male">
                <span className = "icon">
                  <i className="male"></i>
                </span>
                Men Click here
                <i className="forward-male forward"></i>
            </button>
        
        </div>
        
    </React.Fragment>