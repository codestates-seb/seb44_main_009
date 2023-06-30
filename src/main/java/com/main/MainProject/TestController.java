package com.main.MainProject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;

@Controller
public class TestController {
    @GetMapping("/test")
    public String getTest(){
        return "server is work!!!";
    }
}
