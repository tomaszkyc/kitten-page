import React from "react"


export default function Info() {
    return (
        <>
            <div className="info--container">
                <img alt="White kitten" className="info--image" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg" />
                <h1 className="info--name">Kitten</h1>
                <h3 className="info--position">Sound Designer @ Home</h3>
                <p className="info--website"><a href="https://en.wikipedia.org/wiki/Kitten" target="_blank">https://en.wikipedia.org/wiki/Kitten</a></p>
                <div className="info--container--buttons">
                        <button className="email--button">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:kitten@kitten.com">Email</a></button>
                        <button className="linkedin--button">
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://linkedin.com">LinkedIn</a>
                        </button>
                </div>
            </div>    
        </>
    )
}