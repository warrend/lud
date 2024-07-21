import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../theme';
import { XIcon } from '../components/icons/x-icon/index';

type TFastTypeLabels = {
  [key in keyof typeof fastTypes]: string;
};

type TFastLabels = {
  [key in keyof typeof fasts]: string;
};

export const communicationFast = {
  email: 'Email',
  slack: 'Slack',
  telegram: 'Telegram',
  text: 'Text',
  whatsapp: 'Whatsapp',
};

export const travelFast = {
  lyft: 'Lyft',
  uber: 'Uber',
};

export const generalFast = {
  gaming: 'Gaming',
  internet: 'Internet',
  news: 'News',
  phone: 'Phone',
  socialMedia: 'Social Media',
  total: 'Total',
  tv: 'TV',
};

export const socialFast = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  reddit: 'Reddit',
  snapchat: 'Snapchat',
  tiktok: 'Tiktok',
  twitter: 'X',
  youtube: 'YouTube',
};

export const fasts = {
  general: generalFast,
  social: socialFast,
  communication: communicationFast,
  travel: travelFast,
} as const;

export type TFastName = keyof typeof allFastNames;

export const allFastNames = {
  ...socialFast,
  ...generalFast,
  ...travelFast,
  ...communicationFast,
} as const;

type TFastNameIcons = {
  [key in keyof typeof allFastNames]: React.ReactNode;
};

export const fastCategoryLabels: TFastLabels = {
  social: 'Social Media',
  communication: 'Communications',
  travel: 'Travel',
  general: 'General',
};

const ICON_SIZE = 18;
export const ICON_COLOR = colors.primary500;

export const fastNameIcons: TFastNameIcons = {
  twitter: <XIcon color={ICON_COLOR} size={ICON_SIZE} />,
  facebook: (
    <FontAwesome5 name="facebook-f" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  snapchat: (
    <FontAwesome5 name="snapchat-ghost" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  tiktok: <FontAwesome5 name="tiktok" size={ICON_SIZE} color={ICON_COLOR} />,
  instagram: (
    <FontAwesome5 name="instagram" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  whatsapp: (
    <FontAwesome5 name="whatsapp" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  telegram: (
    <FontAwesome5 name="telegram" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  slack: <FontAwesome5 name="slack" size={ICON_SIZE} color={ICON_COLOR} />,
  reddit: (
    <FontAwesome5 name="reddit-alien" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  youtube: <FontAwesome5 name="youtube" size={ICON_SIZE} color={ICON_COLOR} />,
  uber: <FontAwesome5 name="uber" size={ICON_SIZE} color={ICON_COLOR} />,
  lyft: <FontAwesome5 name="lyft" size={ICON_SIZE} color={ICON_COLOR} />,
  total: (
    <FontAwesome5 name="globe-americas" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  tv: <FontAwesome5 name="tv" size={ICON_SIZE} color={ICON_COLOR} />,
  text: <FontAwesome5 name="comment" size={ICON_SIZE} color={ICON_COLOR} />,
  internet: <FontAwesome5 name="wifi" size={ICON_SIZE} color={ICON_COLOR} />,
  phone: <FontAwesome5 name="phone" size={ICON_SIZE} color={ICON_COLOR} />,
  gaming: <FontAwesome5 name="gamepad" size={ICON_SIZE} color={ICON_COLOR} />,
  socialMedia: (
    <FontAwesome5 name="bullhorn" size={ICON_SIZE} color={ICON_COLOR} />
  ),
  news: <FontAwesome5 name="newspaper" size={ICON_SIZE} color={ICON_COLOR} />,
  email: <FontAwesome5 name="inbox" size={ICON_SIZE} color={ICON_COLOR} />,
} as const;

const micro = {
  micro15: { label: '15 minutes', duration: 1 },
  micro30: { label: '30 minutes', duration: 30 },
  micro45: { label: '45 minutes', duration: 45 },
};

const quick = {
  quick1: { label: '1 hour', duration: 1 * 60 },
  quick2: { label: '2 hours', duration: 2 * 60 },
  quick4: { label: '4 hours', duration: 4 * 60 },
  quick8: { label: '8 hours', duration: 8 * 60 },
};

const long = {
  long10: { label: '10 hours', duration: 10 * 60 },
  long12: { label: '12 hours', duration: 12 * 60 },
  long16: { label: '16 hours', duration: 16 * 60 },
  long18: { label: '18 hours', duration: 18 * 60 },
};

const extended = {
  extended1: { label: '24 hours', duration: 24 * 60 },
  extended2: { label: '48 hours', duration: 48 * 60 },
  extended3: { label: '72 hours', duration: 72 * 60 },
  extended7: { label: 'One week', duration: 168 * 60 },
};

export const fastTypeLabels: TFastTypeLabels = {
  micro: 'Micro Fasts',
  quick: 'Quick Fasts',
  long: 'Long Fasts',
  extended: 'Extended Fasts',
} as const;

export const allFastTypes = {
  ...micro,
  ...quick,
  ...long,
  ...extended,
};

export type TFastKey = keyof typeof allFastTypes;

export const fastTypes = {
  micro,
  quick,
  long,
  extended,
} as const;
