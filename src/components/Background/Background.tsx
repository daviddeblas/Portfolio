/**
 * Inspiration:
 * This code was inspired by a design from Codepen created by mohaiman
 * The original code come from: https://codepen.io/mohaiman/pen/MQqMyo
 */

import React, { useState, useEffect, useCallback } from "react";
import {SquareConfig} from "../../interface/SquareConfig.ts";
import "./Background.css";

const pastelColors = [
    "rgba(254, 193, 149, 0.4)", // orange
    "rgba(255, 233, 149, 0.4)", // yellow
    "rgba(149, 254, 195, 0.4)", // green
    "rgba(149, 196, 254, 0.4)", // blue
    "rgba(200, 149, 254, 0.4)", // purple
    "rgba(254, 149, 225, 0.4)", // pink
];

const randomBetween = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const Background: React.FC = () => {
    const [squares, setSquares] = useState<SquareConfig[]>([]);

    const spawnSquare = useCallback(() => {
        setSquares((prev) => {
            // No more than 30 squares
            if (prev.length >= 30) {
                return prev;
            }

            // Squares generated equally from left to right
            const isLeftSide = Math.random() < 0.5;
            const leftMin = isLeftSide ? 5 : 55;
            const leftMax = isLeftSide ? 45 : 95;
            const leftPos = Math.random() * (leftMax - leftMin) + leftMin;

            const newSquare: SquareConfig = {
                id: Date.now(),
                size: Math.random() * 80 + 45,
                left: leftPos,
                color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
                rotate: Math.random() * 360,
                duration: randomBetween(10, 13),
                delay: Math.random() * 2,
            };

            return [...prev, newSquare];
        });
    }, []);

    // We spawn squares each 500 ms
    useEffect(() => {
        spawnSquare();
        const interval = setInterval(() => {
            spawnSquare();
        }, 500);

        return () => clearInterval(interval);
    }, [spawnSquare]);

    // In order to remove the square from the DOM
    const handleAnimationEnd = (id: number) => {
        setSquares((prev) => prev.filter((square) => square.id !== id));
    };

    return (
        <div className="floating-squares-container">
            {squares.map((square) => (
                <div
                    key={square.id}
                    className="floating-square"
                    style={{
                        width: `${square.size}px`,
                        height: `${square.size}px`,
                        left: `${square.left}%`,
                        backgroundColor: square.color,
                        transform: `rotate(${square.rotate}deg)`,
                        animationDuration: `${square.duration}s`,
                        animationDelay: `${square.delay}s`,
                    }}
                    onAnimationEnd={() => handleAnimationEnd(square.id)}
                />
            ))}
        </div>
    );
};

export default Background;
