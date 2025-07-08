<template>
    <section
      id="contact"
      class="relative flex-center flex-col items-center bg-modernblack min-h-fit lg:h-screen py-32 scroll-mt-16"
    >
      <!-- Optional Background Image (currently transparent) -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"></div>
  
      <!-- Title -->
      <div class="z-10 text-5xl lg:text-8xl font-medium text-bela mb-14">
        contact
        <span class="text-primary-stroke-light text-transparent">me</span>.
      </div>
  
      <!-- Contact Icons Grid -->
      <div class="z-10 grid grid-cols-3 gap-8 lg:gap-14 flex-center">
        
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/žiga-tomše"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/logos/Contact/linkedin1.svg"
            alt="LinkedIn Logo"
            class="w-10 h-10 lg:w-20 lg:h-20 transition-transform hover:scale-110"
          />
        </a>
  
        <!-- Email -->
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ziga.tomse48@gmail.com"
          target="_blank"
        >
          <img
            src="/src/assets/logos/Contact/mail1.svg"
            alt="Email Icon"
            class="w-14 h-14 lg:w-20 lg:h-20 transition-transform hover:scale-110"
          />
        </a>
  
        <!-- GitHub -->
        <a
          href="https://github.com/zig4to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/logos/Contact/github1.svg"
            alt="GitHub Logo"
            class="w-10 h-10 lg:w-20 lg:h-20 transition-transform hover:scale-110"
          />
        </a>
        
      </div>
    </section>
  </template>
  