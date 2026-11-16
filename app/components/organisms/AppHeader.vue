<script setup lang="ts">
import { mdiBookOpenPageVariantOutline, mdiMagnify } from '@mdi/js'
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-border-subtle bg-surface/95 backdrop-blur-xs">
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
      <NuxtLink to="/" class="flex items-center gap-2.5 text-ink hover:opacity-90">
        <span
          class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand font-mono text-xs font-bold text-white"
        >
          <AtomsBaseIcon :path="mdiBookOpenPageVariantOutline" :size="16" />
        </span>
        <div class="flex flex-col">
          <span class="text-xs font-bold tracking-tight text-ink"> SI · UNIFACISA </span>
          <span class="font-mono text-[10px] text-ink-faint"> Biblioteca de Competências </span>
        </div>
      </NuxtLink>

      <nav
        aria-label="Navegação principal"
        class="flex items-center gap-4 text-xs font-medium text-ink-muted"
      >
        <NuxtLink to="/competencies" class="transition hover:text-ink"> Competências </NuxtLink>
        <NuxtLink to="/#about" class="transition hover:text-ink"> Sobre </NuxtLink>
        <NuxtLink
          to="/search"
          aria-label="Buscar"
          class="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-subtle px-2.5 py-1 text-xs text-ink-muted transition hover:border-brand/40 hover:text-ink"
        >
          <AtomsBaseIcon :path="mdiMagnify" :size="14" />
          <span class="hidden sm:inline">Buscar</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
