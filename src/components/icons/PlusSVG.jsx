const PlusSVG = ({classes = 'size-4', color = 'white'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      className={classes}
    >
      <path
        d="M4.75748 12V7.24779H0V4.73894H4.75748V0H7.2691V4.73894H12V7.24779H7.2691V12H4.75748Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusSVG;
