<script lang="ts">
  let { error, status } = $props();
</script>

<h1>{status}</h1>
<pre>{error?.message}</pre>