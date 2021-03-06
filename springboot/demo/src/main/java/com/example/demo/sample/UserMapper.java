package com.example.demo.sample;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

import com.example.demo.common.PagingBean;
import com.example.demo.common.UserInfoBean;

@Mapper
@Repository
public interface UserMapper {
    public List<HashMap<String, Object>> selectUsers();

    public Integer getUserTotalCount(PagingBean pagingBean);

    public List<UserInfoBean> getUserList(PagingBean pagingBean);

    public UserInfoBean getUserDetail(UserInfoBean pagingBean);

    public Integer updateUserInfo(UserInfoBean pagingBean);

    public Integer insertUserInfo(UserInfoBean userinfoBean);
    
    public Integer deleteUserInfo(UserInfoBean userinfoBean);
}
