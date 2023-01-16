import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

const app = document.getElementById("typeID");

const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
    stringSplitter,
    autoStart:true
});

typewriter
    .typeString("⭐ A simple yet powerful native javascript")
    .pauseFor(300)
    .deleteChars(10)
    .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
    .typeString(
        '<strong>only <span style="color: #810CA8;">5kb</span> Gzipped!</strong>'
    )
    .pauseFor(1000)
    .start();
