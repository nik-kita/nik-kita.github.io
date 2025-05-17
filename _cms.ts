import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const cms = lumeCMS();
cms.auth({
  admin: Deno.env.get("CMS_ADMIN_PASSWORD") ||
    "oops... missing password".split("").map(Math.random).join("."),
});
cms.storage(
  "gh",
  new GitHub({
    client: new Octokit({ auth: Deno.env.get("GITHUB_PERSONAL_ACCESS_TOKEN") }),
    owner: "nik-kita",
    repo: "nik-kita.github.io",
  }),
);

// Configure an upload folder
cms.upload({ name: "images", store: "gh:src/images" });

// Configure collection
cms.collection(
  "posts",
  "gh:src/posts/*",
  [
    "title: text",
    {
      name: "summary",
      type: "textarea",
      attributes: {
        required: true,
      },
    },
    {
      name: "image",
      type: "file",
      upload: "images",
      attributes: {
        accept: "image/*",
      },
    },
    "tags: list",
    "draft: checkbox",
    "show_toc: checkbox",
    "content: markdown",
  ],
);

export default cms;
