import type { Handle } from "@sveltejs/kit";
import { dev } from "$app/environment";
import { getUserFromToken } from "$lib/server/auth";


export const handle: Handle = async ({ event, resolve }) => {
  if (
    dev &&
    event.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json"
  ) {
    return new Response(undefined, { status: 404 });
  }

  const token = event.cookies.get("session");
  const user = getUserFromToken(token);
  event.locals.user = user; // make available to loads/actions
  return resolve(event);
};
