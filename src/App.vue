<template>
  <section>
    <aside>
      sidebar
      <router-link :to="{ name: 'auth' }"> Login </router-link>
    </aside>
    <main>
      <router-view/>
    </main>
  </section>

</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
}
:root {
  --bg: #f9fafc;
  --white: #fff;
  --lightGrey: #F2F3F5;
  --darkGrey: #3f4d67;
  --primary: #F5C332;
  --hover: #a3daa4;
}

body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: var(--bg);
}
</style>
