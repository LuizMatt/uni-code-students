<template>
  <div class="flex min-h-screen flex-col bg-canvas text-ink">
    <OrganismsAppHeader />
    <main class="mx-auto w-full max-w-[1040px] flex-1 px-6">
      <slot />
    </main>
    <OrganismsAppFooter />
  </div>
</template>
