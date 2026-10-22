import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { styles } from './index.stylex';

export interface KnowMemeLogoProps {
   size?: 'sm' | 'md' | 'lg' | 'xl';
   showWordmark?: boolean;
   showTagline?: boolean;
   variant?: 'standard' | 'badge';
   rootProps?: React.ComponentProps<'div'>;
}

const sizeConfig = {
   sm: { emblemSize: 24, fontSize: '1rem', taglineDisplay: false },
   md: { emblemSize: 32, fontSize: '1.25rem', taglineDisplay: true },
   lg: { emblemSize: 44, fontSize: '1.65rem', taglineDisplay: true },
   xl: { emblemSize: 64, fontSize: '2.25rem', taglineDisplay: true },
} as const;

export default function KnowMemeLogo({
   size = 'md',
   showWordmark = true,
   showTagline = false,
   variant = 'standard',
   rootProps,
}: KnowMemeLogoProps) {
   const config = sizeConfig[size];

   if (variant === 'badge') {
      return (
         <div {...stylex.props(styles.badgeRoot)} {...rootProps}>
            <Image
               src="/knowmeme-logo.png"
               alt="KnowMeme emblem"
               width={16}
               height={16}
               {...stylex.props(styles.emblemImage)}
            />
            <span {...stylex.props(styles.badgeText)}>KnowMeme</span>
            <span {...stylex.props(styles.badgeTrustText)}>Trust Verified</span>
         </div>
      );
   }

   return (
      <div {...stylex.props(styles.root)} {...rootProps}>
         <div
            {...stylex.props(styles.emblemContainer)}
            style={{ width: config.emblemSize, height: config.emblemSize }}
         >
            <Image
               src="/knowmeme-logo.png"
               alt="KnowMeme emblem"
               width={config.emblemSize}
               height={config.emblemSize}
               priority
               {...stylex.props(styles.emblemImage)}
            />
         </div>
         {showWordmark && (
            <div {...stylex.props(styles.textContainer)}>
               <div {...stylex.props(styles.wordmarkRow)} style={{ fontSize: config.fontSize }}>
                  <span {...stylex.props(styles.knowText)}>Know</span>
                  <span {...stylex.props(styles.memeText)}>Meme</span>
               </div>
               {showTagline && config.taglineDisplay && (
                  <span {...stylex.props(styles.tagline)}>AI-Powered Digital Trust</span>
               )}
            </div>
         )}
      </div>
   );
}
