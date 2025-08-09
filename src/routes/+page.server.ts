import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
export const prerender = false; // auth needs server

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) throw redirect(303, "/login");
  return { user: locals.user };
};
