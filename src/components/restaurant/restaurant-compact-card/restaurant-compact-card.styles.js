/* eslint-disable prettier/prettier */
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

export const CompactCard = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactCardCover = styled.Image`
  border-dadius: 10px;
  width: 120px;
  height: 100px;
`;

export const CompactWebView = styled(WebView)`
  border-dadius: 10px;
  width: 120px;
  height: 100px;
`;
