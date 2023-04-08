import React from 'react'

export default function Html2() {

  return (
    <div>
      <nav class="navbar navbar-default navbar-fixed-top bg-primary">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="collapse navbar-collapse" id="navbars">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a>Blog</a></li>
              <li><a>About</a></li>
            </ul>
          </div>

        </div>
      </nav>

      <div class="page-landing text-center">
        <div>
          <h1>Hello, world!</h1>
          <p>Simple page scroll header animation.</p>
        </div>
      </div>

      <div class="section sec-bg sec-bg-1">
        <div class="container">
          <div class="row">
          </div>
        </div>
      </div>
      <div class="section sec-bg sec-bg-2">
        <div class="container">
          <div class="row">
          </div>
        </div>
      </div>

    </div>

  )
}
