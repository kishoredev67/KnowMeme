import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../../../styles/tokens.stylex';

export const styles = stylex.create({
   dropZone: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      height: '100%',
      padding: '80px 40px',
      transition: 'background-color 0.2s ease',

      '@media (max-width: 767px)': {
         padding: '20px 20px',
      },
   },
   dropZoneActive: {
      backgroundColor: 'rgba(255, 105, 40, 0.08)',
   },
   dropText: {
      fontSize: '20px',
      fontWeight: 500,
      color: colors.textPrimary,
      margin: 0,
   },
   iconColor: {
      color: colors.textSecondary,
   },
   selectButton: {
      padding: '8px 16px',
      borderRadius: radius.md,
      backgroundColor: colors.accent,
      color: 'white',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      ':hover': {
         backgroundColor: colors.accentHover,
      },
   },
});

export const stepHeaderStyles = stylex.create({
   closeButton: {
      display: 'flex',
      padding: '8px',
      color: colors.textPrimary,
      borderRadius: radius.full,
      ':hover': {
         backgroundColor: colors.buttonHover,
      },
   },
});
