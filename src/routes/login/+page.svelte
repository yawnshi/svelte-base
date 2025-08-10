<script lang="ts">
  import { enhance } from '$app/forms';
  let { data }: { data: { message?: string } } = $props();
  let message = $state<string | null>(data?.message ?? null);
</script> 

<section class="min-h-screen grid place-items-center">
  <div class="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
    <h1 class="mb-6 text-2xl font-semibold tracking-tight">Sign in</h1>
    <form method="POST" use:enhance class="grid gap-4">
      <label class="grid gap-1">
        <span class="text-sm text-zinc-600 dark:text-zinc-400">Username</span>
        <input name="username" required autocomplete="username"
               class="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900" />
      </label>
      <label class="grid gap-1">
        <span class="text-sm text-zinc-600 dark:text-zinc-400">Password</span>
        <input type="password" name="password" required autocomplete="current-password"
               class="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900" />
      </label>
      {#if message}
        <div class="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950">
          {message}
        </div>
      {/if}
      <button type="submit"
              class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800">
        Sign in
      </button>
    </form>
  </div>
</section>