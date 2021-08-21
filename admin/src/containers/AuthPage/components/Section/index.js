import styled from "styled-components";
import Background from "../../../../assets/images/background_empty.svg";

/* eslint-disable indent */

const Section = styled.section`
  text-align: ${({ textAlign }) => textAlign};
  ${({ withBackground }) =>
    withBackground &&
    `

    background-position-x: center;
    background-position-Y: center;
    `}
`;

Section.defaultProps = {
  withBackground: false,
  textAlign: "initial",
};

export default Section;
