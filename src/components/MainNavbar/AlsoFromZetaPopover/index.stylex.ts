import * as stylex from '@stylexjs/stylex';
import { colors, radius, spacing } from '../../../styles/tokens.stylex';

export const styles = stylex.create({
   root: {
      backgroundColor: colors.bgElevated,
      borderRadius: radius.lg,
      border: `1px solid ${colors.border}`,
      padding: spacing.sm,
      minWidth: '260px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.22)',
      overflow: 'hidden',
      outline: 'none',
   },
   header: {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.sm,
      padding: `${spacing.xs} ${spacing.sm}`,
      marginBottom: spacing.xs,
   },
   headerText: {
      display: 'flex',
      flexDirection: 'column',
   },
   headerTitle: {
      fontSize: '13px',
      fontWeight: 700,
      color: colors.textPrimary,
   },
   headerTagline: {
      fontSize: '11px',
      fontWeight: 600,
      color: colors.brandGreen,
   },
   separator: {
      height: '1px',
      backgroundColor: colors.separator,
      margin: `${spacing.xs} 0`,
   },
   item: {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.sm,
      width: '100%',
      padding: `${spacing.sm} ${spacing.sm}`,
      borderRadius: radius.md,
      color: colors.textPrimary,
      textDecoration: 'none',
      ':hover': {
         backgroundColor: colors.buttonHover,
      },
   },
   itemIcon: {
      color: colors.brandCyan,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   itemText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: 0,
   },
   itemTitle: {
      fontSize: '13px',
      fontWeight: 600,
      color: colors.textPrimary,
   },
   itemSubtitle: {
      fontSize: '11px',
      color: colors.textSecondary,
   },
});
