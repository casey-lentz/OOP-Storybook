import {Well} from './Well';

export default {
    title: 'Well',
    component: Well,
    tags: ['autodocs'],
    argTypes: {
      label: 'TESTUB'
    },
  };
  export const Primary = {
    args: {
      primary: true,
      label: 'Primary'
    },
  };

  export const Secondary = {
    args: {
      primary: false,
      label: 'Secondary'
    },
  };