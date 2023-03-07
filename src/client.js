import client from "@sanity/client";

export default client({
  projectId: "gvt4c2mb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-07",
});
