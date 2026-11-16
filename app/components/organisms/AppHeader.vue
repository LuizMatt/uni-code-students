<template>
  <header class="mx-auto w-full max-w-[1040px] px-6">
    <nav
      aria-label="Navegação principal"
      class="flex flex-col items-start gap-3.5 py-[22px] sm:flex-row sm:items-center sm:gap-10"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 font-display text-[21px] font-bold tracking-[-0.02em] text-ink"
      >
        <i
          aria-hidden="true"
          class="grid h-7 w-7 place-items-center rounded-[8px_8px_8px_2px] bg-brand font-mono text-[13px] font-normal not-italic text-white"
        >
          &lt;/&gt;
        </i>
        UniCode Students
      </NuxtLink>

      <div
        class="flex w-full justify-between gap-3 text-[14px] font-medium sm:w-auto sm:justify-start sm:gap-7 sm:text-[15.5px]"
      >
        <NuxtLink
          to="/#competencias"
          class="border-b-2 border-transparent py-1 transition-colors duration-200 hover:border-brand"
        >
          Competências
        </NuxtLink>
        <NuxtLink
          to="/#questoes"
          class="border-b-2 border-transparent py-1 transition-colors duration-200 hover:border-brand"
        >
          Questões
        </NuxtLink>
        <NuxtLink
          to="/#sobre"
          class="border-b-2 border-transparent py-1 transition-colors duration-200 hover:border-brand"
        >
          Sobre
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
