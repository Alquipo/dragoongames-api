import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 41.6rem;
  padding: 20px 30px 25px 30px;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  border-top: 3px solid ${({ theme }) => theme.main.colors.dragoon.primary};
  background-color: ${({ theme }) => theme.main.colors.white};
  box-shadow: 0 2px 4px 0 #03071e;
`;

export default Wrapper;
