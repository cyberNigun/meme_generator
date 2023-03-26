import React from "react";

function Form() {
    return(
        <div>
            <main>
            <form className="form ">
                <input type="text" className="form-input" placeholder="top text"/>
                <input type="text" className="form-input" placeholder="buttom text"/>
                <button className="form-button">Get a new meme image 🖼️</button>
            </form>
            </main>
        </div>
    )
}
export default Form;