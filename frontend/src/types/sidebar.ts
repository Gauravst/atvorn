import type { FC, SVGProps } from 'react';

type TablerIcon = FC<SVGProps<SVGSVGElement>>;

export type NavItem = {
  title?: string;
  url?: string;
  icon?: TablerIcon;
  badge?: string | number;
  target?: '_blank' | '_self';
  items?: NavItem[];
};
