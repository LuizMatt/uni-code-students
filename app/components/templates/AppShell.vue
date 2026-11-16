<template>
  <div class="flex min-h-screen flex-col bg-canvas text-ink">
    <OrganismsAppHeader />
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <slot />
    </main>
    <OrganismsAppFooter />
  </div>
</template>
