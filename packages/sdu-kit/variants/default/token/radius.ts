// Radius Tokens
// Border radius 값

export const radius = {
  small: 6,
  medium: 8,
  large: 16,
  xlarge: 36,
  circular: 9999,
} as const;

export type RadiusType = typeof radius;