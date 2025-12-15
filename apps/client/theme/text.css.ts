import { style } from "@vanilla-extract/css";
import { semantic } from "./semantic.css";

export const textColor = {
  'normal': style({ color: semantic.label.normal }),
  'strong': style({ color: semantic.label.strong }),
  'weak': style({ color: semantic.label.weak }),
  'red': style({ color: semantic.accent.red }),
  'pink': style({ color: semantic.accent.pink }),
  'blue': style({ color: semantic.accent.blue }),
  'yellow': style({ color: semantic.accent.yellow }),
  'green': style({ color: semantic.accent.green }),
  'whiteVariable': style({ color: semantic.white.variable }),
  'whiteStatic': style({ color: semantic.white.static }),
}
