import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import KnowMemeLogo from '@/src/components/KnowMemeLogo';
import { getAuthProfile } from '@/src/lib/supabase/getAuthProfile';
import { getCachedUser } from '@/src/lib/supabase/getCachedUser';
import { AlsoFromZetaPopover } from './AlsoFromZetaPopover';
import { styles } from './index.stylex';
import { NavItems } from './NavItems';
import { SettingsPopoverButton } from './SettingsPopover';

export default async function MainNavbar() {
   const [profile, user] = await Promise.all([getAuthProfile(), getCachedUser()]);
   const isAnonymous = user?.is_anonymous ?? false;

   return (
      <div {...stylex.props(styles.root)}>
         <Link href="/" aria-label="KnowMeme Home" {...stylex.props(styles.logoLink)}>
            <KnowMemeLogo size="md" showTagline={false} />
         </Link>

         <nav {...stylex.props(styles.nav)}>
            <NavItems mainSidebarStyles={styles} profile={profile} isAnonymous={isAnonymous} />
         </nav>

         <div {...stylex.props(styles.bottomSection)}>
            <SettingsPopoverButton
               hideAiContent={profile?.hide_ai_content ?? false}
               isAnonymous={isAnonymous}
            />
            <AlsoFromZetaPopover mainSidebarStyles={styles} />
         </div>
      </div>
   );
}
