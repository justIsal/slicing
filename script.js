const atas = document.querySelector('.top');

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 20);
});

atas.addEventListener('click', function() {
    return location.href='#about';
});


// const nav = document.querySelector('nav'),
//       navList = nav.querySelectorAll('li'),
//       totalNavList = navList.length,
//       allSection = document.querySelectorAll('.section'),
//       totalSections = allSection.length;
//       for(let i=0; i<totalNavList; i++) {
//         const a = navList[i].querySelector("a");
//         a.addEventListener("click", function () {
//             for(let j=0; j<totalNavList; j++) {
//                 navList[j].querySelector("a").classList.remove("active");
//             }
//             this.classList.add("active")
//             showSection(this);
//         })
//       }
//       function showSection(element) {
//         for(let i=0; i<totalSections; i++) {
//             allSection[i].classList.remove("active");
//         }
//         const target = element.getAttribute("href").split("#")[1];
//         document.querySelector("#" + target).classList.add("active");
//       }