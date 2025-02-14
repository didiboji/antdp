import styled from 'styled-components';
import { NavLink } from '@kkt/pro';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 240px;
  height: 100%;
  padding-top: 58px;
`;

export const MenuWrapper = styled.div`
  overflow: auto;
  display: flex;
  padding: 10px 6px;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  box-sizing: border-box;
`;

export const MenuLabel = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-start;
  align-items: stretch;
  padding: 5px 12px;
  border-radius: 4px;
  color: #4f5866;
  font-size: 14px;
  margin-left: 0;
  &:hover,
  &[aria-current='page'],
  &.active {
    background-color:#eff6ff;
    color: #60a5fa;
  }
  &.active {
    background-color: #eff6ff;
    gap: 5px;
  }
`;

export const MenuA = styled.a`
  display: flex;
  text-decoration: none;
  justify-content: flex-start;
  align-items: stretch;
  padding: 5px 12px;
  border-radius: 4px;
  color: #4f5866;
  margin-left: 0;
  &:hover,
  &[aria-current='page'],
  &.active {
    background-color:#eff6ff;
    color: #60a5fa;
  }
  &.active {
    background-color: #eff6ff;
    gap: 5px;
  }
`;

export const Divider = styled.div`
  font-size: 16px;
  font-weight: 900;
  padding: 15px 5px 5px 5px;
  color: var(--color-fg-default);
`;
