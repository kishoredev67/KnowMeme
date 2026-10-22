import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { styles } from './index.stylex';

export const footerLinks = [
   'About KnowMeme',
   'Digital Trust',
   'Community Guidelines',
   'Transparency',
   'Help Center',
   'API',
   'Privacy Policy',
   'Cookie Settings',
   'Terms of Service',
   'Creator Verification',
   'Safety & Integrity',
] as const;

export default function AuthPagesFooter({ ...props }: React.ComponentProps<'footer'>) {
   return (
      <footer {...stylex.props(styles.root)} {...props}>
         <div {...stylex.props(styles.footerLinks)}>
            {footerLinks.map(item => (
               <Link key={item} href="/" {...stylex.props(styles.footerLink)}>
                  {item}
               </Link>
            ))}
         </div>
         <div {...stylex.props(styles.footerMetaRow)}>
            <button type="button" {...stylex.props(styles.languageButton)}>
               English
               <MdKeyboardArrowDown size={14} />
            </button>
            <span>© {new Date().getFullYear()} KnowMeme · AI-Powered Digital Trust</span>
         </div>
      </footer>
   );
}
