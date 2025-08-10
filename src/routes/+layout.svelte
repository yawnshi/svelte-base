<script lang="ts">
  import '../app.css';

  let { children, data } = $props();
  import { invalidateAll, goto } from "$app/navigation";

  let open = $state(false);
  async function logout() {
    const res = await fetch("/logout", { method: "POST" });
    if (res.ok) {
      await invalidateAll();
      // Stay on the page, or send them home:
      // await goto('/');
    }
  }
</script>

{#if data.user}
  <header
    class="h-16 border-b bg-white/70 backdrop-blur dark:bg-zinc-900/60 sticky top-0 z-30"
  >
    <div class="flex items-center justify-between py-3 mx-5">
      <a href="/" class="font-semibold text-xl tracking-tight">SvelteKit Demo</a
      >

      <button
        class="md:hidden inline-flex items-center rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        onclick={() => (open = !open)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>

      <nav class="hidden md:flex items-center gap-4">
        <a
          href="/"
          class="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >Home</a
        >
        <a
          href="/about"
          class="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >About</a
        >
        <!-- {#if data.user} -->
        <a
          href="/darko"
          class="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >Darko</a
        >
        <button
          type="button"
          onclick={logout}
          class="cursor-pointer inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          Logout
        </button>
        <!-- {:else} -->
        <!-- <a href="/login"
           class="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800">Login</a> -->
        <!-- {/if} -->
      </nav>
    </div>

    <!-- mobile panel -->
    {#if open}
      <div class="md:hidden border-t bg-white dark:bg-zinc-900">
        <div class="container flex flex-col py-2 gap-1">
          <a
            href="/"
            class="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >Home</a
          >
          <a
            href="/about"
            class="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >About</a
          >
          <!-- {#if data.user} -->
          <a
            href="/darko"
            class="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >Darko</a
          >
          <button
            type="button"
            onclick={() => {
              open = false;
              logout();
            }}
            class="cursor-pointer text-left px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >Logout</button
          >
          <!-- {:else}
          <a href="/login" class="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">Login</a>
        {/if} -->
        </div>
      </div>
    {/if}
  </header>
{/if}

<main class="min-h-screen">
  {@render children()}
</main>
