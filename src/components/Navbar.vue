<template>
  <header>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <i class="fas fa-bars"></i>
    </label>
    <router-link to="/alphashop" class="logo"
      ><img src="https://upload.cc/i1/2022/03/25/Mj1Rch.png" alt=""
    /></router-link>
    <nav class="nav text-center">
      <ul class="nav-list">
        <div class="nav-list-left">
          <li class="nav-item">
            <a href="#" class="nav-link">男款</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">女款</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">最新消息</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">聯絡我們</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">客製商品</a>
          </li>
        </div>
        <div class="nav-list-right">
          <a href="#search"><i class="fas fa-search"></i></a>
          <a href="#cart"><i class="fas fa-shopping-cart"></i></a>
          <a href="#night"><i class="far fa-moon"></i></a>
        </div>
      </ul>
    </nav>
  </header>
</template>

