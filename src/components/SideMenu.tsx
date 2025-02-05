import styled from "styled-components";
import FadeIn from "./animations/FadeIn";
import ThemeSelector from "./ThemeSelector";

const MenuContainer = styled.aside`
  min-height: 100vh;
  position: absolute;
  background-color: #121215;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
  z-index: 7;
  position: fixed;
  justify-content: space-between;

  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  align-items: center;
  flex-direction: column;
  transform: translateY(3rem);
  gap: 6rem;
  display: flex;
`;

const MenuItem = styled.li`
  cursor: pointer;
  transform: rotate(270deg);
  font-size: 2rem;
  font-weight: 500;

  & > a {
    color: #fff;
    text-decoration: none;
    transition: color 0.15s;
  }
  & > a:hover {
    filter: drop-shadow(0 0 3px #ccc);
  }
`;

const SideMenu = () => {
  return (
    <>
      <MenuContainer>
        <FadeIn>
          <MenuList>
            <MenuItem>
              <a href="#contact">Contact</a>
            </MenuItem>
            <MenuItem>
              <a href="#about">Skills</a>
            </MenuItem>
            <MenuItem>
              <a href="#projects">Projects</a>
            </MenuItem>

            <MenuItem>
              <a href="#about">About</a>
            </MenuItem>
          </MenuList>
        </FadeIn>
        <FadeIn>
          <ThemeSelector />
        </FadeIn>
      </MenuContainer>
    </>
  );
};

export default SideMenu;
