<template>
  <div id="app" class="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/player">Player</router-link> |
      <a href="/auth/steam">Login</a> |
      <a href="/auth/logout">Logout</a> |
      <a href="/api/">CheckAPI</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
