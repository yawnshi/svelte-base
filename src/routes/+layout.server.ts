import type { LayoutServerLoad } from "./$types";
export const prerender = false; // auth needs server

export const load: LayoutServerLoad = async ({ locals }) => {
  return { user: locals.user };
};
