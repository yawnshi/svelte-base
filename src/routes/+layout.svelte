<script lang="ts">
  export const prerender = false;
  import '../app.css';
  import { invalidateAll } from '$app/navigation';
  let { children, data } = $props();

  async function logout() {
    const res = await fetch('/logout', { method: 'POST' });
    if (res.ok) {
      // Re-run all data loads, including +layout.server.ts -> data.user becomes null
      await invalidateAll();
      // Stay on the same page. If you prefer to send them home:
      // import { goto } from '$app/navigation';
      // await goto('/');
    }
  }
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  {#if data.user}
    <a href="/dashboard">Dashboard</a>
    <!-- Button styled like a link for seamless logout -->
    <button type="button" class="linklike" onclick={logout}>Logout</button>
  {:else}
    <a href="/login">Login</a>
  {/if}
</nav>

<main>
  {@render children()}
</main>

<style>
  .linklike { background:none; border:none; padding:0; cursor:pointer; text-decoration:underline; font:inherit; }
</style>