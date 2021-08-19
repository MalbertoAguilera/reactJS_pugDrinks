const cargarDatos = (data) => {
      
      return new Promise ((resolve, rejected) => {
            setTimeout(() => {
                  resolve(data);     
            }, 2000);
      });
}

export default cargarDatos;