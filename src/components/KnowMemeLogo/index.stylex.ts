import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../styles/tokens.stylex';

export const styles = stylex.create({
   root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
   },
   emblemContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius.md,
      overflow: 'hidden',
      flexShrink: 0,
   },
   emblemImage: {
      borderRadius: radius.sm,
      objectFit: 'contain',
   },
   textContainer: {
      display: 'var(--label-display, flex)',
      flexDirection: 'column',
      justifyContent: 'center',
      lineHeight: 1.1,
   },
   wordmarkRow: {
      display: 'flex',
      alignItems: 'baseline',
      letterSpacing: '-0.02em',
   },
   knowText: {
      fontWeight: 800,
      color: colors.textPrimary,
   },
   memeText: {
      fontWeight: 800,
      color: colors.brandOrange,
   },
   tagline: {
      fontSize: '0.625rem',
      fontWeight: 600,
      color: colors.brandGreen,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginTop: '2px',
   },
   badgeRoot: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: radius.full,
      backgroundColor: colors.bgSecondary,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.border,
   },
   badgeText: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: colors.textSecondary,
   },
   badgeTrustText: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: colors.brandGreen,
   },
});
