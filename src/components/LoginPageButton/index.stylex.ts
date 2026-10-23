import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../styles/tokens.stylex';

export const styles = stylex.create({
   root: {
      height: '44px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      borderRadius: radius.xl,
      fontWeight: 500,
      fontSize: '15px',
      ':disabled': {
         cursor: 'not-allowed',
      },
   },
   transparent: {
      backgroundColor: 'transparent',
      border: 'none',
      color: colors.textSecondary,
      ':hover': {
         backgroundColor: colors.buttonHover,
         color: colors.textPrimary,
      },
   },
   primary: {
      backgroundColor: colors.accent,
      color: colors.white,
      fontSize: '15px',
      ':disabled': {
         color: 'rgba(255, 255, 255, 0.65)',
         opacity: 0.65,
      },
      ':hover': {
         backgroundColor: colors.accentHover,
      },
   },
   outlined: {
      backgroundColor: 'transparent',
      borderColor: colors.border,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colors.textPrimary,
      ':hover': {
         backgroundColor: colors.buttonHover,
      },
   },
});
