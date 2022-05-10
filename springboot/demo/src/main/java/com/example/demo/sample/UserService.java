package com.example.demo.sample;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

import com.example.demo.common.PagingBean;
import com.example.demo.common.UserInfoBean;

@Service
public class UserService {
    private UserMapper userMapper;
    private UserDao userDao;

    public UserService(UserMapper userMapper, UserDao userDao){
        this.userMapper = userMapper;
        this.userDao = userDao;
    }

    public List<HashMap<String, Object>> getUsers() {
        return userMapper.selectUsers();
    }

    public List<HashMap<String, Object>> getUsersWithDao() {
        return userDao.getUsers();
    }


    
    public List<UserInfoBean> getUserList(PagingBean pagingBean) {


        //전체카운트 조회
        int totalCount = userMapper.getUserTotalCount();

        pagingBean.calcPage(totalCount);
        System.out.println("totalCount--------->" + totalCount);

        //리스트조회
        // return userMapper.getUserList();
        List<UserInfoBean> result = userMapper.getUserList(pagingBean);

        // System.out.println("result--------->" + result);

        return result;


    }

}
