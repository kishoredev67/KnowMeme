import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../styles/tokens.stylex';

export const styles = stylex.create({
   viewport: {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(420px, calc(100vw - 32px))',
      zIndex: 9999,
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      pointerEvents: 'none',
   },
   root: {
      width: '100%',
      backgroundColor: colors.bgElevated,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.border,
      borderRadius: radius.lg,
      padding: '14px 18px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.24)',
      pointerEvents: 'auto',
   },
   description: {
      color: colors.textPrimary,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '1.4',
      textAlign: 'center',
   },
});
