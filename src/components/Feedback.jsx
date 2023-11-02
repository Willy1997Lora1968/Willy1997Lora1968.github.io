import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del feedback, por ejemplo, enviándolo a un servidor
        console.log(feedback);
    };

    return (
        <div className="container mt-5">
            <h2>Deja tu feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="feedback">Comentario:</label>
                    <textarea 
                        className="form-control" 
                        id="feedback" 
                        rows="3"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                </div><br/>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Feedback;
