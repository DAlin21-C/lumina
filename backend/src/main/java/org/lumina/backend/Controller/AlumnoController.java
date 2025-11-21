package org.lumina.backend.Controller;

import org.lumina.backend.Model.Alumno;
import org.lumina.backend.Repository.AlumnoRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Alumno")
public class AlumnoController {

    private final AlumnoRepository alumnoRepository;

    public AlumnoController(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    @PostMapping("/insertar")
    public String insertarUsuario(@RequestBody Alumno alumno) {
        alumnoRepository.save(alumno);
        return "Usuario insertado correctamente";
    }
}
