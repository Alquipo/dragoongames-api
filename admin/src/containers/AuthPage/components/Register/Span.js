import styled from "styled-components";
import { Text } from "@buffetjs/core";

const Span = styled(Text)`
  color: #cd113b;
  cursor: pointer;
`;

Span.defaultProps = {
  as: "span",
};

export default Span;
