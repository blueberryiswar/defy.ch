<script>
    
  let isDark = $state(true)
  let theme = $derived(isDark ? 'dark' : 'light');

  function toggleTheme() {
      isDark = !isDark

      if(isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }      
  }

</script>

<button
  onclick={toggleTheme}
  class="px-4 py-2 rounded bg-gray-400 dark:bg-blue text-black dark:text-white transition"
>
  { theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode' }
</button>

<style>
  button {
    position: absolute;
    right: 50px;
    top: 20px;
    z-index: 100;
  }
</style>

