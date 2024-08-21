const propiedades_alquiler = [

    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Casa 4',
        src: './assets/img/casa5.jpeg',
        descripcion: 'Casa 4',
        ubicacion: 'Bolivia',
        habitaciones: 3,
        costo: 50000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Casa 5',
        src: './assets/img/casa6.jpeg',
        descripcion: 'Casa 5',
        ubicacion: 'Perú',
        habitaciones: 4,
        costo: 40000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Casa 6',
        src: './assets/img/casa7.jpeg',
        descripcion: 'Casa 6',
        ubicacion: 'México',
        habitaciones: 2,
        costo: 38000,
        smoke: false,
        pets: true
    },   

    {
        nombre: 'Casa 7',
       src: './assets/img/casa8.jpeg',
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

for(let alquiler of propiedades_alquiler){
    
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