export const theme = {
  colors: {
    text: "#333333",
    textOnDark: "#ffffff",
    surface: "#ffffff",
    border: "#cccccc",
    borderStrong: "#203588",
    overlay: "rgba(0, 0, 0, 0.5)",
    buttonPrimary: "#51b7e6",
    buttonPrimaryHover: "#3a96c3",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
  },
  radii: {
    sm: "4px",
    md: "8px",
  },
  shadows: {
    modal: "0 5px 15px rgba(0, 0, 0, 0.3)",
  },
  sizes: {
    sectionHeight: "300px",
    modalMaxWidth: "90vw",
    modalMaxHeight: "90vh",
  },
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
} as const;

export type AppTheme = typeof theme;
