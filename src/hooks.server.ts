import type { Handle } from "@sveltejs/kit";
import { getUserFromToken } from "$lib/server/auth";

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("session");
  const user = getUserFromToken(token);
  event.locals.user = user; // make available to loads/actions
  return resolve(event);
};
