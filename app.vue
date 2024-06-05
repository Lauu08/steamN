<template>
  <div>
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="postcss">
   body {
    background-color: #DEDEDE;
    overflow-y: scroll; 
    padding-right: calc(100vw - 100%); 
  }

  ::-webkit-scrollbar {
    width: 0; 
  }

  ::-webkit-scrollbar-corner {
    background: transparent; 
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Cairo;
  }

  @media (min-width: 412) and (max-width: 915) {
  /* SAMSUNGCGALAXY S20 */ 

  }
</style>