'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineGppGood, MdOutlineShield, MdSecurity } from 'react-icons/md';
import type { MainSidebarStyles } from '../index.stylex';
import { styles } from './index.stylex';

interface AlsoFromZetaPopoverProps {
   mainSidebarStyles: MainSidebarStyles;
}

export function AlsoFromZetaPopover({ mainSidebarStyles }: AlsoFromZetaPopoverProps) {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <button aria-label="Digital Trust Hub" {...stylex.props(mainSidebarStyles.navItem)}>
               <MdOutlineShield size={28} />
               <span {...stylex.props(mainSidebarStyles.navItemLabel)}>Digital Trust</span>
            </button>
         </PopoverTrigger>
         <PopoverContent side="top" sideOffset={8} {...stylex.props(styles.root)}>
            <div {...stylex.props(styles.header)}>
               <Image
                  src="/knowmeme-logo.png"
                  alt="KnowMeme"
                  width={24}
                  height={24}
                  style={{ borderRadius: '6px' }}
               />
               <div {...stylex.props(styles.headerText)}>
                  <span {...stylex.props(styles.headerTitle)}>KnowMeme Trust</span>
                  <span {...stylex.props(styles.headerTagline)}>AI-Powered Digital Trust</span>
               </div>
            </div>

            <div {...stylex.props(styles.separator)} />

            <Link href="/" {...stylex.props(styles.item)}>
               <div {...stylex.props(styles.itemIcon)}>
                  <MdOutlineGppGood size={20} />
               </div>
               <div {...stylex.props(styles.itemText)}>
                  <span {...stylex.props(styles.itemTitle)}>Authentic Community</span>
                  <span {...stylex.props(styles.itemSubtitle)}>
                     Verified profiles & real creators
                  </span>
               </div>
            </Link>

            <Link href="/" {...stylex.props(styles.item)}>
               <div {...stylex.props(styles.itemIcon)}>
                  <MdSecurity size={20} />
               </div>
               <div {...stylex.props(styles.itemText)}>
                  <span {...stylex.props(styles.itemTitle)}>Safety & Transparency</span>
                  <span {...stylex.props(styles.itemSubtitle)}>
                     Privacy-first digital standards
                  </span>
               </div>
            </Link>
         </PopoverContent>
      </Popover>
   );
}
