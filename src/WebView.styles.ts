import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  errorText: TextStyle;
  errorTextTitle: TextStyle;
  loadingOrErrorView: ViewStyle;
  webView: ViewStyle;
  loadingProgressBar: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  loadingOrErrorView: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  loadingProgressBar: {
    height: 20,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 2,
  },
  errorTextTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  webView: {
    backgroundColor: 'black',
  },
});

export default styles;
