<template>
  <div id="app" class="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/auth/steam">Login</router-link> |
      <router-link to="/auth/logout">Logout</router-link> |
      <router-link to="/api/">CheckAPI</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
