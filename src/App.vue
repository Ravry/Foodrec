<script setup>
  import { ref } from 'vue';
  const messageShown = ref(false);

  const onImprintClicked = () => {
    messageShown.value = !messageShown.value;
  };

  const onButtonClickedOpenLink = (link) => {
    window.location.href = link;
  };
  
</script>

<template>
  <main>
    <RouterView />


    <Transition name="fade">
    <div v-if="messageShown === true" class="message">
      <h3>Impressum</h3>
      <p>
        Angaben gemäß § 5 DDG:
      </p>
      <p>
        Max Mustermann<br>Musterstraße 1<br>12345 Musterstadt
      </p>
      <p>
        Kontakt: Telefon: 01234/56789 bzw. E-Mail: info@examspanle.com
      </p>
      <p>
        Vertreten durch:<br>Max Mustermann
      </p>
      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>Max Mustermann<br>Musterstraße 1<br>12345 Musterstadt
      </p>
    </div>
  </Transition>
    
  <div class="footer">
    <span @click="onImprintClicked()"><i class="fa-solid fa-stamp"></i> Impressum</span>
    <span @click="onButtonClickedOpenLink('https://github.com')"><i class="fa-brands fa-github"></i> GitHub</span>
    <span @click="onButtonClickedOpenLink('https://youtube.com')"><i class="fa-brands fa-youtube"></i> YouTube</span>
    <span @click="onButtonClickedOpenLink('https://instagram.com')"><i class="fa-brands fa-instagram"></i> Instagram</span>
    <span @click="onButtonClickedOpenLink('https://twitter.com')"><i class="fa-brands fa-x-twitter"></i> Twitter</span>
    <span @click="onButtonClickedOpenLink('https://facebook.com')"><i class="fa-brands fa-facebook"></i> Facebook</span>
  </div>
  </main>
</template>