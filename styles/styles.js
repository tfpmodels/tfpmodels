import { colors } from "./variables";

export const TFPSelectsStyles = {
  container: (provided, state) => ({
    ...provided,
    // width: "400px",
    width: "100%",
    borderRadius: "20px",
    "&:focus": {
      border: `solid ${colors.secondary} 2px`,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "20px",
    border: `solid ${colors.secondary} 2px`,
    boxShadow: "none",
    height: "60px",
    "&:hover": {
      border: `solid ${colors.secondary} 2px`,
      cursor: "pointer",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "20px",
  }),
  option: (provided, state) => {
    const backgroundColor = state.isSelected ? colors.tertiary : colors.primary;
    return {
      ...provided,
      borderRadius: "20px",
      backgroundColor: backgroundColor,
      "&:hover": {
        cursor: "pointer",
      },
    };
  },
};

export const fieldWidthOptions = {
  sm: "180px",
  md: "280px",
  lg: "400px",
};
