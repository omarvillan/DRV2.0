/*
const li1 = document.querySelector(".li-1");
const aHome = document.querySelector(".a-home");

li1.addEventListener('mouseover', removeInactive);
li1.addEventListener('mouseout', removeInactive);

function removeInactive(){
    aHome.classList.toggle('inactive');
}
*/

const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const menuMobile = document.querySelector(".nav-container");
const blackScreen = document.querySelector(".black-screen");
const transferContainer = document.querySelector('.transfer-container');
const divContainer = document.querySelector('.container');

iconMenuMobile.addEventListener('click', toggleMobileMenu)
blackScreen.addEventListener('click', closedDiv)

function toggleMobileMenu(){
    menuMobile.classList.toggle('active');
    blackScreen.classList.toggle('active');
}

function closedDiv(){
    menuMobile.classList.remove('active');
    blackScreen.classList.remove('active');
}




// lista de transferencias------------------------------------------------------

const transferList = [];

transferList.push({
    tasa:622,
    idi: 30301,
    fecha: "24-09-22",
    hora: "08:59",
    nombre: "mairena villamizar",
    documento: 1098822415,
    banco: "mercantil",
    cuenta: "01051234567891234667",
    pesos: 100000,
    distribuidor: "Mariane"});

    transferList.push({
        tasa:622,
        idi: 30302,
        fecha: "24-09-22",
        hora: "08:59",
        nombre: "Jeremy Perez",
        documento: 1098822415,
        banco: "mercantil",
        cuenta: "01051234567891234667",
        pesos: 10000,
        distribuidor: "Mariane"});

    transferList.push({
        tasa:622,
        idi: 30303,
        fecha: "24-09-22",
        hora: "08:59",
        nombre: "Isabella Villan Villamizar",
        documento: 1098822415,
        banco: "venezuela",
        cuenta: "01021234567891234667",
        pesos: 150000,
        distribuidor: "Mariane villamizar"});

transferList.push({
        tasa:622,
        idi: 30304,
        fecha: "24-09-22",
        hora: "09:50",
        nombre: "darcy",
        documento: 1098822415,
        banco: "banesco",
        cuenta: "01341234567891234667",
        pesos: 80000,
    distribuidor: "Darcy"});

    transferList.push({
        tasa:622,
        idi: 30304,
        fecha: "24-09-22",
        hora: "09:50",
        nombre: "pago movil",
        documento: 1098822415,
        banco: "banesco",
        cuenta: "04120312043",
        pesos: 20000,
    distribuidor: "omar"});







    function renderDatos(arr) {

        for (datos of arr){

            const datosDeTransferencia = document.createElement('div');
            datosDeTransferencia.classList.add('transferencias');
            

                const idTransferencia = document.createElement('span');
                idTransferencia.innerText = datos.idi;
                
                

                const fechaTransferencia = document.createElement('span');
                fechaTransferencia.innerHTML = datos.fecha +'<br>'+ datos.hora;


                const datosSpan = document.createElement('div');
                datosSpan.classList.add('span');
                
                    const nombreDistri = document.createElement('div');
                    nombreDistri.classList.add('nombreDistri');

                        const nombreTransferencia = document.createElement('span');
                        nombreTransferencia.innerText = datos.nombre;

                        const documentoTransferencia = document.createElement('span');
                        documentoTransferencia.innerText = datos.documento;

                    const bancoDistri = document.createElement('div');
                    bancoDistri.classList.add('bancoDistri');

                        const bancoTransferencia = document.createElement('span');
                        bancoTransferencia.innerText = datos.banco;

                        const cuentaTransferencia = document.createElement('span');
                        cuentaTransferencia.innerText = datos.cuenta;


                const signoBs = document.createElement('span');
                signoBs.innerText = "bs";
        

                const bsTransferencia = document.createElement('span');
                bsTransferencia.innerText = (datos.pesos / datos.tasa).toFixed(2);
                

                const pesosTransferencia = document.createElement('span');
                pesosTransferencia.innerText = '$ ' + datos.pesos;

                const distribuidorTransferencia = document.createElement('span');
                distribuidorTransferencia.innerText = datos.distribuidor;
                

                const detalleTransferencia = document.createElement('div');
                detalleTransferencia.classList.add('detalle');

                    const captureTransferencia = document.createElement('div');
                    captureTransferencia.classList.add('capture-container');

                        const buttoncapture = document.createElement('button');
                        buttoncapture.classList.add('icon-file-picture');

                    const buttondetalle = document.createElement('button');
                    buttondetalle.classList.add('icon-profile');


            captureTransferencia.appendChild(buttoncapture);
            detalleTransferencia.appendChild(captureTransferencia);
            detalleTransferencia.appendChild(buttondetalle);

            nombreDistri.appendChild(nombreTransferencia);
            nombreDistri.appendChild(documentoTransferencia);
            datosSpan.appendChild(nombreDistri);

            bancoDistri.appendChild(bancoTransferencia);
            bancoDistri.appendChild(cuentaTransferencia);
            datosSpan.appendChild(bancoDistri);


            signoBs
            datosDeTransferencia.appendChild(idTransferencia);
            datosDeTransferencia.appendChild(fechaTransferencia);
            datosDeTransferencia.appendChild(datosSpan);
            datosDeTransferencia.appendChild(signoBs);
            datosDeTransferencia.appendChild(bsTransferencia);
            datosDeTransferencia.appendChild(pesosTransferencia);
            datosDeTransferencia.appendChild(distribuidorTransferencia);
            datosDeTransferencia.appendChild(detalleTransferencia);


            transferContainer.appendChild(datosDeTransferencia);



                            function agregarClaseAdmin(){
                                datosDeTransferencia.classList.add('contAdm');
                                idTransferencia.classList.add('fueraId');
                                datosSpan.classList.add('spanAdm');
                                nombreDistri.classList.add('adm');
                                bancoDistri.classList.add('adm');
                                bsTransferencia.classList.add('adm');
                                distribuidorTransferencia.classList.add('adm');
                                detalleTransferencia.classList.add('divAdm');
                                divContainer.classList.add('divContainerAdm');
                                signoBs.classList.add('signoBs');
                            }
                            agregarClaseAdmin()



            
        }
    }
    renderDatos(transferList);

    
