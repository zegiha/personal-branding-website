import { globalStyle } from "@vanilla-extract/css";

globalStyle('*', {
  margin: 0,
  padding: 0,
})

globalStyle('button', {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
})

globalStyle('a', {
  textDecoration: 'none',
})
