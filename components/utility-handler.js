 //Smooth Scroll
 document.querySelector('html').style.scrollBehavior = 'smooth';

 let childUtility = ['sm:hover:transition', 'hover:duration-800', 'sm:hover:ease-in-out', 'border', 'border-black', 'transform', 'sm:hover:scale-105', 'sm:hover:shadow-lg', 'sm:hover:bg-gray-300', 'sm:hover:shadow-2xl'];

 //Skills -> Children Hoverable
 function hoverableChildren(id, utilityClass) {
   const skills = document.querySelector(id);
   const children = skills.children;
   for (let i = 0; i < children.length; i++) {
     utilityClass.forEach(utility => {
       children[i].classList.add(utility);
     });
   }
 }
 hoverableChildren('#Skills', childUtility);
 hoverableChildren('#frameworks-libraries', childUtility);
 hoverableChildren('#About-Me', childUtility);
 hoverableChildren('#Services-Grid', childUtility);
 hoverableChildren('#Non-Related-Services', childUtility);

 //Toggle Button
 const button = document.querySelector('#toggle-button');
 const ul = document.querySelector('#navigation-menu');
 button.addEventListener('click', () => {
   ul.classList.toggle('hidden');
 });

 //Image -> About
 const image = document.querySelector('#image-href');
 image.addEventListener('click', () => {
   window.location.href = '#About';
 });