<template>
  <footer class="footer">
    <div class="container">
      <!-- Bloque principal con dos columnas -->
      <div class="footer-main">
        <!-- Columna izquierda: Links -->
        <div class="footer-links">
          <h3>Links</h3>
          <div class="links-columns">
            <div class="links-column">
              <router-link to="/movies">Movies</router-link>
              <router-link to="/tv-shows">TV Shows</router-link>
              <router-link to="/top-imdb">Top IMDB</router-link>
            </div>
            <div class="links-column">
              <router-link to="/movies/action">Action Movies</router-link>
              <router-link to="/movies/horror">Horror Movies</router-link>
              <router-link to="/movies/sci-fi">Sci-fi Movies</router-link>
              <router-link to="/movies/thriller">Thriller Movies</router-link>
            </div>
            <div class="links-column">
              <router-link to="/android-app">Android App</router-link>
              <router-link to="/contact">Contact</router-link>
              <router-link to="/terms">Terms of service</router-link>
              <router-link to="/sitemap">Sitemap</router-link>
              <router-link to="/faq">FAQ</router-link>
            </div>
          </div>
        </div>

        <!-- Columna derecha: About Us -->
        <div class="footer-about">
          <h3>About Us</h3>
          <p>
            4Frame is free tv shows streaming website with zero ads, it allows you
            <strong>watch tv shows online, watch tv shows online free</strong> in high quality for
            free. You can also download full tv shows and watch it later if you want.
          </p>
          <p class="disclaimer">
            This site does not store any files on our server; we only linked to the media which is
            hosted on 3rd party services.
          </p>
        </div>
      </div>

      <!-- Sección de características -->
      <div class="footer-features">
        <div class="feature">
          <font-awesome-icon :icon="['fab', 'instagram']" class="feature-icon instagram" />
          <span>Instagram</span>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fab', 'facebook']" class="feature-icon facebook" />
          <span>Facebook</span>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fab', 'twitter']" class="feature-icon twitter" />
          <span>Twitter</span>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fab', 'youtube']" class="feature-icon youtube" />
          <span>YouTube</span>
        </div>
      </div>
    </div>

    <!-- Navegación inferior -->
    <div class="footer-bottom">
      <div class="container">
        <nav>
          <router-link to="/sitemap">Sitemap</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/terms">Terms of service</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "../../assets/scss/layout/footer-layout.scss";
</style>
