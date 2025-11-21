package org.example.backend.Controller;

import org.example.backend.Model.Alumno;
import org.example.backend.Repository.AlumnoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
