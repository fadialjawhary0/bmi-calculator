import { BmiLimits } from '../constants/bmiLimits.const';

export const ImperialBMI = ({ heightFeet, heightInches, weightStones, weightPounds }) => {
  if (heightFeet > 0 && heightInches > 0 && weightStones > 0 && weightPounds > 0) {
    const heightInInches = heightFeet * 12 + heightInches;
    const heightInCm = heightInInches * 2.54;

    const weightInPounds = weightStones * 14 + weightPounds;
    const weightInKg = weightInPounds * 0.453592;

    const heightInMeters = heightInCm / 100;
    const bmi = weightInKg / Math.pow(heightInMeters, 2);
    const formattedNumber = bmi.toFixed(1);

    const minIdealWeightKg = BmiLimits.HEALTHY.min * Math.pow(heightInMeters, 2);
    const maxIdealWeightKg = BmiLimits.HEALTHY.max * Math.pow(heightInMeters, 2);

    return {
      result: Number(formattedNumber),
      idealWeight: {
        min: minIdealWeightKg,
        max: maxIdealWeightKg,
      },
    };
  }
  return { result: null, idealWeight: { min: null, max: null } };
};
