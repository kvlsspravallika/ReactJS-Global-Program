import Counter from './Counter';

export default {
  title: 'Counter',
  component: Counter,
};

export const Default = {
  args: {
    initialValue: 0,
  },
};

export const Initial10 = {
  args: {
    initialValue: 10,
  },
};

export const NegativeInitial = {
  args: {
    initialValue: -5,
  },
};

export const LargeInitial = {
  args: {
    initialValue: 1000,
  },
};
