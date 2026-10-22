import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { styles } from './index.stylex';

export interface ZetaLogoProps {
   rootProps?: React.ComponentProps<'div'>;
   useText?: boolean;
   iconSize?: number;
}

export default function ZetaLogo({ rootProps, useText = true, iconSize = 20 }: ZetaLogoProps) {
   return (
      <div {...stylex.props(styles.root)} {...rootProps}>
         <Image
            src="/knowmeme-logo.png"
            alt="KnowMeme"
            width={iconSize}
            height={iconSize}
            {...stylex.props(styles.emblem)}
         />
         {useText && (
            <div {...stylex.props(styles.textRow)}>
               <span {...stylex.props(styles.knowText)}>Know</span>
               <span {...stylex.props(styles.memeText)}>Meme</span>
            </div>
         )}
      </div>
   );
}
