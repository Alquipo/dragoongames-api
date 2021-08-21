import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.main.colors.dragoon.blue};
  bottom: 0;
  .poweredBy {
    margin: 0 auto;
    width: 100%;
    bottom: 0;
    height: 3rem;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 3rem;
    background-color: rgba(255, 255, 255, 0.02);
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    text-align: center;
    color: ${({ theme }) => theme.main.colors.strapi["gray-light"]};
    a {
      color: ${({ theme }) => theme.main.colors.dragoon.orange};
    }
  }
`;

export default Wrapper;
