<template>
  <div id="settings">
    <container max-width="400px" width="90%" center class="content">
      <settings-icon size="1.5x"/>
      <h2>Einstellungen</h2>
      <p class="description">
        Diese Seite nutzt ein Format namens
        <b>
          <a
            href="https://www.heise.de/mac-and-i/downloads/65/1/1/6/7/1/0/3/Markdown-CheatSheet-Deutsch.pdf"
          >Markdown</a>
        </b>.
        <br>
        <br>Markdown ermöglicht es Text schnell und ohne Graphische Oberfläche zu formatieren.
      </p>

      <p class="label">Nachricht:</p>
      <textarea placeholder="Titel"></textarea>
      <textarea placeholder="Beschreibung"></textarea>

      <p class="label">Leistungen:</p>
      <textarea placeholder="Wir reparieren"></textarea>
      <textarea placeholder="Weiteres"></textarea>
      <textarea placeholder="Wir verkaufen"></textarea>

      <p class="label">Impressum:</p>
      <textarea></textarea>

      <p class="label">Speichern:</p>
      <input type="password" placeholder="Passwort">
      <br>
      <button>Speichern</button>
      <p class="message" hidden>Änderungen erfolgreich gespeichert!</p>
    </container>
  </div>
</template>

<script>
import Container from '../components/Container'
import { SettingsIcon } from 'vue-feather-icons'

export default {
  name: 'settings',
  components: { Container, SettingsIcon }
}
</script>

<style lang="scss" scoped>
#settings {
  /* Position */
  position: absolute;
  top: 52px;
  padding: 48px 24px;

  /* Display */
  width: 100%;
  min-height: calc(100% - 52px);

  /* Style */
  background-color: #fff;
}

.content {
  /* Display */
  width: 100%;
  box-sizing: border-box;

  /* Text */
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

h2 {
  /* Position */
  margin: 0;
  margin-top: 12px;

  /* Text */
  font-family: 'Lobster', sans-serif;
}

p {
  /* Text */
  font-family: 'Roboto', sans-serif;
}

input {
  /* Position */
  padding: 8px 12px;

  /* Display */
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;

  /* Style */
  border: 1px solid #EEE;
}

button {
  /* Position */
  margin-top: 4px;
  padding: 8px 12px;

  /* Display */
  width: 100%;
  border-radius: 3px;

  /* Style */
  border: none;
  color: #fff;
  background-color: #fdb212;

  /* Text */
}

.label {
  /* Position */
  margin: 0;
  margin-top: 24px;
  margin-bottom: 4px;

  /* Display */

  /* Style */
  color: #666;

  /* Text */
  font-size: 12px;
  text-align: left;
}

textarea {
  /* Position */
  padding: 12px;

  /* Display */
  width: 100%;
  min-height: 100px;
  border-radius: 3px;
  border: 1px solid #EEE;
  resize: none;

  /* Style */

  /* Text */
}

.message {
  /* Position */
  margin-top: 16px;

  /* Display */

  /* Style */

  /* Text */
}
</style>

