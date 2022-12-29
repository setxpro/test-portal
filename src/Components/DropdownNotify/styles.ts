import styled from "styled-components";

export const Container = styled.div<{
  openDropdownNotify: boolean;
  countItem: number;
}>`
  width: 245px;
  height: ${(props) =>
    props.openDropdownNotify ? `calc(40px * ${props.countItem})` : "0"};
  transition: all 0.5s ease;
  overflow: hidden;
  background: ${(props) => props.theme.colors.header};
  box-shadow: 1px 2px 5px #000;
  position: absolute;
  z-index: 999;
  top: 70px;
  right: 100px;

  @media (max-width: 768px) {
    top: 60px;
  }
  @media (max-width: 428px) {
    left: 50px;
  }

  display: flex;
  flex-direction: column;

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    height: 40px;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    text-transform: capitalize;
    white-space: nowrap;

    &:hover {
      background: #5555;
    }
  }
`;
