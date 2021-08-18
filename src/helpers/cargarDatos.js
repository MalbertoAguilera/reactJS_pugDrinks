const cargarDatos = (data) => {
      
      return new Promise ((resolve, rejected) => {
            setTimeout(() => {
                  resolve(data);     
            }, 5000);
      });
}

export default cargarDatos;