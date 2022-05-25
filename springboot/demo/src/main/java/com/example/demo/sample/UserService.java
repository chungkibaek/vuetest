package com.example.demo.sample;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        int totalCount = userMapper.getUserTotalCount(pagingBean);

        pagingBean.calcPage(totalCount);

        //리스트조회
        List<UserInfoBean> result = userMapper.getUserList(pagingBean);
        return result;

    }

    
    public UserInfoBean getUserDetail(UserInfoBean userinfoBean) {
        
        return userMapper.getUserDetail(userinfoBean);
    }


    @Transactional(rollbackFor = Exception.class)
    public String updateUserInfo(UserInfoBean userinfoBean) {
        
        String result ="success";
        userMapper.updateUserInfo(userinfoBean);

        return result;
    }

    @Transactional(rollbackFor =  Exception.class)
    public String insertUserInfo(UserInfoBean userinfoBean){
        String result = "success";

        userMapper.insertUserInfo(userinfoBean);
        

        return result;
    }

    @Transactional(rollbackFor =  Exception.class)
    public String deleteUserInfo(UserInfoBean userinfoBean){
        String result = "success";

        userMapper.deleteUserInfo(userinfoBean);
        

        return result;
    }
}
