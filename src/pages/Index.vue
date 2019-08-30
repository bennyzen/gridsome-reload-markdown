<template>
  <div v-html="$page.home.content" />
</template>

<page-query>
query {
  home: homePage(path: "/home") {
    id
    content
  }
}
</page-query>