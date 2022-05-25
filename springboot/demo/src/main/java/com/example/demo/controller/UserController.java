package com.example.demo.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.common.PagingBean;
import com.example.demo.common.UserInfoBean;
import com.example.demo.sample.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @GetMapping("/test")
    public String test(){

        return  "testddd";
    }
    // @GetMapping("/users")
    // public List<HashMap<String, Object>> getUsers(@RequestParam(name = "pageNo") String pageNo) {

    //     System.out.println("pageNo----->" + pageNo);
    //     System.out.println(userService.getUsers());
        
    //     return userService.getUsers();
    // }


    // @RequestMapping(value="/users", method = RequestMethod.GET)
    @GetMapping("/api/users")
    public Map<String, Object> getUsers(@RequestParam(name = "pageNo") String pageNo, @RequestParam(name="searchKeyword") String searchKeyworkd) {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("pageNo----->" + pageNo);

        System.out.println(userService.getUsers());

        PagingBean pagingBean = new PagingBean();

        pagingBean.setPageNo(Integer.parseInt(pageNo));
        pagingBean.setSearchkeyword(searchKeyworkd);
        pagingBean.setCountPerPage(5);
        pagingBean.setCountPerRecord(10);

        
        List<UserInfoBean> result =  userService.getUserList(pagingBean);

        map.put("pageBean", pagingBean);
        map.put("userList", result);

        return map;
    }


    @GetMapping("/api/userDetail")
    public Map<String, Object> getUserDetail(UserInfoBean userbean) {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("getUserDetail start--------------------------");
        System.out.println("id----->" + userbean.getIdx());
        System.out.println(userService.getUserDetail(userbean));

        UserInfoBean result = userService.getUserDetail(userbean);
        
        System.out.println(result);


        map.put("userDetail", result);

        return map;
    }

    
    @PostMapping("/api/updateUserinfo")
    // @RequestMapping(value="/api/updateUserinfo", method = RequestMethod.POST)
    public Map<String, Object> updateUserInfo(@RequestBody UserInfoBean userbean, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("updateUserInfo start--------------------------");
        System.out.println("id----->" + userbean.getIdx());

        String result = userService.updateUserInfo(userbean);

        map.put("result", result);

        return map;
    }


     @PostMapping("/api/insertUserInfo")
    // @RequestMapping(value="/api/insertUserInfo", method = RequestMethod.POST)
    public Map<String, Object> insertUserInfo(@RequestBody UserInfoBean userbean, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("insertUserInfo start--------------------------");

        String result = userService.insertUserInfo(userbean);

        map.put("result", result);

        return map;
    }
    @PostMapping("/api/deleteUserInfo")
    public Map<String, Object> deleteUserInfo(@RequestBody UserInfoBean userbean, HttpServletRequest request) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("deleteUserInfo start--------------------------");

        String result = userService.deleteUserInfo(userbean);

        map.put("result", result);

        return map;
    }


    

}
