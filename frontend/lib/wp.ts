import { fetchGraphQL } from "@/lib/graphql";
import type {
  HomeFields,
  AboutFields,
  ServicesFields,
  ServiceNode,
  TrainingEventNode,
  TestimonialNode,
  TipNode,
} from "@/lib/types";

const FIXED_GROUP = `icon text`;
const ICON_TITLE_BODY = `icon title body`;
const STAT = `number label`;
const QUOTE = `label rating outOf body badgeText`;

export async function getHomePage() {
  const query = `
    query HomePage {
      page(id: "home", idType: URI) {
        homeFields {
          heroHeading heroSubtext heroImage { node { sourceUrl } }
          whoBadge1 whoBadge2 whoBadge3 whoHeading whoBody whoLinkLabel
          whatEyebrow whatHeading whatLinkLabel
          whyImage { node { sourceUrl } }
          whyEyebrow whyHeading
          whyReason1 { ${FIXED_GROUP} }
          whyReason2 { ${FIXED_GROUP} }
          whyReason3 { ${FIXED_GROUP} }
          whyReason4 { ${FIXED_GROUP} }
          whyQuoteLabel whyQuoteRating whyQuoteOutOf whyQuoteBody whyQuoteBadgeText
          upcomingEyebrow upcomingHeading upcomingLinkLabel
          wordsEyebrow wordsHeading
          tipsEyebrow tipsHeading tipsLinkLabel
          ctaHeading ctaBody ctaButtonLabel
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ page: { homeFields: HomeFields } }>(query);
  return data.page.homeFields;
}

export async function getAboutPage() {
  const query = `
    query AboutPage {
      page(id: "about", idType: URI) {
        aboutFields {
          heroImage { node { sourceUrl } }
          heroEyebrow heroHeading heroSubtext
          storyEyebrow storyHeading storyBody storyImage { node { sourceUrl } }
          recordEyebrow recordIntro
          recordStat1 { ${STAT} }
          recordStat2 { ${STAT} }
          recordStat3 { ${STAT} }
          recordStat4 { ${STAT} }
          recordNote
          homecomingEyebrow homecomingHeading homecomingBody
          quoteLabel quoteRating quoteOutOf quoteBody quoteBadgeText
          howImage { node { sourceUrl } }
          howHeading howSubtext
          howStep1 { ${ICON_TITLE_BODY} }
          howStep2 { ${ICON_TITLE_BODY} }
          howStep3 { ${ICON_TITLE_BODY} }
          howStep4 { ${ICON_TITLE_BODY} }
          standHeading
          standItem1 { ${ICON_TITLE_BODY} }
          standItem2 { ${ICON_TITLE_BODY} }
          standItem3 { ${ICON_TITLE_BODY} }
          standItem4 { ${ICON_TITLE_BODY} }
          ctaHeading ctaBody ctaButtonLabel
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ page: { aboutFields: AboutFields } }>(query);
  return data.page.aboutFields;
}

export async function getServicesPage() {
  const query = `
    query ServicesPage {
      page(id: "services", idType: URI) {
        servicesFields {
          heroImage { node { sourceUrl } }
          heroEyebrow heroHeading heroSubtext
          ctaHeading ctaBody ctaButtonLabel
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ page: { servicesFields: ServicesFields } }>(query);
  return data.page.servicesFields;
}

export async function getServices() {
  const query = `
    query Services {
      services(first: 10, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          title
          slug
          featuredImage { node { sourceUrl altText } }
          serviceDetails { icon summary intro features }
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ services: { nodes: ServiceNode[] } }>(query);
  return data.services.nodes;
}

export async function getUpcomingTrainingEvents(first = 3) {
  const query = `
    query UpcomingTrainingEvents($first: Int) {
      upcomingTrainingEvents(first: $first) {
        title
        slug
        excerpt
        featuredImage { node { sourceUrl altText } }
        eventDetails { eventDateDisplay startTime endTime mode venue }
      }
    }
  `;
  const data = await fetchGraphQL<{ upcomingTrainingEvents: TrainingEventNode[] }>(query, { first });
  return data.upcomingTrainingEvents;
}

export async function getFeaturedTestimonials(first = 3) {
  const query = `
    query FeaturedTestimonials($first: Int) {
      featuredTestimonials(first: $first) {
        title
        testimonialDetails { quote authorRole }
      }
    }
  `;
  const data = await fetchGraphQL<{ featuredTestimonials: TestimonialNode[] }>(query, { first });
  return data.featuredTestimonials;
}

export async function getLatestTips(first = 2) {
  const query = `
    query LatestTips($first: Int) {
      posts(first: $first) {
        nodes {
          title
          slug
          excerpt
          featuredImage { node { sourceUrl altText } }
          tipCategories { nodes { name } }
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ posts: { nodes: TipNode[] } }>(query, { first });
  return data.posts.nodes;
}
