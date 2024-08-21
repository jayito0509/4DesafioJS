const propiedades_venta = [

    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Casa 4',
        src: './assets/img/casa1.jpeg',
        descripcion: 'Casa 4',
        ubicacion: 'Bolivia',
        habitaciones: 3,
        costo: 50000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Casa 5',
        src: './assets/img/casa2.jpg',
        descripcion: 'Casa 5',
        ubicacion: 'Perú',
        habitaciones: 4,
        costo: 40000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Casa 6',
        src: './assets/img/casa3.jpeg',
        descripcion: 'Casa 6',
        ubicacion: 'México',
        habitaciones: 2,
        costo: 38000,
        smoke: false,
        pets: true
    },   

    {
        nombre: 'Casa 7',
       src: './assets/img/casa4.jpg',
       descripcion: 'Casa 7',
       ubicacion: 'España',
       habitaciones: 5,
       costo: 68000,
       smoke: true,
       pets: false
   }   

]

let sectionHTML = document.querySelector('#alquiler');
let html = "";

for(let alquiler of propiedades_venta){
    
    var fumar = ""

    if (alquiler.smoke == true) {
        fumar = `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`
    } else {
        fumar = `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`        
    }

    var mascota = ""

    if (alquiler.pets == true) {
        mascota = `<p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`
    } else {
        mascota = `<p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                  </p>`        
    }
   

    html += `  

        <div class="row">
            
          <div class="">
            <div class="card">
              <img
                src=" ${alquiler.src} "
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i>${alquiler.habitaciones} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>      
                  
                ${fumar}
                ${mascota}
                              
                

              </div>
            </div>
          </div>   
        </div>   `        
}

sectionHTML.innerHTML = html;