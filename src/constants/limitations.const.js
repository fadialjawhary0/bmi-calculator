import genderIcon from '../assets/icon-gender.svg';
import ageIcon from '../assets/icon-age.svg';
import muscleIcon from '../assets/icon-muscle.svg';
import pregnancyIcon from '../assets/icon-pregnancy.svg';
import raceIcon from '../assets/icon-race.svg';

export const Limitations = [
  {
    key: 1,
    title: 'Gender',
    body: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    img: genderIcon,
  },
  {
    key: 2,
    title: 'Age',
    body: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
    img: ageIcon,
  },
  {
    key: 3,
    title: 'Muscle',
    body: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    img: muscleIcon,
  },
  {
    key: 4,
    title: 'Pregnancy',
    body: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
    img: pregnancyIcon,
  },
  {
    key: 5,
    title: 'Race',
    body: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
    img: raceIcon,
  },
];
