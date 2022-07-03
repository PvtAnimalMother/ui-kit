import React from 'react';
import ButtonProps from './props';
import { jsx as _, css } from '@emotion/react';

export default React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      // size = 'medium', variant = 'primary',
      children,
      className,
    },
    ref,
  ) => {
    return (
      <button
        css={css`
          background-color: #fff;
        `}
        className={className}
        onClick={(e) => {
          onClick && onClick(e);
        }}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

export { ButtonProps };
