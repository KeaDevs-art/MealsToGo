/* eslint-disable prettier/prettier */
import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

/*
export const Spacer = ({ variant }) => {
  const TopSmall = styled.View`
    margin-top: ${(props) => props.theme.space[1]};
  `;

  const TopMedium = styled.View`
    margin-top: ${(props) => props.theme.space[2]};
  `;

  const TopLarge = styled.View`
    margin-top: ${(props) => props.theme.space[3]};
  `;

  const LeftSmall = styled.View`
    margin-left: ${(props) => props.theme.space[1]};
  `;

  const LeftMedium = styled.View`
    margin-left: ${(props) => props.theme.space[2]};
  `;

  const LeftLarge = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
  `;

  switch (variant) {
    case "top.medium":
      return <TopMedium />;
      case "top.large":
      return <TopLarge />;
      case "left.small":
      return <LeftSmall />;
      case "left.medium":
      return <LeftMedium />;
      case "left.large":
      return <LeftLarge />;
    default:
      return <TopSmall />;
  }
};
 */
