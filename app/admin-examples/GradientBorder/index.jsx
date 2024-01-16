import AdmBox from " components/AdmBox";

function GradientBorder(props) {
  const { backgroundImage, children, borderRadius, width, minWidth, ...rest } = props;
  return (
    <AdmBox
      padding="2px"
      width={width}
      minWidth={minWidth}
      height="fit-content"
      borderRadius={borderRadius}
      sx={{
        height: "fit-content",
        backgroundImage: backgroundImage
          ? backgroundImage
          : "radial-gradient(94.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      {...rest}
    >
      {children}
    </AdmBox>
  );
}

export default GradientBorder;
