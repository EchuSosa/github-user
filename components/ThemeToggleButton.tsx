import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/context/ThemeContext";

export const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeMode();

  return (
    <Tooltip title={`Change ${mode === "dark" ? "light" : "dark"}`}>
      <IconButton
        onClick={toggleTheme}
        aria-label="Toggle theme"
        color="inherit"
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
