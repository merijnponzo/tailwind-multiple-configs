import { getSpacing } from "blockbite-tailwind";
import { getScreens } from "blockbite-tailwind";
import { getAspectRatio } from "blockbite-tailwind";
import { getContainer } from "blockbite-tailwind";
import { getColors } from "blockbite-tailwind";
import { getScreenDimensions } from "blockbite-tailwind";

const containerFluid = require('blockbite-tailwind/components/fluid-container')
const containerHalf = require('blockbite-tailwind/components/half-container')
const animatedTailwind = require('blockbite-tailwind/motion')

let spacing = getSpacing();
let screendimensions = getScreenDimensions();
spacing = { ...spacing, ...screendimensions}


/** @type {import('tailwindcss').Config} */
module.exports = {
    // needs to be added to load css as external file 
    // within site-editor and mobile preview
    safelist: ['container-fluid'],
    theme: {
      container: getContainer(),
      colors: getColors(),
      extend: {
        spacing: spacing,
        gap: spacing,
        minWidth: spacing,
        maxWidth: spacing,
        minHeight: spacing,
        maxHeight: spacing,
        aspectRatio: getAspectRatio(),
        screens: getScreens()
      }
    },
    plugins: [
      animatedTailwind,
      containerFluid,
      containerHalf
    ]
}