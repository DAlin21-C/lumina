package org.example.backend.Model;
import jakarta.persistence.*;

@Entity
@Table(name = "alumno")
public class Alumno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String a_paterno;

    public Alumno() {}

    public Alumno(String nombre, String correo) {
        this.nombre = nombre;
        this.a_paterno = a_paterno;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getA_paterno() {
        return a_paterno;
    }

    public void setA_paterno(String correo) {
        this.a_paterno = a_paterno;
    }
}






