<template>
    <div
      class="modal fade"
      id="modallogin"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="email" class="form-label">Email address :</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password :</label>
              <input
                type="text"
                class="form-control"
                id="password"
                placeholder=" Your Password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <div class="textmodal">
              New here ?
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalsign"
                class="textmodalbtn"
              >
                Sign Up</a
              >
            </div>
            <button type="button" class="btn btn-primary btn-modal">Login</button>
          </div>
        </div>
      </div>
    </div>
  </template>