<script setup lang="ts">
import { mdiClose, mdiMenu } from '@mdi/js'

const navLinks = [
  { to: '/#competencias', label: 'Competências' },
  { to: '/#questoes', label: 'Questões' },
  { to: '/#sobre', label: 'Sobre' },
]

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="relative z-40 mx-auto w-full max-w-260 px-6" @keydown.esc="isMenuOpen = false">
    <Transition
      enter-active-class="transition-opacity duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        aria-hidden="true"
        class="fixed inset-0 z-30 bg-ink/20 backdrop-blur-[2px] sm:hidden"
        @click="isMenuOpen = false"
      />
    </Transition>

    <nav aria-label="Navegação principal" class="relative z-40 py-4.5 sm:py-5.5">
      <div class="flex items-center justify-between gap-4 sm:justify-start sm:gap-10">
        <NuxtLink
          to="/"
          class="flex items-center gap-2.5 font-display text-[19px] font-bold tracking-[-0.02em] text-ink sm:text-[21px]"
          @click="isMenuOpen = false"
        >
          <i
            aria-hidden="true"
            class="grid h-7 w-7 shrink-0 place-items-center rounded-[8px_8px_8px_2px] bg-brand font-mono text-[13px] font-normal not-italic text-white"
          >
            &lt;/&gt;
          </i>
          UniCode Students
        </NuxtLink>

        <div class="hidden sm:flex sm:items-center sm:gap-7 sm:text-[15.5px] sm:font-medium">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="border-b-2 border-transparent py-1 transition-colors duration-200 hover:border-brand"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-subtle sm:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav-menu"
          :aria-label="isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <AtomsBaseIcon :path="isMenuOpen ? mdiClose : mdiMenu" :size="22" />
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div
          v-if="isMenuOpen"
          id="mobile-nav-menu"
          class="absolute inset-x-0 top-full z-40 flex flex-col gap-1 rounded-2xl border border-border-subtle bg-surface p-3 shadow-[0_12px_32px_-8px_rgba(10,42,102,0.16)] sm:hidden"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-subtle"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>
