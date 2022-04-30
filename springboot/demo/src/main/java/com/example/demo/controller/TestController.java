package com.example.demo.controller;


import java.util.HashMap;
import java.util.List;

import com.example.demo.sample.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

    private UserService userService;
    public TestController(UserService userService){
        this.userService = userService;
    }
    @GetMapping("/test")
    public String test(){

        return  "testddd";
    }
    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List<HashMap<String, Object>> getUsers() {

        System.out.println(userService.getUsers());
        
        return userService.getUsers();
    }


}
