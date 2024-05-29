import React, {useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function Blur({src, hash}) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
        img.hash = hash
    }, [src, hash])

    return (
        <>
            {!imageLoaded && (
                <Blurhash
                    className="blur"
                    hash={hash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
            {imageLoaded && (
                <img
                    src={src}
                    alt=""
                />
            )}
        </>
    )
}
