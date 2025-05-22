declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module 'framer-motion' {
  import { ComponentType, HTMLAttributes, AnchorHTMLAttributes } from 'react';
  import { PaperProps } from '@mui/material/Paper';

  interface MotionProps extends HTMLAttributes<HTMLElement> {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
    elevation?: number;
  }

  interface MotionAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
  }

  interface MotionPaperProps extends PaperProps {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
  }

  interface MotionComponent {
    <T extends ComponentType<any>>(component: T): ComponentType<T extends ComponentType<infer P> ? P & MotionProps : never>;
  }

  export const motion: {
    div: ComponentType<MotionProps>;
    a: ComponentType<MotionAnchorProps>;
    [key: string]: ComponentType<MotionProps>;
  } & MotionComponent;
} 