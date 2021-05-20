import React from 'react';

const PuzzleGame = () => {
    return (
        <section class=" container d-flex justify-content-center Card">
            <section className="border p-3">
                <h1 style={{ fontSize: "24px" }}>Solve this puzzle to protect your account</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <button id="Button">Solve puzzle</button>
                </div>
                
            </section>
        </section>
    );
};

export default PuzzleGame;