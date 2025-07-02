<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8">
        <!-- Logo skipped -->

        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2">
            <h2 class="text-2xl font-bold text-gray-900">{{ $t('newsTitle') }}</h2>
            <p class="mt-4 text-gray-500">{{ $t('newsDesc') }}</p>
          </div>

          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <form class="w-full">
              <label for="UserEmail" class="sr-only">{{ $t('emailLabel') }}</label>
              <div class="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                <input
                  type="email"
                  id="UserEmail"
                  :placeholder="$t('emailPlaceholder')"
                  class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                />
                <button
                  class="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                  {{ $t('signUp') }}
                </button>
              </div>
            </form>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">{{ $t('services') }}</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('coaching') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('companyReview') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('accountsReview') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('hr') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('seo') }}</a></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">{{ $t('company') }}</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('about') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('team') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('accountsReview') }}</a></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">{{ $t('helpfulLinks') }}</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('contact') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('faqs') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('chat') }}</a></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">{{ $t('legal') }}</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('accessibility') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('returns') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('refund') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('stats') }}</a></li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">{{ $t('downloads') }}</p>
            <ul class="mt-6 space-y-4 text-sm">
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('calendar') }}</a></li>
              <li><a href="#" class="text-gray-700 transition hover:opacity-75">{{ $t('infographic') }}</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-100 pt-8">
          <div class="sm:flex sm:justify-between">
            <p class="text-xs text-gray-500">{{ $t('copyright') }}</p>
            <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li><a href="#" class="text-gray-500 transition hover:opacity-75">{{ $t('terms') }}</a></li>
              <li><a href="#" class="text-gray-500 transition hover:opacity-75">{{ $t('privacy') }}</a></li>
              <li><a href="#" class="text-gray-500 transition hover:opacity-75">{{ $t('cookies') }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
