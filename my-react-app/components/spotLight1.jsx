const SpotCheck1 = () => {
  const logHover = () => {
    console.log("I was hovered!");
  };
  return <button onMouseEnter={logHover}>Hover me!</button>;
};

export default SpotCheck1;
