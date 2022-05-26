import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "mhfont"; */
  }

  @font-face {
    font-family: "mhfont";
    src: url("/fonts/scifibit.ttf");
  }
  @font-face {
    font-family: "oswaldfont";
    src: url("/fonts/Oswald.ttf");
  }
`;
