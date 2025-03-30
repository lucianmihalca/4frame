<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <!-- Columna izquierda: Links -->
        <div class="footer-links">
          <div class="links-groups">
            <div class="links-group">
              <h3>Explore</h3>
              <div class="links-column">
                <router-link to="/movies">Movies</router-link>
                <router-link to="/tv-shows">TV Shows</router-link>
                <router-link to="/top-imdb">Top IMDB</router-link>
              </div>
            </div>
            <div class="links-group">
              <h3>Genres</h3>
              <div class="links-column">
                <router-link to="/movies/action">Action Movies</router-link>
                <router-link to="/movies/horror">Horror Movies</router-link>
                <router-link to="/movies/sci-fi">Sci-fi Movies</router-link>
                <router-link to="/movies/thriller">Thriller Movies</router-link>
              </div>
            </div>
            <div class="links-group">
              <h3>Information</h3>
              <div class="links-column">
                <router-link to="/android-app">Android App</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/terms">Terms of service</router-link>
                <router-link to="/sitemap">Sitemap</router-link>
                <router-link to="/faq">FAQ</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: About Us + Social -->
        <div class="footer-about-container">
          <div class="footer-about">
            <h3>About Us</h3>
            <p>
              4Frame is free tv shows streaming website with zero ads, it allows you
              <strong>watch tv shows online, watch tv shows online free</strong> in high quality for
              free. You can also download full tv shows and watch it later if you want.
            </p>
            <p class="small-text">
              This site does not store any files on our server; we only linked to the media which is
              hosted on 3rd party services.
            </p>

            <!-- Redes sociales dentro de About Us -->
            <div class="footer-social">
              <h4>Follow Us</h4>
              <div class="footer-features">
                <a href="#" target="_blank" rel="noopener" class="feature">
                  <div class="feature">
                    <font-awesome-icon
                      :icon="['fab', 'instagram']"
                      class="feature-icon instagram"
                    />
                    <span>Instagram</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noopener" class="feature">
                  <div class="feature">
                    <font-awesome-icon :icon="['fab', 'facebook']" class="feature-icon facebook" />
                    <span>Facebook</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noopener" class="feature">
                  <div class="feature">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="feature-icon twitter" />
                    <span>Twitter</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noopener" class="feature">
                  <div class="feature">
                    <font-awesome-icon :icon="['fab', 'youtube']" class="feature-icon youtube" />
                    <span>YouTube</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie de página -->
    <div class="footer-bottom">
      <div class="container">
        <div class="copyright">© {{ new Date().getFullYear() }} 4Frame. All Rights Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "../../assets/scss/layout/footer-layout.scss";
</style>
