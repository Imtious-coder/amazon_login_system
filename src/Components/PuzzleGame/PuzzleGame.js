import React from 'react';
import './PuzzleGame.css';
import Image1 from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.jpg';
import Image6 from './6.jpg';
import { Link } from 'react-router-dom';

const PuzzleGame = () => {
    return (
        <section class=" container d-flex justify-content-center Card pb-5">
            <section className="border p-3">
                {/* Title... */}
                <h1 style={{ fontSize: "24px" }}>Solve this puzzle to protect your account</h1>
                <div className="pb-5">
                    <div className="row g-1">
                        {/* Message... */}
                        <div className="col-md-12 text-center mt-5">
                            <p>Pick the spiral galaxy</p>
                        </div>
                        {/* Images... */}
                        <div className="col-md-4 d-flex justify-content-center borders">
                            <img className="Puzzle_Images" src={Image1} alt="" />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center borders">
                            <img className="Puzzle_Images" src={Image2} alt="" />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center borders">
                            <img className="Puzzle_Images" src={Image3} alt="" />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center borders">
                            <img className="Puzzle_Images" src={Image4} alt="" />
                        </div>
                        {/* Correct image... */}
                        <div className="col-md-4 d-flex justify-content-center borders">
                            <img className="Puzzle_Images" src={Image5} alt="" />
                        </div>
                        {/* Correct image... */}
                        <div className="col-md-4 d-flex justify-content-center borders">
                            {/* Button... */}
                            <Link to="/verification">
                                <img className="Puzzle_Images" src={Image6} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PuzzleGame;