package org.lumina.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HoliController {
    @GetMapping("/hola")
    public String decirHola() {
        return "¡Holi sonia y oscar, ya funciona el servidor Spring Boot 🍃";
    }
}
