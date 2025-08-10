<script lang="ts">
  let { data } = $props();
</script>

<section class="mx-5 pt-4 grid gap-4">
  <h1 class="text-3xl font-bold">Darko</h1>
  <div
    class="rounded-2xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
  >
    <p class="text-zinc-700 dark:text-zinc-300">
      Hello, <strong>{data.user.name}</strong> — you are logged in.
    </p>
  </div>
</section>
