export default (navigation, screen, fromBottom = false) => {
  const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0;
  const params = {
    screenNumber: screenNumber + 1,
    fromBottom
  };
  navigation.navigate(screen, params);
};
