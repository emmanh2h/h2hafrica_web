export type FixedGroup = {
  icon?: string[] | null;
  text?: string | null;
};

export type IconTitleBody = {
  icon?: string[] | null;
  title?: string | null;
  body?: string | null;
};

export type Stat = {
  number?: string | null;
  label?: string | null;
};

export type Quote = {
  label?: string | null;
  rating?: string | null;
  outOf?: string | null;
  body?: string | null;
  badgeText?: string | null;
};

export type HomeFields = {
  heroHeading?: string | null;
  heroSubtext?: string | null;
  heroImage?: { node: { sourceUrl: string } } | null;
  whyImage?: { node: { sourceUrl: string } } | null;

  whoBadge1?: string | null;
  whoBadge2?: string | null;
  whoBadge3?: string | null;
  whoHeading?: string | null;
  whoBody?: string | null;
  whoLinkLabel?: string | null;

  whatEyebrow?: string | null;
  whatHeading?: string | null;
  whatLinkLabel?: string | null;

  whyEyebrow?: string | null;
  whyHeading?: string | null;
  whyReason1?: FixedGroup | null;
  whyReason2?: FixedGroup | null;
  whyReason3?: FixedGroup | null;
  whyReason4?: FixedGroup | null;
  whyQuoteLabel?: string | null;
  whyQuoteRating?: string | null;
  whyQuoteOutOf?: string | null;
  whyQuoteBody?: string | null;
  whyQuoteBadgeText?: string | null;

  upcomingEyebrow?: string | null;
  upcomingHeading?: string | null;
  upcomingLinkLabel?: string | null;

  wordsEyebrow?: string | null;
  wordsHeading?: string | null;

  tipsEyebrow?: string | null;
  tipsHeading?: string | null;
  tipsLinkLabel?: string | null;

  ctaHeading?: string | null;
  ctaBody?: string | null;
  ctaButtonLabel?: string | null;
};

export type AboutFields = {
  heroImage?: { node: { sourceUrl: string } } | null;
  heroEyebrow?: string | null;
  heroHeading?: string | null;
  heroSubtext?: string | null;

  storyEyebrow?: string | null;
  storyHeading?: string | null;
  storyBody?: string | null;
  storyImage?: { node: { sourceUrl: string } } | null;

  recordEyebrow?: string | null;
  recordIntro?: string | null;
  recordStat1?: Stat | null;
  recordStat2?: Stat | null;
  recordStat3?: Stat | null;
  recordStat4?: Stat | null;
  recordNote?: string | null;

  homecomingEyebrow?: string | null;
  homecomingHeading?: string | null;
  homecomingBody?: string | null;

  quoteLabel?: string | null;
  quoteRating?: string | null;
  quoteOutOf?: string | null;
  quoteBody?: string | null;
  quoteBadgeText?: string | null;

  howImage?: { node: { sourceUrl: string } } | null;
  howHeading?: string | null;
  howSubtext?: string | null;
  howStep1?: IconTitleBody | null;
  howStep2?: IconTitleBody | null;
  howStep3?: IconTitleBody | null;
  howStep4?: IconTitleBody | null;

  standHeading?: string | null;
  standItem1?: IconTitleBody | null;
  standItem2?: IconTitleBody | null;
  standItem3?: IconTitleBody | null;
  standItem4?: IconTitleBody | null;

  ctaHeading?: string | null;
  ctaBody?: string | null;
  ctaButtonLabel?: string | null;
};

export type ServicesFields = {
  heroImage?: { node: { sourceUrl: string } } | null;
  heroEyebrow?: string | null;
  heroHeading?: string | null;
  heroSubtext?: string | null;
  ctaHeading?: string | null;
  ctaBody?: string | null;
  ctaButtonLabel?: string | null;
};

export type ServiceNode = {
  title: string;
  slug: string;
  featuredImage?: { node: { sourceUrl: string; altText?: string | null } } | null;
  serviceDetails?: {
    icon?: string[] | null;
    summary?: string | null;
    intro?: string | null;
    features?: string | null;
  } | null;
};

export type TrainingEventNode = {
  title: string;
  excerpt?: string | null;
  slug: string;
  featuredImage?: { node: { sourceUrl: string; altText?: string | null } } | null;
  eventDetails?: {
    eventDateDisplay?: string | null;
    startTime?: string | null;
    endTime?: string | null;
    mode?: string[] | null;
    venue?: string | null;
  } | null;
};

export type TestimonialNode = {
  title: string;
  testimonialDetails?: {
    quote?: string | null;
    authorRole?: string | null;
  } | null;
};

export type TipNode = {
  title: string;
  slug: string;
  excerpt?: string | null;
  featuredImage?: { node: { sourceUrl: string; altText?: string | null } } | null;
  tipCategories?: { nodes: { name: string }[] } | null;
};
