package com.example.demo.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.common.PagingBean;
import com.example.demo.common.UserInfoBean;
import com.example.demo.sample.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    // @GetMapping("/users")
    // public List<HashMap<String, Object>> getUsers(@RequestParam(name = "pageNo") String pageNo) {

    //     System.out.println("pageNo----->" + pageNo);
    //     System.out.println(userService.getUsers());
        
    //     return userService.getUsers();
    // }


    // @RequestMapping(value="/users", method = RequestMethod.GET)
    @GetMapping("/users")
    public Map<String, Object> getUsers(@RequestParam(name = "pageNo") String pageNo) {

        Map<String, Object> map = new HashMap<String, Object>();

        System.out.println("pageNo----->" + pageNo);

        System.out.println(userService.getUsers());

        PagingBean pagingBean = new PagingBean();

        pagingBean.setPageNo(Integer.parseInt(pageNo));
        pagingBean.setCountPerPage(5);
        pagingBean.setCountPerRecord(10);

        
        List<UserInfoBean> result =  userService.getUserList(pagingBean);

        map.put("pageBean", pagingBean);
        map.put("userList", result);

        return map;
    }


//     @ResponseBody
// public String getFoos(@RequestParam String id) {
//     return "ID: " + id;
// }
}
