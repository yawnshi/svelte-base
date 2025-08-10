import { fail, redirect, type Actions } from "@sveltejs/kit";
import { verifyCredentials, issueSession } from "$lib/server/auth";

export const load = ({ locals }) => {
  if (locals.user) throw redirect(303, "/");
  return {};
};

export const actions: Actions = {
  default: async ({ request, cookies, url }) => {
    const form = await request.formData();
    const username = String(form.get("username") ?? "");
    const password = String(form.get("password") ?? "");

    const user = verifyCredentials(username, password);
    if (!user) {
      return fail(400, { message: "Invalid credentials" });
    }

    const token = issueSession(user);
    cookies.set("session", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: url.protocol === "https:", // allow localhost http during dev
      maxAge: 60 * 60,
    });

    throw redirect(303, "/");
  },
};
