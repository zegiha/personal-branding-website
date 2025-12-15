import { semantic } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

const grayContainer = style({
  backgroundColor: semantic.black.variable
})

const grayContent = style({
  color: semantic.white.variable
})

const redContainer = style({
  backgroundColor: semantic.accent.red
})

const redContent = style({
  color: semantic.white.static
})

const pinkContainer = style({
  backgroundColor: semantic.accent.pink
})

const pinkContent = style({
  color: semantic.white.static
})

const blueContainer = style({
  backgroundColor: semantic.accent.blue
})

const blueContent = style({
  color: semantic.white.static
})

const yellowContainer = style({
  backgroundColor: semantic.accent.yellow
})

const yellowContent = style({
  color: semantic.white.static
})

const greenContainer = style({
  backgroundColor: semantic.accent.green
})

const greenContent = style({
  color: semantic.white.static
})

const grayTranslucentContainer = style({
  backgroundColor: semantic.fill.normal
})

const grayTranslucentContent = style({
  color: semantic.label.normal
})

const redTranslucentContainer = style({
  backgroundColor: semantic.accentTranslucent.red
})

const redTranslucentContent = style({
  color: semantic.accent.red
})

const pinkTranslucentContainer = style({
  backgroundColor: semantic.accentTranslucent.pink
})

const pinkTranslucentContent = style({
  color: semantic.accent.pink
})

const blueTranslucentContainer = style({
  backgroundColor: semantic.accentTranslucent.blue
})

const blueTranslucentContent = style({
  color: semantic.accent.blue
})

const yellowTranslucentContainer = style({
  backgroundColor: semantic.accentTranslucent.yellow
})

const yellowTranslucentContent = style({
  color: semantic.accent.yellow
})

const greenTranslucentContainer = style({
  backgroundColor: semantic.accentTranslucent.green
})

const greenTranslucentContent = style({
  color: semantic.accent.green
})

export const container = {
  gray: grayContainer,
  grayTranslucent: grayTranslucentContainer,
  red: redContainer,
  redTranslucent: redTranslucentContainer,
  pink: pinkContainer,
  pinkTranslucent: pinkTranslucentContainer,
  blue: blueContainer,
  blueTranslucent: blueTranslucentContainer,
  yellow: yellowContainer,
  yellowTranslucent: yellowTranslucentContainer,
  green: greenContainer,
  greenTranslucent: greenTranslucentContainer,
}

export const content = {
  gray: grayContent,
  grayTranslucent: grayTranslucentContent,
  red: redContent,
  redTranslucent: redTranslucentContent,
  pink: pinkContent,
  pinkTranslucent: pinkTranslucentContent,
  blue: blueContent,
  blueTranslucent: blueTranslucentContent,
  yellow: yellowContent,
  yellowTranslucent: yellowTranslucentContent,
  green: greenContent,
  greenTranslucent: greenTranslucentContent,
}