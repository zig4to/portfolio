<template>
    <section id="contact" class="relative min-h-fit flex flex-col items-center py-20 scroll-mt-16">
        <!-- Background Image with Opacity -->
        <div class="absolute inset-0 bg-cover bg-center bg-highlight bg-no-repeat opacity-0"></div>

        <!-- Title (Centered) -->
        <div class="relative z-10 text-5xl font-medium text-primary mb-14">
            contact<span class="text-primary-stroke text-transparent">me</span>.
        </div>

        <!-- 3-Column Grid for Logos -->
        <div class="relative flex-center z-10 grid grid-cols-3 gap-8">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/žiga-tomše" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/logos/Contact/linkedin.svg" alt="LinkedIn Logo" class="w-10 h-10 transition-transform hover:scale-110">
            </a>
             <!-- Email -->
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ziga.tomse48@gmail.com" target="_blank">
                <img src="/src/assets/logos/Contact/email.svg" alt="Email Icon" class="w-16 h-16 transition-transform hover:scale-110">
            </a>
            <!-- GitHub -->
            <a href="https://github.com/zig4to" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/logos/Contact/git.svg" alt="GitHub Logo" class="w-10 h-10 transition-transform hover:scale-110">
            </a>
        </div>
    </section>
</template>
