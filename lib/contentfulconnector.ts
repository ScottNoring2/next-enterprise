// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;

const GENERAL_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  image {
    url
  }
`;


async function fetchGraphQL(query, preview = false) {
 console.log('access token: ' + process.env.CONTENTFUL_ACCESS_TOKEN);
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/4t6ml4ntshf7`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : 'P1uGx_LTam-KxIDjYQgNIXzlFEK7caKLfiEkt8DFigk'
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

function extractGeneralEntries(fetchResponse) {
    console.dir(fetchResponse);
    return fetchResponse?.data?.generalContentCollection?.items;
  }

export async function getAllArticles(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug_exists: true},limit: ${limit}) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
console.dir(articles);
  return extractArticleEntries(articles);
}

export async function getArticle(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}

export async function getGeneralContent(
  slug: string,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        generalContentCollection(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${GENERAL_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractGeneralEntries(article)[0];
}