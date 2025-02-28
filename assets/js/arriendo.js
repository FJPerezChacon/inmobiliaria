//arreglo con propiedades
let propiedades = [
    {
        tipo: "venta",
        nombre: "Apartamento de lujo en zona exclusiva",
        url: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4 Habitaciones",
        baños: "4 Baños",
        precio: "5.000",
        permisoFumar: "No se permite fumar",
        permisoMascotas: "No se permiten mascotas",
        fumar: false,
        mascota: false
    },
    {
        tipo: "venta",
        nombre: "Apartamento acogedor en la montaña",
        url: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: "2 Habitaciones",
        baños: "1 Baños",
        precio: "1.200",
        permisoFumar: "Permitido fumar",
        permisoMascotas: "Mascotas permitidas",
        fumar: true,
        mascota: true
    },
    {
        tipo: "venta",
        nombre: "Penthouse de lujo con terraza panorámica",
        url: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: "3 Habitaciones",
        baños: "3 Baños",
        precio: "4.500",
        permisoFumar: "No se permite fumar",
        permisoMascotas: "Mascotas permitidas",
        fumar: false,
        mascota: true
    },
    {
        tipo: "arriendo",
        nombre: "Apartamento en el centro de la ciudad",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        descripcion: " Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        baños: "2 Baños",
        precio: "2.000",
        permisoFumar: "No se permite fumar",
        permisoMascotas: "Mascotas permitidas",
        fumar: false,
        mascota: true
    },
    {
        tipo: "arriendo",
        nombre: "Apartamento luminoso con vista al mar",
        url: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        direccion: " 456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3 Habitaciones",
        baños: "3 Baños",
        precio: "2.500",
        permisoFumar: "Permitido fumar",
        permisoMascotas: "Mascotas permitidas",
        fumar: true,
        mascota: true
    },
    {
        tipo: "arriendo",
        nombre: " Condominio moderno en zona residencial",
        url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        direccion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        baños: "2 Baños",
        precio: "2.000",
        permisoFumar: "No se permite fumar",
        permisoMascotas: "No se permiten mascotas",
        fumar: false,
        mascota: false
    },
    {
        tipo: "arriendo",
        nombre: "Apartamento excelente ubicacion",
        url: "https://http2.mlstatic.com/D_NQ_NP_726005-MLC77243339661_062024-O.webp",
        descripcion: "Apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "2345 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "2 Habitaciones",
        baños: "1 Baños",
        precio: "1.000",
        permisoFumar: "Permitido fumar",
        permisoMascotas: "No se permiten mascotas",
        fumar: true,
        mascota: false
    },
    {
        tipo: "venta",
        nombre: "Apartamento con vista al mar",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375243101.jpg?k=0fb2b47fc0ded1f3cdcf73a960fabe9c4cbfd5b97446f6592d0cffed0f1fbd8c&o=&hp=1",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona con la merjor vista al mar",
        direccion: "123 Luxury Lane, CA 45678",
        habitaciones: "3 Habitaciones",
        baños: "2 Baños",
        precio: "2.000",
        permisoFumar: "Permitido fumar",
        permisoMascotas: "No se permiten mascotas",
        fumar: true,
        mascota: false
    },
    {
        tipo: "arriendo",
        nombre: "casaen condominio",
        url: "https://http2.mlstatic.com/D_NQ_NP_939732-MLC53148542334_012023-O.webp",
        descripcion: "Esta casa esta en un condominio cerrado y vijilado las 24horas",
        direccion: "123 Luxury, Prestige Suburb, MA 45678",
        habitaciones: "4 Habitaciones",
        baños: "2 Baños",
        precio: "3.000",
        permisoFumar: "Permitido fumar",
        permisoMascotas: "Mascotas permitidas",
        fumar: true,
        mascota: true
    }
]

const contVentas = document.getElementById ('contVentas')
const contArriendos = document.getElementById ('contArriendos')
let templateVentas = ""
let templateArriendos = ""
let contador = 0

//ciclo for of para renderizar propiedades en venta
for (let propiedad of propiedades){
       if (propiedad.tipo == "venta" && contador < 3){
        templateVentas += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.url}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i>${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i>${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <span> ${propiedad.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                </span>
                
                <span> ${propiedad.mascota ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </span>
                
              </div>
            </div>
          </div>`
          contador ++

       } }


//ciclo for of para renderizar propiedades en arriendo
for (let propiedad of propiedades){
    if (propiedad.tipo == "arriendo"){
            templateArriendos += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${propiedad.url}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i>${propiedad.direccion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i>${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i>${propiedad.baños}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                    <span> ${propiedad.fumar ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}

                    <span> ${propiedad.mascota ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}

                </span>
                </div>
                </div>
            </div>`
    } } 

//renderizacion de propiedades en el index.html
    contVentas.innerHTML = templateVentas
    contArriendos.innerHTML = templateArriendos