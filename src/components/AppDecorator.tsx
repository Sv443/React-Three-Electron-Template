import { ReactNode, useMemo, StrictMode } from "react";
import { CssBaseline, useMediaQuery, ThemeProvider, ThemeOptions } from "@mui/material";

const useDarkModeDefault = () => null;

interface AppDecoratorProps {
  children: ReactNode;
  createTheme: ({ darkMode }: { darkMode: boolean }) => ThemeOptions;
  useDarkMode?: () => boolean | null;
}

export function AppDecorator({
  children,
  createTheme,
  useDarkMode = useDarkModeDefault,
}: AppDecoratorProps) {
  const darkModeBySwitch = useDarkMode();
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () => createTheme({ darkMode: darkModeBySwitch ?? darkMode }),
    [createTheme, darkMode, darkModeBySwitch]
  );
  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <StrictMode>{children}</StrictMode>
    </ThemeProvider>
  );
}
