// Return random math sign from these three: {+, -, *}

export default () => {
  const mathSigns = ['+', '-', '*'];
  return mathSigns[Math.floor(Math.random() * mathSigns.length)];
};
