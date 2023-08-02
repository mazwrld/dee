import { TypographyProps } from "@mui/material";
import { TextStyled } from "./text.styles.ts";

export type TextProps = TypographyProps & {
  bold: boolean;
};

function Text(props: TextProps) {
  return <TextStyled {...props} />;
}

export default Text;
