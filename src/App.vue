<template>
  <div id="app">
    <header>
      <div class="top-bar"></div>
      <div class="bottom-bar">
        <span class="main-logo">
          <router-link to="/" >Logo</router-link>
        </span>
        <nav>
          <a href="" class="nav-item">
            <span class="icon sports"></span>
            Sports
          </a>
          <a href="" class="nav-item">
            <span class="icon in-play"></span>
            In-Play
          </a>
          <a href="" class="nav-item">
            <span class="icon casino"></span>
            Casino
          </a>
          <a href="" class="nav-item">
            <span class="icon betgames"></span>
            Betgames
          </a>
          <a href="" class="nav-item">
            <span class="icon campaigns"></span>
            Campaigns
          </a>
          <a href="" class="nav-item">
            <span class="icon campaigns"></span>
            Betting shops
          </a> <a href="" class="nav-item">
            <span class="icon campaigns"></span>
            Betting shops
          </a>
        </nav>
      </div>

    </header>
    <div class="main-wrapper">
      <div class="sidebar">
        <ul>
          <li><a href="">My profile</a></li>
          <li><a href="">Payments history</a></li>
          <li><a href="">Withdraw</a></li>
          <li class="active"><a href="">Betting history</a></li>
          <li><a href="">Active campaigns</a></li>
          <li><a href="">Messages</a></li>
          <li><a href="">Limits</a></li>
          <li><a href="">Promotional code</a></li>
        </ul>

      </div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "App";
</style>
