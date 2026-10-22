import * as stylex from '@stylexjs/stylex';
import { colors, radius } from '../../../../../../../styles/tokens.stylex';

export const styles = stylex.create({
   root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      width: '100%',
      maxWidth: '472px',
      backgroundColor: colors.bgElevated,
      borderRadius: radius.xl,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.border,
      padding: '12px 0 16px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
   },
   header: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '0 14px 12px 16px',
   },
   actionsIcon: {
      marginLeft: 'auto',
      fontSize: '1.2rem',
      color: colors.textSecondary,
      ':hover': {
         color: colors.textPrimary,
      },
   },
   topUsername: {
      fontSize: '0.9rem',
      fontWeight: 600,
      marginLeft: '8px',
      color: colors.textPrimary,
   },
   separator: {
      fontSize: '0.9rem',
      color: colors.textSecondary,
   },
   createdAt: {
      fontSize: '0.85rem',
      color: colors.textSecondary,
   },
   iconsBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      width: '100%',
      marginTop: '12px',
      padding: '0 16px',
      color: colors.textPrimary,
   },
   iconBarItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
   },
   iconBarItemButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontWeight: 600,
      fontSize: '0.9rem',
      color: colors.textPrimary,
      transition: 'opacity 0.15s ease',
      ':hover': {
         opacity: 0.8,
      },
   },
   descriptionContainer: {
      marginTop: '10px',
      padding: '0 16px',
   },
   bottomUsername: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: colors.textPrimary,
   },
   description: {
      fontSize: '0.9rem',
      color: colors.textPrimary,
      lineHeight: 1.45,
   },
   avatarImage: {
      borderRadius: '50%',
   },
});
