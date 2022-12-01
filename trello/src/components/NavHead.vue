<script setup>
import Modaladd from "./ModalAdd.vue";
import modalloginVue from "./ModalLogin.vue";
import modalsignVue from "./ModalSign.vue";
</script>

<template>
  <modalloginVue />
  <modalsignVue />
  <Modaladd />

  <nav class="navbar bg">
    <div class="container-fluid">
      <div class="brandandname">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.goopics.net/fal169.png"
            alt="Logo"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          TrelloHub
        </a>
        <div class="nav-item">
          <div class="usernamenav navbar-brand" href="#">{Username}</div>
        </div>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Connexion Setting
              </a>
              <ul class="dropdown-menu">
                <li>
                  <button
                    type="button"
                    class="btn dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#modallogin"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button
                    type="button"
                    class="btn dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#modalsign"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>