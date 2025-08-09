<script lang="ts">
  import { enhance } from '$app/forms';
  let { data }: { data: { message?: string } } = $props();
  let message = $state<string | null>(data.message ?? null);
</script>

<h1>Login</h1>
<form method="POST" use:enhance>
  <label>
    <span>Username</span>
    <input name="username" autocomplete="username" required />
  </label>
  <label>
    <span>Password</span>
    <input type="password" name="password" autocomplete="current-password" required />
  </label>
  {#if message}<div class="error">{message}</div>{/if}
  <button type="submit">Sign in</button>
</form>