const giro = document.querySelector(".container")

        giro.addEventListener('mousemove',(event)=>{
            const mouseX = event.clientX - giro.getBoundingClientRect().left;

            const mouseY = event.clientY - giro.getBoundingClientRect().top;

            const centerX = giro.clientWidth / 2;

            const centerY = giro.clientHeight / 2;

            const rotationX = (mouseY - centerY) /10;

            const rotationY = (mouseX - centerX) / 10;
// mover mais para tras ou para frente(quanto + px no [perspective(00px)] menos se movimenta)
            giro.style.transform = `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

            // giro.style.cursor = 'pointer';

        });

        giro.addEventListener('mouseleave', ()=>{
            giro.style.transform = 'perspective(100px) rotateX(0deg) rotateY(0deg)'
        });
