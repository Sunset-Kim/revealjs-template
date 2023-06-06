'use strict'

import 'reveal.js/dist/reveal.css'
import './sunblind.css'
import './style.css'
// import 'reveal.js/dist/theme/moon.css'
import Reveal from "reveal.js"
import MarkDown from "reveal.js/plugin/markdown/markdown.esm"
import Notes from 'reveal.js/plugin/notes/notes.esm';

let deck = new Reveal({
   plugins: [ MarkDown, Notes ],
   slideNumber: true,
   margin: 0.2
})

deck.initialize();
