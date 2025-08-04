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
  class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
>
  { theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode' }
</button>


<div class="mt-4 p-4 rounded bg-white dark:bg-gray-900 text-black dark:text-white shadow">
  <h1 class="text-xl font-bold">Current theme: {theme}</h1>
  <p>This container adapts to the theme using Tailwind's <code>dark:</code> variant.</p>
</div>
