import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const StyledGreenButton = styled(RectButton)`
  height: ${RFValue(56)}px;
  width: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const StyledLabel = styled.Text`
    color: white;
    font-size: ${RFValue(20)};
`