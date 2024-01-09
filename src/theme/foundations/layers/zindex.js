const zIndex = {
  default: 1,
  sticky: 1000,
  fixed: 1010,
  overlay: 1020,
  modalBackdrop: 1020,
  modal: 1050,
  dialog: 1050,
  callout: 1070,
  popover: 1080,
  tooltip: 1090,
  snackbar: 1100,
  toast: 1100,
  header: 1020,
  // z-index of the msTeams header bar is 2050
  // this is to ensure panel is always on top of the header bar
  panel: 2051,
};

export default zIndex;
