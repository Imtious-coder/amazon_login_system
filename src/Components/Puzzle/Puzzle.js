import React from 'react';
import Puzzle1 from './puzzle.jpg';
import './Puzzle.css';
import { Link } from 'react-router-dom';

const Puzzle = () => {
    return (
        <section class=" container d-flex justify-content-center Card">
            <section className="border p-3">
                <h1 style={{ fontSize: "24px" }}>Solve this puzzle to protect your account</h1>
                <div class="d-flex justify-content-center mt-4">
                    <img style={{ width: "80%", height: "200px" }} src={Puzzle1} alt="" />
                </div>
                <Link style={{textDecoration:"none"}} to="/puzzle_game">
                <div className="d-flex justify-content-center">
                    <button id="Button">Solve puzzle</button>
                </div>
                </Link>
                
            </section>
        </section>
    );
};

export default Puzzle;