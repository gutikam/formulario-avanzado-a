document.getElementById("form-1").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const genero = document.querySelector("input[name='genero']:checked");
    const habilidades = document.querySelectorAll("input[name='habilidades']:checked");
    const pais = document.getElementById("pais").value.trim();
    const biografia = document.getElementById("biografia").value.trim();

    if (!name || !email || !fecha || !genero || habilidades.length === 0 || !pais || !biografia) {
        alert("Por favor, complete todos los campos requeridos");
        return;
    }

    let habilidadesSeleccionadas = [];
    habilidades.forEach(habilidad => {
        habilidadesSeleccionadas.push(habilidad.value);
    });

    console.log({
        name,
        email,
        fechanac: fecha,
        genero: genero.value,
        habilidades: habilidadesSeleccionadas,
        pais,
        biografia
    });

    alert("Formulario enviado con éxito");
    this.reset();
});