import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.background};
`

export const Header = styled.View`
    width:100%;
    height: 20%;
    margin-top:60px;
    flex-direction: row;
    justify-content: space-around;
`

export const AmbientText = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: left;
    color: ${({ theme }) => theme.colors.heading};
    margin-left: 24px;
    margin-bottom: 20px;
`

export const HugeText = styled.Text`
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
`

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 5px;
`;

export const StyledSmallButton = styled(RectButton)`
    height: 40px;
    width: 80px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray};
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`

export const ButtonLabel = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
    color: ${({ theme }) => theme.colors.body_dark};
`

export const HorizontalScrollView = styled(ScrollView)`
    gap:8px;
`