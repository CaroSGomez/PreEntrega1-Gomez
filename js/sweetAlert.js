(async ()=> {
    const {value: pais} = await Swal.fire({
        title: "Bienvenide!",
        text: "Selecciona tu pais",
        icon: "question",
        confirmButtonText: "Seleccionar",
        footer: "Esta es información importante!",
        allowOutsideClick:false,
	    allowEscapeKey:false,
	    allowEnterKey:false,
        input: "select",
        inputPlaceholder: "País",
        inputOptions: {
            Argentina: "Argentina",
            España: "España",
            Mexico: "México",        
        }
    });

    if(pais){
        Swal.fire({
            title: `¡Estás en MundoViajero ${pais}! `,
            confirmButtonText: "Continuar",

        });
    }
})()