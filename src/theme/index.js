const sizes = [8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80];

const fontSizes = {
  title: 20,
  subtitle: 18,
  caption: 16,
  p: 14,
  p2: 12,
  button: 14,
  h5: 24,
  h4: 34,
  h3: 45,
  h2: 56,
  h1: 112,
};

const spacing = [4, 10, 15, 20, 25, 30, 35, 40, 50];

const spacer = {
  topSm: {
    marginTop: spacing[0],
  },
  topMd: {
    marginTop: spacing[1],
  },
  topLg: {
    marginTop: spacing[2],
  },
  topXl: {
    marginTop: spacing[3],
  },
  bottomSm: {
    marginBottom: spacing[0],
  },
  bottomMd: {
    marginBottom: spacing[1],
  },
  bottomLg: {
    marginBottom: spacing[2],
  },
  bottomXl: {
    marginBottom: spacing[3],
  },
  leftSm: {
    marginLeft: spacing[0],
  },
  leftMd: {
    marginLeft: spacing[1],
  },
  leftLg: {
    marginLeft: spacing[2],
  },
  leftXl: {
    marginLeft: spacing[3],
  },
  rightSm: {
    marginRight: spacing[0],
  },
  rightMd: {
    marginRight: spacing[1],
  },
  rightLg: {
    marginRight: spacing[2],
  },
  rightXl: {
    marginRight: spacing[3],
  },
};

const doubleSpacer = {
  tbSm: {
    marginTop: spacing[0],
    marginBottom: spacing[0]
  },
  tbMd: {
    marginTop: spacing[1],
    marginBottom: spacing[1]
  },
  tbLg: {
    marginTop: spacing[2],
    marginBottom: spacing[2]
  },
  tbXl: {
    marginTop: spacing[3],
    marginBottom: spacing[3]
  },
  lrSm: {
    marginLeft: spacing[0],
    marginRight: spacing[0]
  },
  lrMd: {
    marginLeft: spacing[1],
    marginRight: spacing[1]
  },
  lrLg: {
    marginLeft: spacing[2],
    marginRight: spacing[2]
  },
  lrXl: {
    marginLeft: spacing[3],
    marginRight: spacing[3]
  },
};

const horizontalRule = {
  sm: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: spacing[1],
    marginBottom: spacing[1],
  },
  md: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: spacing[2],
    marginBottom: spacing[2],
  },
  lg: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: spacing[3],
    marginBottom: spacing[3],
  },
};

export const theme = {
  sizes,
  fontSizes,
  spacing,
  spacer,
  doubleSpacer,
  horizontalRule,
};
