import { BmiLimits } from '../constants';

export const MetricBMI = ({ height, weight }) => {
  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    const bmi = weight / Math.pow(heightInMeters, 2);
    const formattedNumber = bmi.toFixed(1);

    const minIdealWeight = BmiLimits.HEALTHY.min * Math.pow(heightInMeters, 2);
    const maxIdealWeight = BmiLimits.HEALTHY.max * Math.pow(heightInMeters, 2);

    return {
      result: Number(formattedNumber),
      idealWeight: { min: minIdealWeight.toFixed(0), max: maxIdealWeight.toFixed(0) },
    };
  }
  return { result: null, idealWeight: { min: null, max: null } };
};
