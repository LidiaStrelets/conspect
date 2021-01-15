# conspect

как вынести placeholder за пределы поля ввода?

<div class="container">
  <picture>
    <source 
    srcset="https://picsum.photos/id/237/500/600 500w, 
    https://picsum.photos/id/237/1000/1200 1000w" 
        media="(max-width: 500px)" 
        sizes="(min-width: 1200px) 1200px, (min-width: 800px) 90vw, 100vw" />
    <source 
    srcset="https://picsum.photos/id/237/1200/400 1200w, 
    https://picsum.photos/id/237/2400/800 2400w" 
        media="(min-width: 800px)" 
        sizes="(min-width: 1200px) 1200px, (min-width: 800px) 90vw, 100vw" />
    <source 
    srcset="https://picsum.photos/id/237/800/400 800w, 
    https://picsum.photos/id/237/1600/800 1600w" 
        media="(min-width: 501px)" 
        sizes="(min-width: 1200px) 1200px, (min-width: 800px) 90vw, 100vw" />

    <img src="https://picsum.photos/id/237/800/400" alt="Чёрный щенок" />

  </picture>
