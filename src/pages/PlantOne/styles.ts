import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green_light};
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View``;

export const Photo = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
`;

export const LogoText = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const BoldGreenText = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green};
`;
