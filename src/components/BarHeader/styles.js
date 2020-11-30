import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 106px;
  background: linear-gradient(
    180deg,
    #4f5a98 26.04%,
    rgba(79, 90, 152, 0) 100%
  );
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 106px;
`;

export const Logo = styled.div`
  width: 150px;
  height: 80px;
  background-color: red;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const NavLink = styled.a`
  flex: 1;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;
`;

export const Button = styled.div`
  width: 250px;
  height: 41px;
  border: 3px solid #ffffff;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;
  color: #fbf7e2;
`;
