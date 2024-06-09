import { BmiLimits } from '../constants/bmiLimits';

export const GetWeightLabel = bmi => {
  if (bmi < BmiLimits.UNDERWEIGHT.max) {
    return BmiLimits.UNDERWEIGHT.label;
  } else if (bmi < BmiLimits.HEALTHY.max) {
    return BmiLimits.HEALTHY.label;
  } else if (bmi < BmiLimits.OVERWEIGHT.max) {
    return BmiLimits.OVERWEIGHT.label;
  } else {
    return BmiLimits.OBESE.label;
  }
};
