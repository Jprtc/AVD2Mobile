import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const MainHeading = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 18px;
`;
export const LowerText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 40px;
  width: 85%;
`;

export const EmojiContainer = styled.View`
  margin-bottom: 40px;
`;

export const EmojiIcon = styled(FontAwesome5)``;
