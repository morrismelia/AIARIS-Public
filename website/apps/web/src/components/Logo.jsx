import React from 'react';
import { cn } from '@/lib/utils';

export const LOGO_VERTICAL =
    'https://horizons-cdn.hostinger.com/9dc95393-aced-44f6-a19c-1ca54b7e2c65/0e538c28e9a4f6cba3611a633b66ae15.png';
export const LOGO_HORIZONTAL =
    'https://horizons-cdn.hostinger.com/9dc95393-aced-44f6-a19c-1ca54b7e2c65/3abe733815a83c15eb3391bfd6c4253c.png';

/** Compact horizontal lockup for header / footer / nav */
export default function Logo({ className, imgClassName }) {
    return (
        <span className={cn('inline-flex items-center', className)}>
            <img
                src={LOGO_HORIZONTAL}
                alt="AIARIS"
                className={cn('h-9 w-auto object-contain sm:h-10', imgClassName)}
                decoding="async"
            />
        </span>
    );
}

/** Tall vertical lockup for hero / large brand moments */
export function LogoVertical({ className, imgClassName }) {
    return (
        <span className={cn('inline-flex items-center justify-center', className)}>
            <img
                src={LOGO_VERTICAL}
                alt="AIARIS"
                className={cn('h-28 w-auto object-contain sm:h-36 lg:h-44', imgClassName)}
                decoding="async"
            />
        </span>
    );
}
