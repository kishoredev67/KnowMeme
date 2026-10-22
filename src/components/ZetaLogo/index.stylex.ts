import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../styles/tokens.stylex';

export const styles = stylex.create({
   root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
   },
   emblem: {
      borderRadius: radius.xs,
   },
   textRow: {
      display: 'flex',
      alignItems: 'baseline',
      fontSize: '0.95rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
   },
   knowText: {
      color: colors.textPrimary,
   },
   memeText: {
      color: colors.brandOrange,
   },
});
