"use client";
import { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from 'gsap';

export default function Home() {
    let textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const supRef = useRef<HTMLParagraphElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="letter" style={{ opacity: 0, display: 'inline-block', transform: 'translateY(20px)' }}>{char}</span>
        ));
    };

    const playAnimation = () => {
        const letters = textRef.current?.children;
        if (!letters) return;

        Array.from(letters).forEach((char, index) => {
            gsap.to(char, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'power2.out',
                onComplete: () => {
                    if (index === letters.length - 1) {
                        slideInSubtitle();
                    }
                }
            });
        });
    };

    const playSupAnimation = () => {
        gsap.set(supRef.current, { x: 100, opacity: 0 });
        gsap.to(supRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                supRef.current?.classList.add('visible');
                playAnimation();
            }
        });
    };

    const slideInSubtitle = () => {
        gsap.set(subRef.current, { x: -100, opacity: 0 });
        gsap.to(subRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                subRef.current?.classList.add('visible');
            }
        });
    };

    const handleSplineLoad = () => {
        setTimeout(() => {
            gsap.to(".loading-overlay", {
                y: "-100%",
                duration: 0.5,
                onComplete: () => {
                    setIsLoaded(true);
                    gsap.to(".main-content", { opacity: 1, duration: 0.5, onComplete: playSupAnimation });
                }
            });
        }, 0);
    };

    return (
        <div className="page-container">
            <div className="loading-overlay">
                <p>Loading...</p>
            </div>
            <div className="main-content" style={{ opacity: isLoaded ? 1 : 0 }}>
                <div className="section s1">
                    <Spline
                        className="spline"
                        scene="https://prod.spline.design/bdf3nPD91rXmfZAv/scene.splinecode"
                        style={{ width: "100%", height: "100vh" }}
                        onLoad={handleSplineLoad}
                    />
                    <div className="overlay"></div>
                    <div className="text">
                        <div ref={supRef} className="sup" style={{ opacity: 0 }}>
                            Hey I'm
                        </div>
                        <h1 ref={textRef} className="main-h1">
                            {splitText("Varshith")}
                        </h1>
                        <p ref={subRef} className="sub-p" style={{ opacity: 0 }}>
                            <span className="sub">
                                Web Developer
                            </span>
                        </p>
                    </div>
                </div>

                <div className="section s2">
                    <div className="content">
                        <h2>Another Section</h2>
                        <p>This is some content for another section.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
