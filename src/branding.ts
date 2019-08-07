export interface Config {
  preparing_title: Font;
  preparing_title_transform: string;
  preparing_title_spacing: string;
  preparing_title_color: Color;
  preparing_title_background: Color;
  preparing_numbers: Font;
  preparing_numbers_transform: string;
  preparing_numbers_spacing: string;
  preparing_numbers_color: Color;
  preparing_numbers_background: Color;
  ready_title: Font;
  ready_title_transform: string;
  ready_title_spacing: string;
  ready_title_color: Color;
  ready_title_background: Color;
  ready_numbers: Font;
  ready_numbers_transform: string;
  ready_numbers_spacing: string;
  ready_numbers_color: Color;
  ready_numbers_background: Color;
  ready_numbers_shadow: Shadow;
}

export interface Color {
  hex: string; // eg. #ffffff
  opacity: number; // eg 0.6
}

export interface Gradient3step {
  start?: Color;
  middle?: Color;
  end?: Color;
  direction: string;
}
export interface Gradient {
  start?: Color;
  end?: Color;
  direction: string;
}

export interface Shadow {
  hOffset: string; // px;
  vOffset: string; // px;
  blur: string; // px;
  spread: string; // px;
  color: Color;
}

export interface Border {
  width: string; // px
  type: string; // eg. solid
  color: Color;
}

export interface Font {
  style: string;
  weight: string;
  size_lineHeight: string;
  family: string;
}

export const brandingConfig: Config = {
  preparing_title: {
    style: 'normal',
    weight: '500',
    size_lineHeight: '60px/75px',
    family: 'Open Sans, sans-serif',
  },
  preparing_title_transform: 'unset',
  preparing_title_spacing: '-1.45px',
  preparing_title_color: {
    hex: '#ffffff',
    opacity: 1,
  },
  preparing_title_background: {
    hex: '#808083',
    opacity: 1,
  },
  preparing_numbers: {
    style: 'normal',
    weight: '600',
    size_lineHeight: '100px/125px',
    family: 'Open Sans, sans-serif',
  },
  preparing_numbers_transform: 'unset',
  preparing_numbers_spacing: '8px',
  preparing_numbers_color: {
    hex: '#808083',
    opacity: 1,
  },
  preparing_numbers_background: {
    hex: '#f5f5f5',
    opacity: 1,
  },
  ready_title: {
    style: 'normal',
    weight: 'bold',
    size_lineHeight: '60px/75px',
    family: 'Open Sans, sans-serif',
  },
  ready_title_transform: 'unset',
  ready_title_spacing: '-1.45px',
  ready_title_color: {
    hex: '#ffffff',
    opacity: 1,
  },
  ready_title_background: {
    hex: '#ff6600',
    opacity: 1,
  },
  ready_numbers: {
    style: 'normal',
    weight: '800',
    size_lineHeight: '170px/200px',
    family: 'Open Sans, sans-serif',
  },
  ready_numbers_transform: 'unset',
  ready_numbers_spacing: '7.44px',
  ready_numbers_color: {
    hex: '#ff6600',
    opacity: 1,
  },
  ready_numbers_background: {
    hex: '#ffffff',
    opacity: 1,
  },
  ready_numbers_shadow: {
    hOffset: '0',
    vOffset: '2px',
    blur: '24px',
    spread: '0',
    color: {
      hex: '#000000',
      opacity: 0.14,
    },
  },
};
