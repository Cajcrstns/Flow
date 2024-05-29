import React, {useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function BlurHome({src, hash}) {
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
                    width="45%"
                    height="90%"
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
