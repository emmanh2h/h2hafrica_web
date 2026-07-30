const endpoint = process.env.WORDPRESS_GRAPHQL_URL ?? "http://localhost:8888/h2h_africa/graphql";

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate: number | false = 60,
): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`WPGraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}
