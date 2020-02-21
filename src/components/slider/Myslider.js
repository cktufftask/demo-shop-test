import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const Myslider = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([10, 999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);

  };

  return (
    <div className={classes.root}>
      <Slider
        min={100}
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="mt-15 d-flex justify-content-lg-between">
        <div>{100}</div>
        <div className="strong">{"Price"}</div>
        <div>{1000}</div>
      </div>
    </div>
  );
}


export default Myslider;