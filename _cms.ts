// import { load } from "@std/dotenv";
import cms from "blog/_cms.ts";

// const { CMS_ADMIN_PASSWORD, RUNTIME_ENV } = await load();

// if (!CMS_ADMIN_PASSWORD) {
//   throw new Deno.errors.NotFound("cms config should be loaded!");
// }

cms.auth({
  // admin: CMS_ADMIN_PASSWORD,
  // ...(
  //   RUNTIME_ENV !== "production" &&
    // {
      "": "",
    // }
  // ),
});

export default cms;
