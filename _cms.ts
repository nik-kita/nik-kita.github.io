import cms from "blog/_cms.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

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

export default cms;
