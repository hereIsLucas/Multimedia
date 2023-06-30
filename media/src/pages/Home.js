import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images2 from '../images2';
import images21 from '../images21';
import './Home.css';

export default function Home() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    return (
        <div id='body'>
            <h1>Selamat Tinggal</h1>
            <div className='padding'></div>
            <div className='inner-body'>
                <h2>Auf der Reise nach dem Perfektismus</h2>
            </div>
            <div>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                        {images2.map((image, index) => (
                            <motion.div className='item' key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className='padding'></div>
            <div className='inner-body'>
                <h2>imperfekter Perfektismus</h2>
            </div>
            <div>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                        {images21.map((image, index) => (
                            <motion.div className='item' key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div>
            <br/>

                <h1>Bildbeschreibungen und Bearbeitung</h1>

                <h2>Bild 1: Klippe mit steilem Treppenabstieg</h2>
                <p>
                    Dieses Bild zeigt eine Klippe mit einem eher steilen Treppenabstieg. Bei der Bearbeitung wurden folgende Aspekte hervorgehoben:
                </p>
                <ul>
                    <li>Kontrast wurde erhöht</li>
                    <li>Ambiente wurde verdunkelt</li>
                    <li>Farben wurden gesättigt</li>
                    <li>Akrylische Atmosphäre wurde geschaffen</li>
                </ul>
                <br/>
                <h2>Bild 2: Hund mit Gurke auf dem Kopf</h2>
                <p>
                    Dieses Bild zeigt einen Hund, der sich hinlegt und eine Gurke auf dem Kopf trägt. Die Bearbeitung umfasste:
                </p>
                <ul>
                    <li>Retusche, um die Gurke vom Kopf des Hundes zu entfernen</li>
                </ul>
                <br/>

                <h2>Bild 3: Zufriedener Hund mit schöner Hintergrundlandschaft</h2>
                <p>
                    Dieses Bild zeigt einen zufriedenen Hund, der in die Weite schaut und eine schöne Hintergrundlandschaft mit vielen Farben enthält. Die Bearbeitung beinhaltete:
                </p>
                <ul>
                    <li>Künstliche Unschärfe, um den Hintergrund wässrig erscheinen zu lassen</li>
                </ul>
                <br/>

                <h2>Bild 4: Reisplantage mit Bäumen im Hintergrund</h2>
                <p>
                    Dieses Bild zeigt eine Reisplantage mit einigen Bäumen im Hintergrund. Die Bearbeitung erzielte einen kontrastreichen, aber weniger detaillierten Effekt:
                </p>
                <ul>
                    <li>Erhöhung des Kontrasts</li>
                    <li>Pikasso-ähnliche Wirkung aus der Nähe</li>
                </ul>
                <br/>
                             
                <h2>Bild 5: Kleines Häuschen vor Sonnenuntergang und reflektierenden Sonnenstrahlen</h2>
                <p>
                    Dieses Bild zeigt ein kleines Häuschen vor dem Sonnenuntergang mit reflektierenden Sonnenstrahlen in den gewässerten Reisplantagen. Die Bearbeitung umfasste:
                </p>
                <ul>
                    <li>Verwendung eines Farbfilters, um die Wärme und die Farbe des Holzes zu betonen</li>
                </ul>
                <br/>

            </div>
        </div>
    );
}
